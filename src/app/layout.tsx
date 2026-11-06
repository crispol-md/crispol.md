import type { Metadata } from 'next';
import { Onest, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/I18nProvider';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-onest',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${onest.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-[#FAF5E9] text-[#3B2F2F] selection:bg-[#3B2F2F]/10">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
