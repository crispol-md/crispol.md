'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nProvider';

export default function BentoFeatures() {
  const { t, locale } = useI18n();

  const features = [
    {
      title: t.feature1Title,
      desc: t.feature1Desc,
      stat: '-30%',
      statLabel: locale === 'ru' ? 'vs салон' : 'vs salon',
      dark: true,
      bg: 'bg-[#161311]',
    },
    {
      title: t.feature2Title,
      desc: t.feature2Desc,
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#161311]/40"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      dark: false,
      bg: 'bg-[#EAE2D6]',
    },
    {
      title: t.feature3Title,
      desc: t.feature3Desc,
      stat: '50+',
      statLabel: locale === 'ru' ? 'тканей' : 'țesături',
      dark: false,
      bg: 'bg-[#EAE2D6]',
    },
    {
      title: t.feature4Title,
      desc: t.feature4Desc,
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#FAF6F0]/40"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      dark: true,
      bg: 'bg-[#1F1A17]',
    },
  ];

  return (
    <section id="construct" className="bg-[#F4EFE6] px-3 md:px-5 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#161311] tracking-tight mb-2">
            {t.bentoTitle}
          </h2>
          <p className="text-sm md:text-base text-[#161311]/50">
            {t.bentoSubtitle}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 ${f.bg} ${
                f.dark ? 'text-[#FAF6F0]' : 'text-[#161311]'
              }`}
            >
              {f.stat && (
                <div className="mb-4">
                  <span
                    className="text-4xl md:text-5xl font-bold text-[#C59B6D]"
                    style={{ fontFamily: 'var(--font-mono), monospace' }}
                  >
                    {f.stat}
                  </span>
                  {f.statLabel && (
                    <span
                      className="ml-2 text-xs uppercase tracking-wider opacity-50"
                      style={{ fontFamily: 'var(--font-mono), monospace' }}
                    >
                      {f.statLabel}
                    </span>
                  )}
                </div>
              )}
              {f.icon && <div className="mb-4">{f.icon}</div>}
              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">
                {f.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  f.dark ? 'text-white/60' : 'text-[#161311]/60'
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
