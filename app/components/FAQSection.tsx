'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import TerminalLabel from './TerminalLabel';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FAQSection() {
  const { t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQ_ITEMS = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="sss" className="relative w-full py-24 md:py-36 border-t border-line">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 md:mb-16"
        >
          <TerminalLabel>{t('faq.badge')}</TerminalLabel>
          <h2
            className="mt-4 font-mono font-bold text-4xl md:text-5xl text-foreground tracking-tight text-balance"
            style={{ letterSpacing: '-0.04em' }}
          >
            {t('faq.title')}
          </h2>
          <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-muted">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Hairline accordion — no cards */}
        <div className="border-t border-line">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-line">
                <button
                  onClick={() => toggle(i)}
                  className="w-full py-6 md:py-7 flex items-start justify-between gap-6 text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-mono text-lg md:text-xl font-medium tracking-tight transition-colors duration-200 ${
                        isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'
                      }`}
                    >
                      {item.question}
                    </span>
                  </span>
                  <span
                    className="shrink-0 font-mono text-xl text-accent transition-transform duration-300 leading-none pt-0.5"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-0 md:pl-10 text-base leading-relaxed text-muted max-w-2xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
