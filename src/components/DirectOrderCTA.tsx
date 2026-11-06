'use client';

import { motion } from 'framer-motion';
import { Phone, Send, MessageCircle } from 'lucide-react';
import { useI18n } from '@/lib/I18nProvider';

export default function DirectOrderCTA() {
  const { t } = useI18n();

  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-base sm:text-lg text-[#8C7A6B] leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
          {t.ctaText}
        </p>

        {/* Main CTA button */}
        <a
          href="https://999.md/ru/profile/crispol-md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 bg-[#3B2F2F] text-[#FAF5E9] text-base sm:text-lg font-medium px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl shadow-lg shadow-[rgba(59,47,47,0.15)] hover:bg-[#231A15] transition-colors cursor-pointer"
          >
            {t.ctaButton}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </motion.span>
        </a>

        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 sm:mt-10">
          <ContactLink
            href="tel:+37378128316"
            icon={<Phone size={18} />}
            label={`${t.callLabel}: +373 78 128 316`}
          />
          <ContactLink
            href="https://t.me/cernavation"
            icon={<Send size={18} />}
            label="Telegram"
            external
          />
          <ContactLink
            href="https://wa.me/37378128316"
            icon={<MessageCircle size={18} />}
            label="WhatsApp"
            external
          />
          <ContactLink
            href="viber://add?number=37378128316"
            icon={<ViberIcon />}
            label="Viber"
          />
        </div>
      </motion.div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(59,47,47,0.12)] bg-[#F5F5DC]/50 text-[#3B2F2F] text-sm font-medium hover:bg-[#F5F5DC] hover:border-[rgba(59,47,47,0.2)] transition-all"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}

function ViberIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.046 2.004c-1.378-.014-2.732.145-3.991.524C5.705 3.254 4.16 4.773 3.6 5.664c-.923 1.458-1.21 3.168-1.262 4.85-.052 1.683.157 3.38.88 4.88.37.768.88 1.46 1.505 2.04l.022 2.884c0 .52.612.79.988.438l2.117-1.97c.893.276 1.82.424 2.753.46h.388c1.844.01 3.686-.386 5.285-1.256 1.34-.73 2.43-1.87 3.044-3.23.612-1.36.78-2.88.63-4.37-.15-1.49-.62-2.96-1.38-4.2-.76-1.24-1.82-2.26-3.05-2.96-1.13-.64-2.37-1.02-3.63-1.12-.28-.02-.56-.04-.84-.04l.04-.1zm-.164 1.63h.312c1.04.058 2.06.35 2.97.854 1.02.568 1.88 1.4 2.51 2.41.63 1.01 1.03 2.2 1.17 3.4.14 1.2 0 2.44-.48 3.56-.48 1.1-1.32 2.02-2.38 2.6-1.34.72-2.89 1.06-4.44 1.04h-.34a9.6 9.6 0 01-2.56-.44l-.49-.16-.38.35-1.3 1.21-.01-1.88-.02-.33-.24-.23c-.55-.52-1-.14-1.33-1.78-.6-1.24-.77-2.68-.73-4.1.04-1.42.28-2.84 1.02-4.02.42-.66 1.6-1.85 3.52-2.37 1.03-.28 2.11-.43 3.2-.42v.3zm.48 2.14c-.18 0-.33.14-.34.32-.01.18.13.34.31.35.86.06 1.65.38 2.28.93.63.55 1.06 1.27 1.22 2.1.02.1.08.18.16.24.08.05.18.08.28.06.18-.03.3-.2.27-.38a4.22 4.22 0 00-1.5-2.6 4.08 4.08 0 00-2.8-1.14l-.08.12zm-3.47 1.28c-.28-.06-.58 0-.82.16l-.35.28c-.33.28-.55.66-.65 1.08-.12.54-.04 1.1.22 1.6.54 1.08 1.3 2.04 2.2 2.85.14.12.28.24.42.36a10 10 0 003.15 1.86c.52.18 1.08.2 1.58.02.38-.14.7-.4.92-.74l.21-.33c.2-.32.14-.74-.14-.98l-1.54-1.3c-.28-.24-.7-.24-.98.02l-.48.46c-.12.12-.3.14-.44.06l-.16-.1a7.3 7.3 0 01-1.56-1.28 7.2 7.2 0 01-.98-1.3l-.07-.14c-.06-.14-.04-.3.08-.42l.44-.5c.24-.28.26-.7.02-.98l-1.18-1.6c-.1-.14-.26-.22-.42-.24h-.01zm3.84.4c-.18-.02-.34.12-.36.3-.02.18.12.34.3.36.5.06.96.26 1.32.6.36.34.58.78.64 1.26.02.18.18.32.36.3.18-.02.32-.18.3-.36a2.93 2.93 0 00-.86-1.72 2.82 2.82 0 00-1.7-.74zm.02 1.32c-.18-.02-.34.1-.38.28-.04.18.08.34.26.38.2.06.38.16.5.32.14.16.22.36.24.58.02.18.18.32.36.3.18-.02.3-.2.28-.38a1.8 1.8 0 00-.42-.96 1.66 1.66 0 00-.84-.52z" />
    </svg>
  );
}
