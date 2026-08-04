'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FAQSection() {
  const { t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQ_ITEMS = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="sss" className="relative w-full py-32 md:py-44 overflow-hidden bg-[#0b0f19]">
      {/* Background Cyber Glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2"
        aria-hidden
        style={{
          width: 650,
          height: 450,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-[#1e293b] text-[#60a5fa] border border-[#334155]">
            {t('faq.badge')}
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-5 text-slate-100"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.035em',
            }}
          >
            {t('faq.title')}
          </h2>
          <p
            className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed text-slate-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Accordion Questions List with Generous Spacing */}
        <div className="flex flex-col gap-6 text-left">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                className="rounded-3xl transition-all duration-300 overflow-hidden bg-[#161e2e] border border-[#1f2937]"
                style={{
                  borderColor: isOpen ? '#3b82f6' : '#1f2937',
                  boxShadow: isOpen ? '0 12px 32px rgba(59,130,246,0.15)' : 'none',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-7 md:p-8 flex items-center justify-between gap-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span
                    className="text-xl md:text-2xl font-bold transition-colors duration-200 group-hover:text-blue-400 text-slate-100"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.question}
                  </span>

                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 bg-[#1e293b] text-[#60a5fa] border border-[#334155]"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <div
                        className="px-7 pb-8 md:px-8 md:pb-9 text-base md:text-lg leading-relaxed text-slate-300 border-t border-slate-800/80 pt-6"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
