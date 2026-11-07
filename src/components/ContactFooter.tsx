'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/I18nProvider';

/* ── Inline SVG social icons ── */
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconNineMd() {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
        fontWeight: 800,
        fontSize: '10px',
        letterSpacing: '-0.5px',
        lineHeight: 1,
        borderRadius: 3,
        border: '1.5px solid currentColor',
      }}
    >
      999
    </span>
  );
}

/* ── Contact card icons ── */
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function IconTelegram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4z" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}
function IconViber() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.9">
      <path d="M12.046 2.004c-1.378-.014-2.732.145-3.991.524C5.705 3.254 4.16 4.773 3.6 5.664c-.923 1.458-1.21 3.168-1.262 4.85-.052 1.683.157 3.38.88 4.88.37.768.88 1.46 1.505 2.04l.022 2.884c0 .52.612.79.988.438l2.117-1.97c.893.276 1.82.424 2.753.46h.388c1.844.01 3.686-.386 5.285-1.256 1.34-.73 2.43-1.87 3.044-3.23.612-1.36.78-2.88.63-4.37-.15-1.49-.62-2.96-1.38-4.2-.76-1.24-1.82-2.26-3.05-2.96-1.13-.64-2.37-1.02-3.63-1.12-.28-.02-.56-.04-.84-.04l.04-.1z" />
    </svg>
  );
}
function IconCatalog() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

const socialLinks = [
  { label: '999.md', href: 'https://999.md/ru/profile/crispol-md', icon: <IconNineMd /> },
  { label: 'Instagram', href: 'https://www.instagram.com/crispol.md/', icon: <IconInstagram /> },
  { label: 'Facebook', href: 'https://www.facebook.com/crispol.mobila/', icon: <IconFacebook /> },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCbCcRUMVsXPtKYZlRueMrxg', icon: <IconYoutube /> },
  { label: 'X', href: 'https://x.com/crispol_md', icon: <IconX /> },
];

export default function ContactFooter() {
  const { t } = useI18n();

  const contacts = [
    {
      href: 'tel:+37378128316',
      icon: <IconPhone />,
      label: t.contactCall,
      value: '+373 78 128 316',
    },
    {
      href: 'https://t.me/cernavation',
      icon: <IconTelegram />,
      label: t.contactTelegram,
      value: '@cernavation',
      external: true,
    },
    {
      href: 'https://wa.me/37378128316',
      icon: <IconWhatsApp />,
      label: t.contactWhatsApp,
      value: '+373 78 128 316',
      external: true,
    },
    {
      href: 'viber://add?number=37378128316',
      icon: <IconViber />,
      label: t.contactViber,
      value: '+373 78 128 316',
    },
    {
      href: 'https://999.md/ru/profile/crispol-md',
      icon: <IconCatalog />,
      label: t.contactCatalog,
      value: t.contactCatalogDesc,
      external: true,
    },
  ];

  return (
    <footer className="px-3 md:px-5 pb-5">
      <div
        id="contact"
        className="bg-[#161311] text-[#FAF6F0] rounded-3xl p-6 md:p-10 lg:p-12"
      >
        {/* CTA Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            {t.contactTitle}
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto">
            {t.contactSubtitle}
          </p>
        </motion.div>

        {/* 5 Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
        >
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              {...(c.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all group block"
            >
              <div className="text-white/40 group-hover:text-[#C59B6D] transition-colors mb-3">
                {c.icon}
              </div>
              <p className="text-sm font-semibold text-[#FAF6F0] mb-0.5">
                {c.label}
              </p>
              <p
                className="text-xs text-white/40"
                style={{ fontFamily: 'var(--font-mono), monospace' }}
              >
                {c.value}
              </p>
            </a>
          ))}
        </motion.div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo (inverted to white) */}
            <Image
              src="/logo.svg"
              alt="CRISPOL"
              width={120}
              height={24}
              unoptimized
              className="h-6 w-auto brightness-0 invert opacity-50"
            />

            {/* Social links */}
            <div className="flex flex-wrap justify-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs hover:text-white/80 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/30 tracking-wide">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
