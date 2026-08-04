'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useApp } from '../context/AppContext';

function AmbientBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 750,
          height: 450,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute top-2/3 right-10"
        style={{
          width: 550,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,102,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: '#3b82f6',
            opacity: 0.25,
          }}
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 12, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function PageHeading() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-24 md:mb-32 text-center max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full inline-block bg-[#1e293b] text-[#60a5fa] border border-[#334155]"
      >
        {t('services.badge')}
      </motion.p>

      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: '110%' }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-none tracking-tighter text-slate-100"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(3.8rem, 10vw, 8.5rem)',
            letterSpacing: '-0.04em',
          }}
        >
          {t('services.title')}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto font-normal leading-relaxed text-slate-400"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {t('services.subtitle')}
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 h-px origin-center bg-slate-800"
      />
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: rowIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group relative cursor-pointer"
        whileTap={{ scale: 0.995 }}
      >
        <motion.div
          className="absolute inset-0 -mx-6 md:-mx-10 rounded-2xl pointer-events-none"
          animate={{
            backgroundColor: open ? 'rgba(30,41,59,0.7)' : 'rgba(0,0,0,0)',
          }}
          transition={{ duration: 0.25 }}
        />

        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 -ml-6 md:-ml-10 rounded-full bg-blue-500"
          animate={{ opacity: open ? 1 : 0, scaleY: open ? 1 : 0.5 }}
          transition={{ duration: 0.25 }}
        />

        <div className="relative py-8 md:py-10 flex items-center gap-6 md:gap-12">
          <span
            className="text-base font-bold tracking-widest shrink-0 transition-colors duration-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: open ? '#60a5fa' : '#475569',
              minWidth: '2.5rem',
            }}
          >
            {svc.index}
          </span>

          <span
            className="flex-1 font-bold transition-colors duration-200 text-slate-100"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2.25rem)',
              color: open ? '#60a5fa' : '#f8fafc',
              letterSpacing: '-0.025em',
            }}
          >
            {t(svc.titleKey)}
          </span>

          <span
            className="hidden lg:block text-base max-w-sm text-right text-slate-400"
            style={{
              fontFamily: "'Inter', sans-serif",
              opacity: open ? 0 : 1,
              transition: 'opacity 0.2s ease',
            }}
          >
            {t(svc.shortKey)}
          </span>

          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.22 }}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light leading-none bg-[#1e293b] text-[#94a3b8]"
          >
            +
          </motion.span>
        </div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div className="pb-10 pl-[3.5rem] md:pl-[5.5rem] grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p
              className="text-base md:text-lg leading-relaxed mb-6 text-slate-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t(svc.detailKey)}
            </p>
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3.5 text-slate-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('services.tech')}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {svc.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full font-semibold bg-[#1e293b] text-[#60a5fa] border border-[#334155]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="h-px bg-slate-800/60" />
    </motion.div>
  );
}

function CTAStrip() {
  const { t } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-28 md:mt-36 rounded-3xl px-8 md:px-14 py-12 md:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl relative overflow-hidden bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6]"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-xl">
        <p
          className="text-xs md:text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t('services.cta.ready')}
        </p>
        <h2
          className="text-3xl md:text-4xl font-black text-white leading-tight"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.03em' }}
        >
          {t('services.cta.title')}
        </h2>
      </div>
      <a
        href="/#iletisim"
        className="relative z-10 shrink-0 px-9 py-4 rounded-2xl font-bold text-base md:text-lg bg-white text-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {t('services.cta.button')}
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
      <main className="relative min-h-screen pt-44 md:pt-56 pb-36 md:pb-48 overflow-hidden bg-[#0b0f19]">
        <AmbientBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <PageHeading />

          <div className="divide-y divide-slate-800">
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
