'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nProvider';
import Header from './Header';

const TARGET_DATE = new Date('2026-12-06T00:00:00+02:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function HeroSection() {
  const { t } = useI18n();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative p-2.5 sm:p-4 md:p-5">
      <div className="relative w-full min-h-[100svh] lg:min-h-[92vh] h-auto rounded-3xl overflow-hidden flex flex-col justify-between">
        {/* Background foto.jpg */}
        <Image
          src="/foto.jpg"
          alt="CRISPOL Premium Furniture"
          fill
          priority
          className="object-cover animate-hero-scale"
          sizes="100vw"
        />

        {/* Multi-layer gradient overlay — lighter in center to let the photo breathe */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/95 via-[#120F0D]/50 to-[#120F0D]/40 pointer-events-none" />

        {/* Floating glass header */}
        <Header />

        {/* Content grid — with safe top padding to clear the floating header */}
        <div className="relative z-10 flex-1 flex flex-col justify-end p-4 sm:p-6 md:p-10 lg:p-14 pt-24 sm:pt-28 md:pt-36 pb-6 sm:pb-8 md:pb-10 lg:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-end">
            {/* LEFT — Main content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              {/* Technical badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5">
                <span
                  className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.08em] sm:tracking-[0.2em] text-[#FAF6F0]/80 uppercase font-medium"
                  style={{ fontFamily: 'var(--font-mono), monospace' }}
                >
                  {t.heroBadge}
                </span>
              </div>

              {/* Big heading — compact 2-3 lines */}
              <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#FAF6F0] leading-[1.15] sm:leading-[1.12] tracking-tight max-w-2xl whitespace-pre-line">
                {t.heroTitle}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
                {t.heroSubtitle}
              </p>

              {/* 3 Glass micro-badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[t.heroBadge1, t.heroBadge2, t.heroBadge3].map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 backdrop-blur-sm bg-white/10 border border-white/15 rounded-lg text-[11px] sm:text-xs text-[#FAF6F0]/90 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D] flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* 2 CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1 sm:pt-2 w-full sm:w-auto">
                <a
                  href="https://999.md/ru/profile/crispol-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto block"
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FAF6F0] text-[#161311] hover:bg-white font-semibold px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-colors cursor-pointer shadow-lg shadow-black/20 active:scale-[0.98]"
                  >
                    {t.heroBtnPrimary}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </motion.span>
                </a>
                <a
                  href="https://t.me/cernavation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto block"
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 text-white px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-medium hover:bg-white/15 transition-colors cursor-pointer active:scale-[0.98]"
                  >
                    {t.heroBtnSecondary}
                  </motion.span>
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Glassmorphism Countdown Dock (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="lg:col-span-5 w-full"
            >
              <div className="backdrop-blur-xl bg-[#161311]/75 border border-white/15 rounded-2xl p-4 sm:p-5 md:p-6 text-[#FAF6F0] shadow-xl">
                {/* Title + date badge */}
                <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                  <h3 className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-white/70 leading-tight max-w-[200px]">
                    {t.countdownTitle}
                  </h3>
                  <span
                    className="flex-shrink-0 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#C59B6D]/20 border border-[#C59B6D]/30 rounded-lg text-[#C59B6D] text-[11px] sm:text-xs font-semibold"
                    style={{ fontFamily: 'var(--font-mono), monospace' }}
                  >
                    {t.countdownDate}
                  </span>
                </div>

                {/* 4 Timer cells */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {([
                    { value: timeLeft.days, label: t.days },
                    { value: timeLeft.hours, label: t.hours },
                    { value: timeLeft.minutes, label: t.minutes },
                    { value: timeLeft.seconds, label: t.seconds },
                  ] as const).map((cell, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 bg-white/5 border border-white/10 rounded-xl py-2.5 sm:py-3"
                    >
                      <span
                        suppressHydrationWarning
                        className="text-xl sm:text-2xl md:text-3xl font-semibold tabular-nums text-[#FAF6F0]"
                        style={{ fontFamily: 'var(--font-mono), monospace' }}
                      >
                        {String(cell.value).padStart(2, '0')}
                      </span>
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider sm:tracking-widest text-white/50">
                        {cell.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/60">
                    <span>{t.countdownProgress}</span>
                    <span
                      className="font-semibold text-[#C59B6D]"
                      style={{ fontFamily: 'var(--font-mono), monospace' }}
                    >
                      78%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#C59B6D] to-[#D4A96A] rounded-full animate-shimmer"
                      style={{ width: '78%' }}
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-white/45 leading-relaxed mt-1.5 sm:mt-2">
                    {t.countdownUpcoming}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
