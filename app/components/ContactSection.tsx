'use client';

import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ContactSection() {
  const { t } = useApp();

  const CONTACT_ITEMS = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('contact.email'),
      value: 'work.softrestart@gmail.com',
      href: 'mailto:work.softrestart@gmail.com',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('contact.phone'),
      value: '+90 542 819 1504',
      subValue: '+90 548 866 5422',
      href: 'tel:+905428191504',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact.location'),
      value: 'LOCATION: EVERYWHERE',
      subValue: t('contact.city'),
      href: 'https://maps.google.com/?q=Istanbul,Turkey',
    },
  ];

  return (
    <section
      id="iletisim"
      className="relative w-full py-32 md:py-44 overflow-hidden bg-[#0b0f19]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-[#1e293b] text-[#60a5fa] border border-[#334155]">
            {t('contact.badge')}
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-5 text-slate-100"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.035em',
            }}
          >
            {t('contact.title')}
          </h2>
          <p
            className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed text-slate-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Direct Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_ITEMS.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55, ease: EASE }}
              className="group flex flex-col items-center text-center p-8 md:p-10 rounded-3xl transition-all duration-300 relative overflow-hidden bg-[#161e2e] border border-[#1f2937]"
              whileHover={{
                y: -6,
                borderColor: '#3b82f6',
                boxShadow: '0 20px 40px rgba(59,130,246,0.18)',
              }}
            >
              <div
                className="absolute top-0 left-10 right-10 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)' }}
              />

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-110 shrink-0 bg-[#1e293b] text-[#60a5fa] border border-[#334155]">
                {item.icon}
              </div>

              <span
                className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </span>

              <span
                className="text-lg md:text-xl font-bold transition-colors duration-200 group-hover:text-blue-400 text-slate-100 break-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.value}
              </span>

              {item.subValue && (
                <span
                  className="text-sm font-medium text-slate-400 mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.subValue}
                </span>
              )}
            </motion.a>
          ))}
        </div>

        {/* Quick Response Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-semibold shadow-sm bg-[#1e293b] text-[#60a5fa] border border-[#334155]">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span>{t('contact.response')} <strong>{t('contact.time')}</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
