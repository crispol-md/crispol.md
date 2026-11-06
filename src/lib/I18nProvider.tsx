'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Locale, type Translations } from '@/lib/i18n';

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru');

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'ru' ? 'ro' : 'ru'));
  }, []);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
