'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nProvider';

export default function Header() {
  const { locale, t, toggleLocale } = useI18n();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF5E9]/80 border-b border-[rgba(59,47,47,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="CRISPOL"
            width={200}
            height={40}
            priority
            unoptimized
            className="h-8 sm:h-10 w-auto"
          />
        </a>

        {/* Badge + Language toggle */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Status badge — hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[rgba(59,47,47,0.12)] bg-[#F5F5DC]/60 text-xs sm:text-[13px] text-[#3B2F2F]/80 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span>{t.badge}</span>
          </div>

          {/* Language switcher — pill capsule */}
          <div className="relative flex items-center bg-[#F5F5DC] rounded-full border border-[rgba(59,47,47,0.15)] p-0.5">
            {/* Sliding highlight */}
            <motion.div
              layout
              className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#3B2F2F]"
              animate={{ left: locale === 'ru' ? '2px' : 'calc(50%)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
            <button
              onClick={() => locale !== 'ru' && toggleLocale()}
              className={`relative z-10 px-3.5 sm:px-4 py-1 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                locale === 'ru' ? 'text-[#FAF5E9]' : 'text-[#3B2F2F]/60 hover:text-[#3B2F2F]'
              }`}
              aria-label="Русский"
            >
              RU
            </button>
            <button
              onClick={() => locale !== 'ro' && toggleLocale()}
              className={`relative z-10 px-3.5 sm:px-4 py-1 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                locale === 'ro' ? 'text-[#FAF5E9]' : 'text-[#3B2F2F]/60 hover:text-[#3B2F2F]'
              }`}
              aria-label="Română"
            >
              RO
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
