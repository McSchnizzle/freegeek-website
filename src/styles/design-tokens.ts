/**
 * Free Geek Design Tokens
 *
 * Brand identity based on freegeek.org:
 * - Primary: Black with white text
 * - Accent: Blue for CTAs and links
 * - Clean, accessible, nonprofit feel
 */

export const colors = {
  // Primary brand colors
  brand: {
    black: '#000000',
    white: '#FFFFFF',
    blue: '#2563EB',      // Primary accent (Tailwind blue-600)
    blueHover: '#1D4ED8', // Hover state (Tailwind blue-700)
    blueLight: '#3B82F6', // Light accent (Tailwind blue-500)
  },

  // Illustration palette (from AI-generated images)
  illustration: {
    teal: '#00A0B0',
    purple: '#9B4DCA',
    orange: '#F5A623',
    yellow: '#F8E71C',
  },

  // Neutral grays
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Semantic colors
  semantic: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

export const typography = {
  // Font families - includes fallbacks for CJK (Chinese/Japanese/Korean) and Cyrillic (Russian)
  fontFamily: {
    sans: [
      'Inter',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      // CJK fallbacks
      'Noto Sans SC',
      'Noto Sans TC',
      'PingFang SC',
      'PingFang TC',
      'Microsoft YaHei',
      'Hiragino Sans GB',
      // Cyrillic-friendly fallbacks
      'Noto Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    mono: [
      'JetBrains Mono',
      'Fira Code',
      'Consolas',
      'monospace',
    ],
  },

  // Font sizes (rem)
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },

  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },

  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

export const spacing = {
  // Spacing scale (rem)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// Component-specific tokens
export const components = {
  button: {
    primary: {
      background: colors.brand.blue,
      backgroundHover: colors.brand.blueHover,
      text: colors.brand.white,
      borderRadius: borderRadius.lg,
      paddingX: spacing[8],
      paddingY: spacing[4],
    },
    secondary: {
      background: colors.brand.white,
      backgroundHover: colors.gray[100],
      text: colors.brand.black,
      borderRadius: borderRadius.lg,
      paddingX: spacing[8],
      paddingY: spacing[4],
    },
    outline: {
      background: 'transparent',
      backgroundHover: colors.brand.blueHover,
      text: colors.brand.white,
      border: `2px solid ${colors.brand.white}`,
      borderRadius: borderRadius.lg,
      paddingX: spacing[8],
      paddingY: spacing[4],
    },
  },
  header: {
    background: colors.brand.black,
    text: colors.brand.white,
    height: '72px',
  },
  footer: {
    background: colors.brand.black,
    text: colors.brand.white,
  },
  section: {
    paddingY: spacing[20],
    paddingX: spacing[4],
    maxWidth: '1280px',
  },
} as const;

const designTokens = {
  colors,
  typography,
  spacing,
  breakpoints,
  shadows,
  borderRadius,
  components,
};

export default designTokens;
