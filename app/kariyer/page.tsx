'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useApp } from '../context/AppContext';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const ACCENT = '#e0a458';

// ─── Glitch Headline ──────────────────────────────────────────────────────────
function GlitchHeadline({ text1, text2 }: { text1: string; text2: string }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    }, 4800);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`font-mono font-extrabold leading-[1.05] tracking-tighter transition-transform ${
        glitch ? 'translate-x-[2px] skew-x-1' : ''
      }`}
      style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)', letterSpacing: '-0.045em' }}
    >
      <span className="block text-foreground">{text1}</span>
      <span
        className="block mt-2 text-accent"
        style={{ textShadow: glitch ? '0 0 24px rgba(224,164,88,0.5)' : 'none' }}
      >
        {text2}
      </span>
    </h1>
  );
}

// ─── Character Rain Canvas (amber CRT, not matrix-green) ──────────────────────
function CharRain() {
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

    const chars = '01</>{}[]#_$;:=+-*softrestart()rewrite.the.rules';
    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    const draw = () => {
      ctx.fillStyle = 'rgba(11, 13, 16, 0.09)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = ACCENT;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" aria-hidden />;
}

// ─── System Stack — one terminal window, the page's single bold element ───────
function SystemStackSection() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const STACK_GROUPS = [
    { categoryKey: 'stack.cat.frontend', items: ['React', 'Next.js', 'React Native', 'Expo'] },
    { categoryKey: 'stack.cat.backend', items: ['Node.js', 'Laravel', 'Express.js', 'PHP'] },
    { categoryKey: 'stack.cat.database', items: ['MySQL', 'MongoDB', 'Firebase'] },
    { categoryKey: 'stack.cat.infra', items: ['Docker', 'Git', 'REST API'] },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            <span className="text-accent">&gt;</span> {t('stack.badge')}
          </span>
          <h2
            className="mt-4 font-mono text-3xl md:text-5xl font-bold text-foreground tracking-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            {t('stack.title')}
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="border border-line-strong bg-elevated"
        >
          <div className="px-5 py-3 flex items-center justify-between border-b border-line">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-faint inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-faint inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
              <span className="ml-3 font-mono text-xs text-muted">system_stack.env</span>
            </div>
            <span className="font-mono text-xs text-accent">active</span>
          </div>

          <div className="p-6 md:p-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STACK_GROUPS.map((group, idx) => (
              <div key={group.categoryKey} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-muted uppercase tracking-widest border-b border-line pb-3">
                  <span className="text-accent">0{idx + 1}</span>
                  <span>{t(group.categoryKey)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-sm px-2.5 py-1 text-foreground border border-line hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 md:px-9 py-5 border-t border-line font-mono text-sm leading-relaxed text-muted">
            <span className="text-accent">// </span>
            {t('stack.note').replace(/^\*\s*/, '')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Closing terminal-boot section (replaces matrix-green cliché) ─────────────
function ClosingSection() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center text-center border-t border-line bg-background"
    >
      <CharRain />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            <span className="text-muted">sys_msg //</span> reboot required
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="max-w-3xl mx-auto font-mono text-2xl md:text-4xl leading-tight mb-12 font-bold whitespace-pre-line text-foreground tracking-tight"
          style={{ letterSpacing: '-0.03em' }}
        >
          {t('matrix.tagline')}
        </motion.p>

        <motion.a
          href="mailto:work.softrestart@gmail.com?subject=Kariyer%20/%20Softrestart"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="group inline-flex items-center gap-3 px-9 py-4 font-mono font-semibold text-base md:text-lg text-background bg-accent hover:bg-foreground transition-colors duration-200"
        >
          <span>{t('matrix.cta').replace(' →', '').toLowerCase()}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </motion.a>
      </div>
    </section>
  );
}

// ─── Editorial Manifesto Statement ────────────────────────────────────────────
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
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-start">
      <div className={`lg:col-span-4 flex flex-col items-start ${isEven ? '' : 'lg:order-2'}`}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-mono text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 text-accent"
        >
          {t(item.codeKey)}
        </motion.div>
        <span className="font-mono text-xs tracking-widest uppercase text-faint">tag // {item.tag}</span>
      </div>

      <div className={`lg:col-span-8 ${isEven ? '' : 'lg:order-1'}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          className="font-mono font-bold leading-[1.12] mb-5 whitespace-pre-line tracking-tight text-foreground"
          style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)', letterSpacing: '-0.04em' }}
        >
          {t(item.titleKey)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text-lg md:text-xl leading-relaxed text-muted max-w-2xl"
        >
          {t(item.descKey)}
        </motion.p>
      </div>
    </div>
  );
}

// ─── Movement Highlight (hairline block, no glowing card) ─────────────────────
function MovementStatement() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative border-l-2 border-accent pl-8 md:pl-12"
    >
      <div className="max-w-3xl">
        <div className="font-mono text-xs md:text-sm font-semibold tracking-widest uppercase mb-5 text-accent">
          {t('manifesto.04.code')}
        </div>

        <h2
          className="font-mono font-bold leading-[1.12] mb-5 whitespace-pre-line tracking-tight text-foreground"
          style={{ fontSize: 'clamp(1.85rem, 5vw, 3.5rem)', letterSpacing: '-0.04em' }}
        >
          {t('manifesto.04.title')}
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-9 max-w-2xl text-muted">
          {t('manifesto.04.desc')}
        </p>

        <a
          href="mailto:work.softrestart@gmail.com?subject=Giri%C5%9Fim%20/%20Teknik%20Ortakl%C4%B1k%20-%20Softrestart"
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 font-mono font-semibold text-sm md:text-base text-background bg-accent hover:bg-foreground transition-colors duration-200"
        >
          <span>fikrini paylaş</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Careers Page ────────────────────────────────────────────────────────
export default function KariyerPage() {
  const { t } = useApp();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const MANIFESTO_ITEMS = [
    { codeKey: 'manifesto.01.code', titleKey: 'manifesto.01.title', descKey: 'manifesto.01.desc', tag: 'FREEDOM_MODE' },
    { codeKey: 'manifesto.02.code', titleKey: 'manifesto.02.title', descKey: 'manifesto.02.desc', tag: 'OUTPUT_METRIC' },
    { codeKey: 'manifesto.03.code', titleKey: 'manifesto.03.title', descKey: 'manifesto.03.desc', tag: 'REAL_IMPACT' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-36 md:pt-48 relative overflow-hidden">
        {/* Subtle scanlines */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.025] z-30"
          aria-hidden
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 50%)',
            backgroundSize: '100% 4px',
          }}
        />

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div ref={heroRef} className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest uppercase mb-8 text-muted"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{t('careers.status')}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="mb-8"
            >
              <GlitchHeadline text1={t('careers.hero.title1')} text2={t('careers.hero.title2')} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="text-lg md:text-xl leading-relaxed max-w-2xl mb-12 text-muted"
            >
              {t('careers.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="mailto:work.softrestart@gmail.com?subject=Kariyer%20/%20Softrestart"
                className="group inline-flex items-center gap-3 px-8 py-4 font-mono font-semibold text-base md:text-lg text-background bg-accent hover:bg-foreground transition-colors duration-200"
              >
                <span>{t('careers.hero.cta').replace(' →', '').toLowerCase()}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="h-px w-full bg-line" />
        </div>

        {/* Manifesto */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col gap-24 md:gap-32">
            {MANIFESTO_ITEMS.map((item, index) => (
              <ManifestoStatement key={item.codeKey} item={item} index={index} />
            ))}
            <MovementStatement />
          </div>
        </div>

        <SystemStackSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
