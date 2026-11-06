'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Banknote } from 'lucide-react';
import { useI18n } from '@/lib/I18nProvider';

/* Inline SVG social icons (lucide-react removed brand icons) */
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function NineMdIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="5" />
      <path d="M17 9v4a5 5 0 01-10 0" />
    </svg>
  );
}

const socialLinks = [
  {
    label: '999.md',
    href: 'https://999.md/ru/profile/crispol-md',
    icon: <NineMdIcon />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/crispol.md/',
    icon: <IconInstagram />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/crispol.mobila/',
    icon: <IconFacebook />,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCbCcRUMVsXPtKYZlRueMrxg',
    icon: <IconYoutube />,
  },
  {
    label: 'X',
    href: 'https://x.com/crispol_md',
    icon: <IconX />,
  },
];

export default function Footer() {
  const { t } = useI18n();

  const advantages = [
    { icon: <Banknote size={22} strokeWidth={1.5} />, text: t.advantage1 },
    { icon: <Factory size={22} strokeWidth={1.5} />, text: t.advantage2 },
    { icon: <ShieldCheck size={22} strokeWidth={1.5} />, text: t.advantage3 },
  ];

  return (
    <footer className="border-t border-[rgba(59,47,47,0.08)] bg-[#F5F5DC]/30">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 sm:py-18">
        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          {advantages.map((adv, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2.5">
              <div className="text-[#3B2F2F]/60">{adv.icon}</div>
              <p className="text-sm sm:text-base font-medium text-[#3B2F2F]">
                {adv.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(59,47,47,0.1)] text-[#3B2F2F]/70 text-sm hover:text-[#3B2F2F] hover:border-[rgba(59,47,47,0.2)] hover:bg-[#F5F5DC]/60 transition-all"
              aria-label={link.label}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-[#8C7A6B]/70 tracking-wide">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
