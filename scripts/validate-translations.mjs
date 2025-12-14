#!/usr/bin/env node
/**
 * Translation Validation Script
 *
 * Validates locale JSON files against the source (en.json) to ensure:
 * 1. All keys from source exist in target
 * 2. No extra keys in target that don't exist in source
 * 3. All placeholders ({variable}) are preserved
 * 4. JSON syntax is valid
 *
 * Usage:
 *   node scripts/validate-translations.mjs [locale]
 *   node scripts/validate-translations.mjs          # validates all locales
 *   node scripts/validate-translations.mjs es       # validates only Spanish
 *   node scripts/validate-translations.mjs vi zh ru # validates specific locales
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MESSAGES_DIR = path.join(__dirname, '..', 'messages');
const SOURCE_LOCALE = 'en';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
};

/**
 * Recursively extract all keys from a nested object
 * Returns array of dot-notation key paths
 */
function extractKeys(obj, prefix = '') {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...extractKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

/**
 * Get value at a dot-notation path from an object
 */
function getValueAtPath(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Extract placeholders like {variable} from a string
 */
function extractPlaceholders(str) {
  if (typeof str !== 'string') return [];
  const matches = str.match(/\{[^}]+\}/g);
  return matches ? matches.sort() : [];
}

/**
 * Validate a single locale file against the source
 */
function validateLocale(locale, sourceData) {
  const localePath = path.join(MESSAGES_DIR, `${locale}.json`);
  const results = {
    locale,
    valid: true,
    errors: [],
    warnings: [],
    stats: {
      totalKeys: 0,
      missingKeys: 0,
      extraKeys: 0,
      placeholderMismatches: 0,
      untranslated: 0,
    },
  };

  // Check if file exists
  if (!fs.existsSync(localePath)) {
    results.valid = false;
    results.errors.push(`File not found: ${localePath}`);
    return results;
  }

  // Try to parse JSON
  let localeData;
  try {
    const content = fs.readFileSync(localePath, 'utf-8');
    localeData = JSON.parse(content);
  } catch (error) {
    results.valid = false;
    results.errors.push(`JSON parse error: ${error.message}`);
    return results;
  }

  // Extract all keys from both source and locale
  const sourceKeys = extractKeys(sourceData);
  const localeKeys = extractKeys(localeData);
  results.stats.totalKeys = sourceKeys.length;

  const sourceKeySet = new Set(sourceKeys);
  const localeKeySet = new Set(localeKeys);

  // Find missing keys (in source but not in locale)
  const missingKeys = sourceKeys.filter(key => !localeKeySet.has(key));
  results.stats.missingKeys = missingKeys.length;
  if (missingKeys.length > 0) {
    results.valid = false;
    results.errors.push({
      type: 'missing_keys',
      count: missingKeys.length,
      keys: missingKeys.slice(0, 10), // Show first 10
      hasMore: missingKeys.length > 10,
    });
  }

  // Find extra keys (in locale but not in source)
  const extraKeys = localeKeys.filter(key => !sourceKeySet.has(key));
  results.stats.extraKeys = extraKeys.length;
  if (extraKeys.length > 0) {
    results.warnings.push({
      type: 'extra_keys',
      count: extraKeys.length,
      keys: extraKeys.slice(0, 10),
      hasMore: extraKeys.length > 10,
    });
  }

  // Check placeholder preservation and detect untranslated strings
  for (const key of sourceKeys) {
    const sourceValue = getValueAtPath(sourceData, key);
    const localeValue = getValueAtPath(localeData, key);

    if (typeof sourceValue === 'string' && typeof localeValue === 'string') {
      // Check placeholders
      const sourcePlaceholders = extractPlaceholders(sourceValue);
      const localePlaceholders = extractPlaceholders(localeValue);

      if (JSON.stringify(sourcePlaceholders) !== JSON.stringify(localePlaceholders)) {
        results.stats.placeholderMismatches++;
        results.errors.push({
          type: 'placeholder_mismatch',
          key,
          expected: sourcePlaceholders,
          found: localePlaceholders,
        });
        results.valid = false;
      }

      // Check if value is untranslated (same as English, excluding brand names)
      const brandNames = ['Free Geek', 'Plug Into Portland', 'THE BRIDGE', 'Gift a Geekbox',
                          'Linux Mint', 'NIST', 'i-SIGMA', 'Email', 'EIN:', 'eBay', 'Big Cartel',
                          'Portland', 'Oregon', 'TriMet', 'MAX', 'Macland'];
      const isBrandNameOnly = brandNames.some(brand =>
        sourceValue.includes(brand) && sourceValue.length < 100
      );

      if (sourceValue === localeValue && sourceValue.length > 3 && !isBrandNameOnly) {
        results.stats.untranslated++;
        if (results.stats.untranslated <= 5) {
          results.warnings.push({
            type: 'possibly_untranslated',
            key,
            value: sourceValue.substring(0, 50) + (sourceValue.length > 50 ? '...' : ''),
          });
        }
      }
    }
  }

  if (results.stats.untranslated > 5) {
    results.warnings.push({
      type: 'untranslated_summary',
      count: results.stats.untranslated,
      message: `${results.stats.untranslated - 5} more potentially untranslated strings`,
    });
  }

  return results;
}

/**
 * Print validation results with colors
 */
function printResults(results) {
  const { locale, valid, errors, warnings, stats } = results;

  console.log('');
  console.log(`${colors.cyan}━━━ ${locale.toUpperCase()} ━━━${colors.reset}`);

  // Stats
  console.log(`${colors.dim}Keys: ${stats.totalKeys}${colors.reset}`);

  if (valid && warnings.length === 0) {
    console.log(`${colors.green}✓ All validations passed${colors.reset}`);
    return;
  }

  // Errors
  for (const error of errors) {
    if (typeof error === 'string') {
      console.log(`${colors.red}✗ ${error}${colors.reset}`);
    } else if (error.type === 'missing_keys') {
      console.log(`${colors.red}✗ Missing ${error.count} keys:${colors.reset}`);
      for (const key of error.keys) {
        console.log(`  ${colors.dim}- ${key}${colors.reset}`);
      }
      if (error.hasMore) {
        console.log(`  ${colors.dim}... and ${error.count - 10} more${colors.reset}`);
      }
    } else if (error.type === 'placeholder_mismatch') {
      console.log(`${colors.red}✗ Placeholder mismatch at "${error.key}":${colors.reset}`);
      console.log(`  ${colors.dim}Expected: ${error.expected.join(', ') || '(none)'}${colors.reset}`);
      console.log(`  ${colors.dim}Found: ${error.found.join(', ') || '(none)'}${colors.reset}`);
    }
  }

  // Warnings
  for (const warning of warnings) {
    if (warning.type === 'extra_keys') {
      console.log(`${colors.yellow}⚠ Extra ${warning.count} keys (not in source):${colors.reset}`);
      for (const key of warning.keys) {
        console.log(`  ${colors.dim}- ${key}${colors.reset}`);
      }
      if (warning.hasMore) {
        console.log(`  ${colors.dim}... and ${warning.count - 10} more${colors.reset}`);
      }
    } else if (warning.type === 'possibly_untranslated') {
      console.log(`${colors.yellow}⚠ Possibly untranslated: "${warning.key}"${colors.reset}`);
      console.log(`  ${colors.dim}"${warning.value}"${colors.reset}`);
    } else if (warning.type === 'untranslated_summary') {
      console.log(`${colors.yellow}⚠ ${warning.message}${colors.reset}`);
    }
  }

  // Summary line
  if (!valid) {
    console.log(`${colors.red}✗ Validation failed${colors.reset}`);
  } else {
    console.log(`${colors.yellow}⚠ Passed with warnings${colors.reset}`);
  }
}

/**
 * Main entry point
 */
function main() {
  const args = process.argv.slice(2);

  // Load source file
  const sourcePath = path.join(MESSAGES_DIR, `${SOURCE_LOCALE}.json`);
  if (!fs.existsSync(sourcePath)) {
    console.error(`${colors.red}Source file not found: ${sourcePath}${colors.reset}`);
    process.exit(1);
  }

  let sourceData;
  try {
    sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf-8'));
  } catch (error) {
    console.error(`${colors.red}Failed to parse source file: ${error.message}${colors.reset}`);
    process.exit(1);
  }

  // Determine which locales to validate
  let localesToValidate;
  if (args.length > 0) {
    localesToValidate = args;
  } else {
    // Get all locale files except source
    const files = fs.readdirSync(MESSAGES_DIR);
    localesToValidate = files
      .filter(f => f.endsWith('.json') && f !== `${SOURCE_LOCALE}.json`)
      .map(f => f.replace('.json', ''));
  }

  console.log(`${colors.blue}Translation Validation${colors.reset}`);
  console.log(`${colors.dim}Source: ${SOURCE_LOCALE}.json (${extractKeys(sourceData).length} keys)${colors.reset}`);
  console.log(`${colors.dim}Validating: ${localesToValidate.join(', ')}${colors.reset}`);

  // Validate each locale
  let allValid = true;
  for (const locale of localesToValidate) {
    const results = validateLocale(locale, sourceData);
    printResults(results);
    if (!results.valid) {
      allValid = false;
    }
  }

  // Final summary
  console.log('');
  if (allValid) {
    console.log(`${colors.green}━━━ All locales valid ━━━${colors.reset}`);
  } else {
    console.log(`${colors.red}━━━ Some locales have errors ━━━${colors.reset}`);
    process.exit(1);
  }
}

main();
