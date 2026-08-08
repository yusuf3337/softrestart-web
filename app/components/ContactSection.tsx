'use client';

import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import TerminalLabel from './TerminalLabel';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ContactSection() {
  const { t } = useApp();

  const CONTACT_ROWS = [
    {
      key: 'email',
      label: t('contact.email'),
      value: 'work.softrestart@gmail.com',
      href: 'mailto:work.softrestart@gmail.com',
    },
    {
      key: 'phone',
      label: t('contact.phone'),
      value: '+90 542 819 1504',
      sub: '+90 548 866 5422',
      href: 'tel:+905428191504',
    },
    {
      key: 'location',
      label: t('contact.location'),
      value: 'everywhere',
      sub: t('contact.city'),
      href: 'https://maps.google.com/?q=Istanbul,Turkey',
    },
  ];

  return (
    <section id="iletisim" className="relative w-full py-24 md:py-36 border-t border-line">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 md:mb-16"
        >
          <TerminalLabel caret>{t('contact.badge')}</TerminalLabel>
          <h2
            className="mt-4 font-mono font-bold text-4xl md:text-5xl text-foreground tracking-tight text-balance"
            style={{ letterSpacing: '-0.04em' }}
          >
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-muted">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact as key/value terminal rows — no cards */}
        <div className="border-t border-line">
          {CONTACT_ROWS.map((row, i) => (
            <motion.a
              key={row.key}
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
              className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 py-6 md:py-7 border-b border-line transition-colors duration-200 hover:bg-elevated -mx-4 px-4"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-faint shrink-0 md:w-32 pt-1">
                {row.label}
              </span>
              <span className="flex-1">
                <span className="font-mono text-lg md:text-xl text-foreground group-hover:text-accent transition-colors duration-200 break-all">
                  {row.value}
                </span>
                {row.sub && <span className="block text-sm text-muted mt-1">{row.sub}</span>}
              </span>
              <span
                className="hidden md:inline-block font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-hidden
              >
                &rarr;
              </span>
            </motion.a>
          ))}
        </div>

        {/* Response note as a comment line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 font-mono text-sm text-muted"
        >
          <span className="text-accent">//</span> {t('contact.response')}{' '}
          <span className="text-foreground">{t('contact.time')}</span>
        </motion.p>
      </div>
    </section>
  );
}
