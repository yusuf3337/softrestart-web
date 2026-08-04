'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring, MotionValue, type Variants } from 'framer-motion';
import { useApp } from '../context/AppContext';

const TITLE = 'Softrestart';
const SPRING_CONFIG = { stiffness: 55, damping: 22, mass: 1 };
const EASE_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const letterVariants = {
  hidden: { y: -80, opacity: 0, rotateX: -70, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 190, damping: 18, mass: 0.7 },
  },
};

const taglineVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.75, duration: 0.75, ease: EASE_EXPO },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.05, duration: 0.5, ease: 'easeOut' as const },
  },
};

// ─── Mouse-reactive glowing orb ─────────────────────────────────────────────
function GlowOrb({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <div
        style={{
          width: 850,
          height: 850,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(37,99,235,0.08) 50%, transparent 75%)',
          filter: 'blur(65px)',
        }}
      />
    </motion.div>
  );
}

// ─── Ambient Floating Particles ───────────────────────────────────────────────
function FloatingDots() {
  const [dots, setDots] = useState<{ id: number; x: number; y: number; size: number; dur: number; delay: number; opacity: number; dx: number }[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3.5 + 1.5,
        dur: Math.random() * 14 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.35 + 0.1,
        dx: Math.random() * 20 - 10,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: '#3b82f6',
            opacity: d.opacity,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, d.dx, 0],
            opacity: [d.opacity, d.opacity * 2.2, d.opacity],
          }}
          transition={{
            duration: d.dur,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ─── Individual Letter with Interactive Cursor Hover ──────────────────────────
function HoverLetter({ char }: { char: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      variants={letterVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={hovered ? { color: '#3b82f6', scale: 1.12, y: -8 } : { color: '#f8fafc', scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className="inline-block cursor-default select-none relative"
      style={{
        textShadow: hovered
          ? '0 0 40px rgba(59,130,246,0.9), 0 0 80px rgba(59,130,246,0.5)'
          : '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {char}
    </motion.span>
  );
}

// ─── Prominent Enlarged Hero CTA Button ───────────────────────────────────────
function ProminentCTAButton({ label }: { label: string }) {
  return (
    <motion.a
      href="#iletisim"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="relative inline-flex items-center gap-3.5 px-12 py-5 rounded-2xl text-xl font-extrabold text-white transition-all duration-300 shadow-2xl cursor-pointer group overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #1e40af 100%)',
        boxShadow: '0 12px 32px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.25)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          boxShadow: '0 0 35px rgba(59, 130, 246, 0.7)',
        }}
      />
      <span className="relative z-10">{label}</span>
      <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1.5 text-2xl">→</span>
    </motion.a>
  );
}

// ─── Main Hero Component ──────────────────────────────────────────────────────
export default function HeroSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

  const rawMouseX = useSpring(0, SPRING_CONFIG);
  const rawMouseY = useSpring(0, SPRING_CONFIG);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      rawMouseX.set(e.clientX - rect.left);
      rawMouseY.set(e.clientY - rect.top);
    },
    [rawMouseX, rawMouseY]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      rawMouseX.set(window.innerWidth / 2);
      rawMouseY.set(window.innerHeight / 2);
    }
  }, [rawMouseX, rawMouseY]);

  const FEATURE_CARDS = [
    {
      title: t('feature.web.title'),
      subtitle: t('feature.web.sub'),
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t('feature.saas.title'),
      subtitle: t('feature.saas.sub'),
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: t('feature.cloud.title'),
      subtitle: t('feature.cloud.sub'),
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 001-.99M17 19a5 5 0 005-5c0-2.38-1.66-4.37-3.87-4.87a7 7 0 00-13.26 0C2.91 9.87 1 11.85 1 14.25 1 16.87 3.13 19 5.75 19" />
        </svg>
      ),
    },
    {
      title: t('feature.ui.title'),
      subtitle: t('feature.ui.sub'),
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36 bg-[#0b0f19]"
    >
      <GlowOrb x={rawMouseX} y={rawMouseY} />
      <FloatingDots />

      {/* Cyber Grid Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-6xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm bg-[#1e293b] text-[#60a5fa] border border-[#334155]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          {t('hero.badge')}
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center leading-none mb-6"
          style={{
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
            fontSize: 'clamp(4.2rem, 14vw, 10.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            perspective: '700px',
          }}
          aria-label={TITLE}
        >
          {TITLE.split('').map((char, i) => (
            <HoverLetter key={i} char={char} />
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-xl md:text-2xl font-normal leading-relaxed mb-20 text-slate-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Prominent Enlarged Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.65, ease: EASE_EXPO }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-20"
        >
          {FEATURE_CARDS.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8, borderColor: '#3b82f6', boxShadow: '0 20px 40px rgba(59,130,246,0.2)' }}
              transition={{ duration: 0.25 }}
              className="p-8 md:p-10 rounded-3xl flex flex-col items-center text-center transition-all duration-300 relative group bg-[#161e2e] border border-[#1f2937]"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shrink-0 bg-[#1e293b] text-[#60a5fa] border border-[#334155] shadow-md">
                {card.icon}
              </div>
              <h3
                className="font-bold text-xl md:text-2xl mb-3 transition-colors duration-200 group-hover:text-blue-400 text-slate-100"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.title}
              </h3>
              <p
                className="text-base leading-relaxed text-slate-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Prominent Focal Point CTA */}
        <div className="mt-2">
          <ProminentCTAButton label={t('hero.cta')} />
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="mt-28 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase font-bold text-slate-500">
            {t('hero.scroll')}
          </span>
          <motion.div
            className="h-10 w-px rounded-full bg-[#334155]"
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
