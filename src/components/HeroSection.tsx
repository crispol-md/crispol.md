'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nProvider';

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

function CountdownCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-[72px] sm:w-[88px] h-[72px] sm:h-[88px] rounded-2xl bg-[#F5F5DC] border border-[rgba(59,47,47,0.12)] flex items-center justify-center shadow-sm">
        <span className="text-3xl sm:text-4xl font-semibold text-[#3B2F2F] tabular-nums font-display">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[11px] sm:text-xs text-[#8C7A6B] uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useI18n();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5E9] via-[#FAF5E9] to-[#F5F5DC]/40 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Super title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[11px] sm:text-xs tracking-[0.3em] text-[#8C7A6B] mb-5 sm:mb-6 font-medium"
        >
          {t.superTitle}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-[#3B2F2F] leading-[1.15] tracking-tight mb-6 sm:mb-8 whitespace-pre-line"
        >
          {t.heroTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg text-[#8C7A6B] max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-3 sm:gap-5"
        >
          <CountdownCard value={timeLeft.days} label={t.days} />
          <CountdownCard value={timeLeft.hours} label={t.hours} />
          <CountdownCard value={timeLeft.minutes} label={t.minutes} />
          <CountdownCard value={timeLeft.seconds} label={t.seconds} />
        </motion.div>
      </div>
    </section>
  );
}
