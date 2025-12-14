'use client';

import { useState, useRef, useEffect, useTransition, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';

// Locale configuration - native names for each language
// To add a new locale: 1) Add entry here, 2) Add to locales in src/i18n/request.ts, 3) Create messages/{locale}.json
const LOCALE_CONFIG: Record<string, { nativeName: string; shortName: string }> = {
  en: { nativeName: 'English', shortName: 'EN' },
  es: { nativeName: 'Español', shortName: 'ES' },
  vi: { nativeName: 'Tiếng Việt', shortName: 'VI' },
  zh: { nativeName: '中文', shortName: '中' },
  ru: { nativeName: 'Русский', shortName: 'RU' },
};

// Get available locales from the config
function getAvailableLocales() {
  // Available locales that have translations in messages/{locale}.json
  return ['en', 'es', 'vi', 'zh', 'ru'] as const;
}

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const t = useTranslations('language');
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const availableLocales = getAvailableLocales();
  const menuId = 'language-menu';

  const switchLocale = useCallback((newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
      window.location.reload();
    });
  }, [currentLocale]);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          // Focus first/next menu item
          const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
          if (items && items.length > 0) {
            const focused = document.activeElement;
            const currentIndex = Array.from(items).indexOf(focused as Element);
            const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            (items[nextIndex] as HTMLElement).focus();
          }
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
          if (items && items.length > 0) {
            const focused = document.activeElement;
            const currentIndex = Array.from(items).indexOf(focused as Element);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            (items[prevIndex] as HTMLElement).focus();
          }
        }
        break;
      case 'Enter':
      case ' ':
        if (event.target === buttonRef.current) {
          event.preventDefault();
          setIsOpen(!isOpen);
        }
        break;
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
        }
        break;
    }
  }, [isOpen]);

  // Focus first menu item when menu opens
  useEffect(() => {
    if (isOpen) {
      const firstItem = menuRef.current?.querySelector('[role="menuitem"]');
      if (firstItem) {
        (firstItem as HTMLElement).focus();
      }
    }
  }, [isOpen]);

  const currentConfig = LOCALE_CONFIG[currentLocale] || LOCALE_CONFIG.en;

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      {/* Globe button trigger */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-label={`${t('switchTo')}: ${currentConfig.nativeName}`}
        className={`
          flex items-center gap-1.5 px-2 py-1.5 rounded-md transition-colors
          text-gray-300 hover:text-white hover:bg-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
          ${isPending ? 'opacity-50 cursor-wait' : ''}
        `}
      >
        {/* Globe Icon */}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        {/* Current language abbreviation */}
        <span className="text-sm font-medium">{currentConfig.shortName}</span>
        {/* Dropdown arrow */}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={t('switchTo')}
          className="
            absolute right-0 mt-2 py-1 w-40
            bg-gray-900 border border-gray-700 rounded-lg shadow-xl
            z-50 origin-top-right
            animate-in fade-in slide-in-from-top-2 duration-150
          "
        >
          {availableLocales.map((locale) => {
            const config = LOCALE_CONFIG[locale] || { nativeName: locale, shortName: locale.toUpperCase() };
            const isSelected = locale === currentLocale;

            return (
              <button
                key={locale}
                role="menuitem"
                onClick={() => switchLocale(locale)}
                disabled={isPending}
                aria-current={isSelected ? 'true' : undefined}
                className={`
                  w-full px-4 py-2 text-left text-sm flex items-center justify-between
                  focus:outline-none focus:bg-gray-800
                  ${isSelected
                    ? 'text-blue-400 bg-gray-800/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }
                  ${isPending ? 'cursor-wait' : ''}
                `}
              >
                <span>{config.nativeName}</span>
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
