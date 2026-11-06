'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nProvider';

export default function Header() {
  const { locale, t, toggleLocale } = useI18n();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-20"
    >
      <div className="backdrop-blur-md bg-[#FAF6F0]/90 border border-black/10 rounded-2xl px-4 md:px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="CRISPOL"
            width={160}
            height={32}
            priority
            unoptimized
            className="h-7 md:h-8 w-auto"
          />
        </a>

        {/* Center: Status + Nav */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs text-[#161311]/70 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.headerStatus}</span>
          </div>

          <div className="h-4 w-px bg-[#161311]/10" />

          <nav className="flex items-center gap-4 text-sm font-medium text-[#161311]/70">
            <a
              href="#showroom"
              className="hover:text-[#161311] transition-colors"
            >
              {t.headerShowroom}{' '}
              <span className="text-[#C59B6D]">(7)</span>
            </a>
            <a
              href="#construct"
              className="hover:text-[#161311] transition-colors"
            >
              {t.headerConstruct}
            </a>
            <a
              href="#contact"
              className="hover:text-[#161311] transition-colors"
            >
              {t.headerOrder}
            </a>
          </nav>
        </div>

        {/* Right: Phone + Language */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+37378128316"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#161311] hover:text-[#C59B6D] transition-colors"
            style={{ fontFamily: 'var(--font-mono), monospace' }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            +373 78 128 316
          </a>

          {/* Language capsule */}
          <div className="relative flex items-center bg-[#161311]/5 rounded-full border border-[#161311]/10 p-0.5">
            <motion.div
              layout
              className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#161311]"
              animate={{ left: locale === 'ru' ? '2px' : 'calc(50%)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
            <button
              onClick={() => locale !== 'ru' && toggleLocale()}
              className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                locale === 'ru'
                  ? 'text-white'
                  : 'text-[#161311]/50 hover:text-[#161311]'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => locale !== 'ro' && toggleLocale()}
              className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                locale === 'ro'
                  ? 'text-white'
                  : 'text-[#161311]/50 hover:text-[#161311]'
              }`}
            >
              RO
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
