'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TerminalLabel from '../components/TerminalLabel';
import { useApp } from '../context/AppContext';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface StepData {
  num: string;
  titleKey: string;
  taglineKey: string;
  detailKey: string;
  deliverablesKeys: readonly string[];
}

function StepNumber({ num, inView }: { num: string; inView: boolean }) {
  return (
    <div className="relative select-none pointer-events-none" aria-hidden>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute -left-2 -top-10 font-mono font-extrabold leading-none text-line-strong/70"
        style={{
          fontSize: 'clamp(7rem, 18vw, 14rem)',
          letterSpacing: '-0.06em',
          zIndex: 0,
        }}
      >
        {num}
      </motion.span>

      <motion.span
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -12 }}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        className="relative z-10 font-mono font-bold text-lg tracking-widest text-accent"
      >
        {num}
      </motion.span>
    </div>
  );
}

function StepBlock({ step }: { step: StepData }) {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 py-16 md:py-24 border-b border-line"
    >
      <div className="lg:col-span-1 flex items-start">
        <StepNumber num={step.num} inView={inView} />
      </div>

      <div className="lg:col-span-11 relative z-10">
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: '105%' }}
            animate={{ y: inView ? 0 : '105%' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono font-bold leading-tight text-foreground tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', letterSpacing: '-0.04em' }}
          >
            {t(step.titleKey)}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="font-mono text-base md:text-lg mb-8 text-accent"
        >
          <span className="text-faint">// </span>
          {t(step.taglineKey)}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-2 text-base md:text-lg leading-relaxed text-muted max-w-2xl"
          >
            {t(step.detailKey)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 12 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="border-l border-line pl-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-4 text-faint">
              <span className="text-accent">#</span> {t('process.deliverables')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {step.deliverablesKeys.map((dk, i) => (
                <motion.li
                  key={dk}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 8 }}
                  transition={{ duration: 0.35, delay: 0.38 + i * 0.05 }}
                  className="flex items-center gap-3 font-mono text-sm text-foreground"
                >
                  <span className="text-accent shrink-0">&rsaquo;</span>
                  {t(dk)}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="fixed top-[60px] left-0 right-0 z-40 h-px bg-line">
      <motion.div className="h-full bg-accent" style={{ width }} />
    </div>
  );
}

function PageHeading() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-12 md:mb-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <TerminalLabel caret>{t('process.badge')}</TerminalLabel>
      </motion.div>

      <div className="overflow-hidden mt-5">
        <motion.h1
          initial={{ y: '110%' }}
          animate={{ y: inView ? 0 : '110%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono font-extrabold leading-[0.95] tracking-tighter text-foreground text-balance"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', letterSpacing: '-0.05em' }}
        >
          {t('process.title')}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-muted text-pretty"
      >
        {t('process.subtitle')}
      </motion.p>
    </div>
  );
}

export default function SurecPage() {
  const { t } = useApp();

  const STEPS: StepData[] = [
    { num: '01', titleKey: 'step.01.title', taglineKey: 'step.01.tagline', detailKey: 'step.01.detail', deliverablesKeys: ['step.01.d1', 'step.01.d2', 'step.01.d3', 'step.01.d4'] },
    { num: '02', titleKey: 'step.02.title', taglineKey: 'step.02.tagline', detailKey: 'step.02.detail', deliverablesKeys: ['step.02.d1', 'step.02.d2', 'step.02.d3', 'step.02.d4'] },
    { num: '03', titleKey: 'step.03.title', taglineKey: 'step.03.tagline', detailKey: 'step.03.detail', deliverablesKeys: ['step.03.d1', 'step.03.d2', 'step.03.d3', 'step.03.d4'] },
    { num: '04', titleKey: 'step.04.title', taglineKey: 'step.04.tagline', detailKey: 'step.04.detail', deliverablesKeys: ['step.04.d1', 'step.04.d2', 'step.04.d3', 'step.04.d4'] },
  ];

  return (
    <>
      <Header />
      <ProgressBar />
      <main className="min-h-screen pt-36 md:pt-48 pb-28 md:pb-40">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <PageHeading />

          <div className="border-t border-line">
            {STEPS.map((step) => (
              <StepBlock key={step.num} step={step} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-24 border border-line p-8 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div>
              <p
                className="font-mono text-2xl md:text-3xl font-bold text-foreground tracking-tight text-balance"
                style={{ letterSpacing: '-0.03em' }}
              >
                {t('process.cta.title')}
              </p>
              <p className="text-base mt-3 text-muted">{t('process.cta.sub')}</p>
            </div>
            <a
              href="/#iletisim"
              className="group shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 font-mono text-sm md:text-base text-background bg-accent hover:bg-foreground transition-colors duration-200"
            >
              <span>{t('process.cta.button').replace(' →', '').toLowerCase()}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
