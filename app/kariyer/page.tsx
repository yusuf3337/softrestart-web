'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useApp } from '../context/AppContext';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Glitch Typewriter Headline ───────────────────────────────────────────────
function GlitchHeadline({ text1, text2 }: { text1: string; text2: string }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <h1
        className={`font-black leading-[1.08] tracking-tighter text-center transition-all ${
          glitch ? 'skew-x-2 opacity-90 scale-[1.01]' : ''
        }`}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
          letterSpacing: '-0.04em',
        }}
      >
        <span className="block text-slate-100">{text1}</span>
        <span
          className="block mt-2 text-[#00ff66] font-mono tracking-tight"
          style={{
            textShadow: '0 0 30px rgba(0, 255, 102, 0.65), 0 0 10px rgba(0, 255, 102, 0.4)',
          }}
        >
          {text2}
        </span>
      </h1>
    </div>
  );
}

// ─── Matrix Rain Canvas Component ─────────────────────────────────────────────
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 650;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '010101SOFTRESTART_HACKER_SYSTEM_BUILDERS_REBEL_010101';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff66';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-45 pointer-events-none"
    />
  );
}

// ─── Developer Environment Terminal System Stack Section ──────────────────────
function SystemStackSection() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const STACK_GROUPS = [
    {
      categoryKey: 'stack.cat.frontend',
      items: ['React', 'Next.js', 'React Native', 'Expo'],
    },
    {
      categoryKey: 'stack.cat.backend',
      items: ['Node.js', 'Laravel', 'Express.js', 'PHP'],
    },
    {
      categoryKey: 'stack.cat.database',
      items: ['MySQL', 'MongoDB', 'Firebase'],
    },
    {
      categoryKey: 'stack.cat.infra',
      items: ['Docker', 'Git', 'REST API'],
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-36 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-lg mb-4 font-mono text-xs font-bold tracking-widest text-[#00ff66] bg-[#00ff66]/10 border border-[#00ff66]/30 uppercase">
            {t('stack.badge')}
          </div>
          <h2
            className="text-4xl md:text-6xl font-black text-slate-100 tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.035em' }}
          >
            {t('stack.title')}
          </h2>
        </motion.div>

        {/* IDE Code Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="rounded-3xl overflow-hidden bg-[#090d16] border border-slate-800 shadow-2xl relative"
        >
          {/* Window Title Bar */}
          <div className="bg-[#111827] px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-slate-400">system_stack.env</span>
            </div>
            <div className="font-mono text-xs text-[#00ff66] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
              <span>ACTIVE STACK</span>
            </div>
          </div>

          {/* Code Terminal Body */}
          <div className="p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STACK_GROUPS.map((group, idx) => (
              <div key={group.categoryKey} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-3">
                  <span className="text-[#00ff66]">0{idx + 1} //</span>
                  <span>{t(group.categoryKey)}</span>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-sm px-3.5 py-1.5 rounded-xl font-bold bg-[#161e2e] text-slate-200 border border-slate-700/60 hover:border-[#00ff66]/50 hover:text-[#00ff66] transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Footer Mindset Note */}
          <div className="bg-[#0f172a]/90 px-8 py-6 border-t border-slate-800/80 font-sans text-sm leading-relaxed text-slate-400 italic">
            {t('stack.note')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Fullscreen Matrix Closing Section ────────────────────────────────────────
function MatrixSection() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full py-36 md:py-56 overflow-hidden flex flex-col items-center justify-center text-center"
      style={{ background: '#000000', borderTop: '1px solid #002e0b' }}
    >
      <MatrixRain />

      {/* Cyberpunk Green Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 850,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,255,102,0.22) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 text-center"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-6 font-mono text-xs font-bold tracking-widest uppercase border border-[#00ff66]/40"
            style={{
              background: 'rgba(0, 255, 102, 0.1)',
              color: '#00ff66',
              textShadow: '0 0 10px rgba(0, 255, 102, 0.5)',
            }}
          >
            SYS_MSG // WAKE UP, NEO
          </div>

          <h2
            className="text-4xl md:text-7xl font-bold tracking-wider leading-none text-center"
            style={{
              color: '#ffffff',
              fontFamily: "'Courier New', Courier, monospace",
              textShadow: '0 0 35px rgba(0, 255, 102, 0.65)',
              letterSpacing: '0.1em',
            }}
          >
            THE MATRIX IS EVERYWHERE.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          className="max-w-3xl mx-auto text-xl md:text-3xl leading-relaxed mb-14 text-center font-bold whitespace-pre-line"
          style={{ color: '#a7f3d0', fontFamily: "'Inter', sans-serif" }}
        >
          {t('matrix.tagline')}
        </motion.p>

        <motion.a
          href="mailto:work.softrestart@gmail.com?subject=Kariyer%20/%20Softrestart%20Rebel%20Manifesto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-mono font-black text-lg md:text-xl text-black transition-all duration-300 overflow-hidden cursor-pointer shadow-2xl"
          style={{
            background: '#00ff66',
            boxShadow: '0 0 50px rgba(0, 255, 102, 0.75)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 tracking-wider">{t('matrix.cta')}</span>
        </motion.a>
      </div>
    </section>
  );
}

// ─── Main Careers Manifesto Page ──────────────────────────────────────────────
export default function KariyerPage() {
  const { t } = useApp();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const MANIFESTO_ITEMS = [
    {
      codeKey: 'manifesto.01.code',
      titleKey: 'manifesto.01.title',
      descKey: 'manifesto.01.desc',
      tag: 'FREEDOM_MODE',
    },
    {
      codeKey: 'manifesto.02.code',
      titleKey: 'manifesto.02.title',
      descKey: 'manifesto.02.desc',
      tag: 'OUTPUT_METRIC',
    },
    {
      codeKey: 'manifesto.03.code',
      titleKey: 'manifesto.03.title',
      descKey: 'manifesto.03.desc',
      tag: 'REAL_IMPACT',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-44 md:pt-56 bg-[#080c14] text-slate-100 transition-colors duration-300 relative overflow-hidden">
        {/* Subtle Cyberpunk Scanlines */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.03] z-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
            backgroundSize: '100% 4px',
          }}
        />

        {/* ─── Hero Statement Section ──────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-36">
          <div ref={heroRef} className="text-center max-w-5xl mx-auto">
            {/* Terminal Status HUD Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase mb-10 px-5 py-2.5 rounded-xl shadow-sm border bg-[#0f172a]/80 text-[#00ff66] border-slate-800"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
              <span>{t('careers.status')}</span>
            </motion.div>

            {/* Main Glitch Movie Scene Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="mb-8"
            >
              <GlitchHeadline text1={t('careers.hero.title1')} text2={t('careers.hero.title2')} />
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="text-lg md:text-2xl leading-relaxed font-normal max-w-3xl mx-auto mb-14 text-slate-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('careers.hero.subtitle')}
            </motion.p>

            {/* Action CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="mailto:work.softrestart@gmail.com?subject=Kariyer%20/%20Softrestart%20Manifesto"
                className="inline-flex items-center gap-3 px-11 py-5 rounded-2xl font-mono font-bold text-base md:text-lg text-black transition-all duration-300 hover:scale-105 shadow-2xl cursor-pointer"
                style={{
                  background: '#00ff66',
                  boxShadow: '0 0 35px rgba(0, 255, 102, 0.5)',
                }}
              >
                <span>{t('careers.hero.cta')}</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* ─── Divider Line ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-px w-full bg-slate-800" />
        </div>

        {/* ─── Editorial Manifesto Statements (NO TRADITIONAL CARDS!) ───────── */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="flex flex-col gap-28 md:gap-40">
            {MANIFESTO_ITEMS.map((item, index) => (
              <ManifestoStatement key={item.codeKey} item={item} index={index} />
            ))}

            {/* 04 // DON'T JOIN A COMPANY. JOIN A MOVEMENT. */}
            <MovementStatement />
          </div>
        </div>

        {/* ─── SYSTEM STACK SECTION ────────────────────────────────────────── */}
        <SystemStackSection />

        {/* ─── Fullscreen Matrix Closing Section ───────────────────────────── */}
        <MatrixSection />
      </main>
      <Footer />
    </>
  );
}

// ─── Editorial Manifesto Statement Block (Poster / Underground Layout) ────────
function ManifestoStatement({
  item,
  index,
}: {
  item: { codeKey: string; titleKey: string; descKey: string; tag: string };
  index: number;
}) {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-start ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Code Header Column */}
      <div className={`lg:col-span-4 flex flex-col items-start ${isEven ? '' : 'lg:order-2'}`}>
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-lg border mb-4 bg-[#00ff66]/10 text-[#00ff66] border-[#00ff66]/30"
        >
          {t(item.codeKey)}
        </motion.div>
        <span className="font-mono text-xs tracking-widest uppercase opacity-60 text-slate-400">
          TAG // {item.tag}
        </span>
      </div>

      {/* Big Poster Typography Column */}
      <div className={`lg:col-span-8 ${isEven ? '' : 'lg:order-1'}`}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          className="font-black leading-[1.12] mb-6 whitespace-pre-line tracking-tight text-slate-100"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
            letterSpacing: '-0.035em',
          }}
        >
          {t(item.titleKey)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text-lg md:text-2xl leading-relaxed font-normal text-slate-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t(item.descKey)}
        </motion.p>
      </div>
    </div>
  );
}

// ─── Movement / Entrepreneurship Underground Highlight Block ───────────────────
function MovementStatement() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative p-10 md:p-16 rounded-3xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-[#09130d] to-[#0d1a12] border-2 border-[#00ff66]/40 shadow-[0_24px_60px_rgba(0,255,102,0.12)]"
    >
      <div className="relative z-10 max-w-4xl">
        <div className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase mb-6 text-[#00ff66] bg-[#00ff66]/10 px-4 py-1.5 rounded-lg border border-[#00ff66]/30 inline-block">
          {t('manifesto.04.code')}
        </div>

        <h2
          className="font-black leading-[1.12] mb-6 whitespace-pre-line tracking-tight text-slate-100"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
            letterSpacing: '-0.035em',
          }}
        >
          {t('manifesto.04.title')}
        </h2>

        <p
          className="text-lg md:text-2xl leading-relaxed font-normal mb-10 max-w-3xl text-slate-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t('manifesto.04.desc')}
        </p>

        <a
          href="mailto:work.softrestart@gmail.com?subject=Giri%C5%9Fim%20/%20Teknik%20Ortakl%C4%B1k%20-%20Softrestart"
          className="inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl font-mono font-bold text-base md:text-lg text-black transition-all duration-300 hover:scale-105 shadow-xl"
          style={{
            background: '#00ff66',
            boxShadow: '0 0 30px rgba(0, 255, 102, 0.6)',
          }}
        >
          <span>Fikrini Bizimle Paylaş</span>
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}
