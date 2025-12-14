import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Free Geek brand colors
        'fg': {
          // Primary
          black: '#000000',
          white: '#FFFFFF',
          // Accent blue
          blue: {
            DEFAULT: '#2563EB',
            light: '#3B82F6',
            dark: '#1D4ED8',
          },
          // Illustration colors
          teal: '#00A0B0',
          purple: '#9B4DCA',
          orange: '#F5A623',
          yellow: '#F8E71C',
        },
      },
      fontFamily: {
        // Includes fallbacks for CJK (Chinese/Japanese/Korean) and Cyrillic (Russian)
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
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
