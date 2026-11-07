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
  metadataBase: new URL('https://crispol.md'),
  alternates: { canonical: 'https://crispol.md' },
  title:
    'CRISPOL (Крис Пол) — Фабрика мягкой мебели в Молдове | Кровати и диваны на заказ (crispol.md)',
  description:
    'Официальный сайт мебельной фабрики CRISPOL (Молдова, Кишинев, Бельцы). Производство двуспальных кроватей с подъемным механизмом и диванов на заказ без наценок салонов. Fabrica de mobilă tapițată Crispol Moldova.',
  keywords:
    'crispol, crispol.md, крис пол мебель, crispol mobila, crispol srl, фабрика мебели молдова, кровати на заказ кишинев, мебель бельцы, paturi la comanda chisinau',
  openGraph: {
    title:
      'CRISPOL (Крис Пол) — Фабрика мягкой мебели в Молдове | Кровати и диваны на заказ',
    description:
      'Официальный сайт мебельной фабрики CRISPOL. Кровати и диваны на заказ напрямую с фабрики без наценок салонов. Доставка по Кишинёву и всей Молдове.',
    url: 'https://crispol.md',
    siteName: 'CRISPOL',
    locale: 'ru_MD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRISPOL — Кровати и диваны на заказ | Фабрика мягкой мебели',
    description:
      'Производство мягкой мебели на заказ. Напрямую с фабрики без наценок салонов. Молдова, Кишинев.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['FurnitureStore', 'Organization', 'WebSite'],
  name: 'CRISPOL',
  alternateName: [
    'Crispol Mobila',
    'Крис Пол Мебель',
    'CRISPOL SRL',
    'crispol.md',
  ],
  url: 'https://crispol.md',
  logo: 'https://crispol.md/logo.svg',
  telephone: '+37378128316',
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Chișinău',
      addressCountry: 'MD',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Bălți',
      addressCountry: 'MD',
    },
  ],
  sameAs: [
    'https://999.md/ru/profile/crispol-md',
    'https://www.instagram.com/crispol.md/',
    'https://www.facebook.com/crispol.mobila/',
    'https://www.youtube.com/channel/UCbCcRUMVsXPtKYZlRueMrxg',
    'https://x.com/crispol_md',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${onest.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#F4EFE6] text-[#161311] selection:bg-[#C59B6D]/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
