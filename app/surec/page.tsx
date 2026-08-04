'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useApp } from '../context/AppContext';

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
        className="absolute -left-4 -top-8 font-black leading-none text-slate-800/60"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(8rem, 20vw, 16rem)',
          letterSpacing: '-0.05em',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        {num}
      </motion.span>

      <motion.span
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -16 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 font-black text-lg md:text-xl tracking-widest text-[#60a5fa]"
        style={{ fontFamily: "'Inter', sans-serif" }}
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
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 py-20 md:py-28"
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
            className="font-black leading-tight text-slate-100"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.25rem, 6vw, 4.25rem)',
              letterSpacing: '-0.035em',
            }}
          >
            {t(step.titleKey)}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="text-lg md:text-xl font-medium mb-7 italic text-slate-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          &ldquo;{t(step.taglineKey)}&rdquo;
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-2 text-base md:text-lg leading-relaxed text-slate-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t(step.detailKey)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 12 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-7 rounded-2xl bg-[#161e2e] border border-[#1f2937]"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4 text-slate-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('process.deliverables')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {step.deliverablesKeys.map((dk, i) => (
                <motion.li
                  key={dk}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 8 }}
                  transition={{ duration: 0.35, delay: 0.38 + i * 0.05 }}
                  className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-slate-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="shrink-0 w-2 h-2 rounded-full bg-[#60a5fa]" />
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
    <div ref={ref} className="fixed top-[70px] left-0 right-0 z-40 h-1 bg-slate-900">
      <motion.div className="h-full bg-blue-500" style={{ width }} />
    </div>
  );
}

function PageHeading() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-14 md:mb-20 text-center max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full inline-block bg-[#1e293b] text-[#60a5fa] border border-[#334155]"
      >
        {t('process.badge')}
      </motion.p>

      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: '110%' }}
          animate={{ y: inView ? 0 : '110%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-none tracking-tighter text-slate-100"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            letterSpacing: '-0.04em',
          }}
        >
          {t('process.title')}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto font-normal leading-relaxed text-slate-400"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {t('process.subtitle')}
      </motion.p>
    </div>
  );
}

export default function SurecPage() {
  const { t } = useApp();

  const STEPS: StepData[] = [
    {
      num: '01',
      titleKey: 'step.01.title',
      taglineKey: 'step.01.tagline',
      detailKey: 'step.01.detail',
      deliverablesKeys: ['step.01.d1', 'step.01.d2', 'step.01.d3', 'step.01.d4'],
    },
    {
      num: '02',
      titleKey: 'step.02.title',
      taglineKey: 'step.02.tagline',
      detailKey: 'step.02.detail',
      deliverablesKeys: ['step.02.d1', 'step.02.d2', 'step.02.d3', 'step.02.d4'],
    },
    {
      num: '03',
      titleKey: 'step.03.title',
      taglineKey: 'step.03.tagline',
      detailKey: 'step.03.detail',
      deliverablesKeys: ['step.03.d1', 'step.03.d2', 'step.03.d3', 'step.03.d4'],
    },
    {
      num: '04',
      titleKey: 'step.04.title',
      taglineKey: 'step.04.tagline',
      detailKey: 'step.04.detail',
      deliverablesKeys: ['step.04.d1', 'step.04.d2', 'step.04.d3', 'step.04.d4'],
    },
  ];

  return (
    <>
      <Header />
      <ProgressBar />
      <main className="min-h-screen pt-44 md:pt-56 pb-36 md:pb-48 bg-[#0b0f19] text-slate-100 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <PageHeading />

          <div className="my-16 h-px bg-slate-800" />

          <div className="divide-y divide-slate-800">
            {STEPS.map((step) => (
              <StepBlock key={step.num} step={step} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-28 p-10 md:p-14 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 bg-[#161e2e] border border-[#1f2937]"
          >
            <div>
              <p
                className="text-2xl md:text-3xl font-black text-slate-100"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '-0.025em',
                }}
              >
                {t('process.cta.title')}
              </p>
              <p className="text-base mt-2 text-slate-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t('process.cta.sub')}
              </p>
            </div>
            <a
              href="/#iletisim"
              className="shrink-0 px-9 py-4 rounded-2xl font-bold text-base md:text-lg text-white transition-all duration-300 hover:scale-105 shadow-md bg-gradient-to-r from-blue-600 to-blue-700"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('process.cta.button')}
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
