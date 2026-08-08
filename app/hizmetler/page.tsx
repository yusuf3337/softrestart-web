'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TerminalLabel from '../components/TerminalLabel';
import { useApp } from '../context/AppContext';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function PageHeading() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-20 md:mb-28 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <TerminalLabel caret>{t('services.badge')}</TerminalLabel>
      </motion.div>

      <div className="overflow-hidden mt-5">
        <motion.h1
          initial={{ y: '110%' }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono font-extrabold leading-[0.95] tracking-tighter text-foreground text-balance"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', letterSpacing: '-0.05em' }}
        >
          {t('services.title')}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-muted text-pretty"
      >
        {t('services.subtitle')}
      </motion.p>
    </div>
  );
}

interface ServiceItemData {
  index: string;
  titleKey: string;
  shortKey: string;
  detailKey: string;
  stack: readonly string[];
}

function ServiceRow({ svc, rowIndex }: { svc: ServiceItemData; rowIndex: number }) {
  const { t } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: rowIndex * 0.05, ease: EASE }}
      className="border-b border-line"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group cursor-pointer -mx-4 px-4 transition-colors duration-200 hover:bg-elevated"
        aria-expanded={open}
      >
        <div className="py-7 md:py-9 flex items-center gap-5 md:gap-10">
          <span
            className="font-mono text-sm font-semibold shrink-0 w-8 transition-colors duration-200"
            style={{ color: open ? 'var(--color-accent)' : 'var(--color-faint)' }}
          >
            {svc.index}
          </span>

          <span
            className="flex-1 font-mono font-semibold tracking-tight transition-colors duration-200"
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              color: open ? 'var(--color-accent)' : 'var(--color-foreground)',
              letterSpacing: '-0.03em',
            }}
          >
            {t(svc.titleKey)}
          </span>

          <span
            className="hidden lg:block text-sm max-w-xs text-right text-muted transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          >
            {t(svc.shortKey)}
          </span>

          <span
            className="shrink-0 font-mono text-2xl text-accent leading-none transition-transform duration-200"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
            aria-hidden
          >
            +
          </span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.38, ease: EASE }}
        style={{ overflow: 'hidden' }}
      >
        <div className="pb-10 pl-[3.25rem] md:pl-[4.5rem] grid grid-cols-1 lg:grid-cols-3 gap-8">
          <p className="lg:col-span-2 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
            {t(svc.detailKey)}
          </p>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3.5 text-faint">
              <span className="text-accent">#</span> {t('services.tech')}
            </p>
            <div className="flex flex-wrap gap-2">
              {svc.stack.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 text-muted border border-line hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CTAStrip() {
  const { t } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mt-24 md:mt-32 border border-line p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
    >
      <div className="max-w-xl">
        <TerminalLabel>{t('services.cta.ready')}</TerminalLabel>
        <h2
          className="mt-4 font-mono text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight text-balance"
          style={{ letterSpacing: '-0.03em' }}
        >
          {t('services.cta.title')}
        </h2>
      </div>
      <a
        href="/#iletisim"
        className="group shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 font-mono text-sm md:text-base text-background bg-accent hover:bg-foreground transition-colors duration-200"
      >
        <span>{t('services.cta.button').replace(' →', '').toLowerCase()}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      </a>
    </motion.div>
  );
}

export default function HizmetlerPage() {
  const SERVICES: ServiceItemData[] = [
    { index: '01', titleKey: 'service.01.title', shortKey: 'service.01.short', detailKey: 'service.01.detail', stack: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript'] },
    { index: '02', titleKey: 'service.02.title', shortKey: 'service.02.short', detailKey: 'service.02.detail', stack: ['Next.js', 'Node.js', 'Laravel', 'MySQL', 'REST API'] },
    { index: '03', titleKey: 'service.03.title', shortKey: 'service.03.short', detailKey: 'service.03.detail', stack: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'MongoDB'] },
    { index: '04', titleKey: 'service.04.title', shortKey: 'service.04.short', detailKey: 'service.04.detail', stack: ['React', 'Next.js', 'JavaScript', 'TypeScript'] },
    { index: '05', titleKey: 'service.05.title', shortKey: 'service.05.short', detailKey: 'service.05.detail', stack: ['Docker', 'Git', 'Firebase', 'REST API'] },
    { index: '06', titleKey: 'service.06.title', shortKey: 'service.06.short', detailKey: 'service.06.detail', stack: ['JavaScript', 'TypeScript', 'PHP', 'Node.js'] },
  ];

  return (
    <>
      <Header />
      <main className="relative min-h-screen pt-36 md:pt-48 pb-28 md:pb-40">
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
          <PageHeading />

          <div className="border-t border-line">
            {SERVICES.map((svc, i) => (
              <ServiceRow key={svc.index} svc={svc} rowIndex={i} />
            ))}
          </div>

          <CTAStrip />
        </div>
      </main>
      <Footer />
    </>
  );
}
