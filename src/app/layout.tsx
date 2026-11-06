import type { Metadata } from 'next';
import { Onest, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/I18nProvider';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-onest',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CRISPOL — Фабрика дизайнерской мягкой мебели | Молдова',
  description:
    'Дизайнерская мягкая мебель от молдавской фабрики CRISPOL. Итальянская эстетика, индивидуальное исполнение, прямые цены от производителя. Кровати, диваны, кресла. Доставка по Кишинёву и всей Молдове.',
  metadataBase: new URL('https://crispol.md'),
  openGraph: {
    title: 'CRISPOL — Фабрика дизайнерской мягкой мебели',
    description:
      'Итальянская эстетика. Индивидуальное исполнение. Прямые цены от производителя. Онлайн-каталог скоро откроется.',
    url: 'https://crispol.md',
    siteName: 'CRISPOL',
    locale: 'ru_MD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRISPOL — Фабрика дизайнерской мягкой мебели',
    description:
      'Итальянская эстетика. Индивидуальное исполнение. Прямые цены от производителя.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${onest.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#F4EFE6] text-[#161311] selection:bg-[#C59B6D]/20">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
