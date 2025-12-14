import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['en', 'es', 'vi', 'zh', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

function isValidLocale(locale: string | undefined): locale is Locale {
  return locales.includes(locale as Locale);
}

export default getRequestConfig(async () => {
  // Get locale from cookie or default
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  const cookieValue = localeCookie?.value;

  // Validate the locale - use default if invalid
  const locale = isValidLocale(cookieValue) ? cookieValue : defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
