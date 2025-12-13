'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('language');
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
      window.location.reload();
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">{t('switchTo')}</span>
      <button
        onClick={() => switchLocale('en')}
        className={`text-sm px-2 py-1 rounded transition ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-pressed={locale === 'en'}
        disabled={isPending}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        className={`text-sm px-2 py-1 rounded transition ${
          locale === 'es'
            ? 'bg-blue-600 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-pressed={locale === 'es'}
        disabled={isPending}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;
