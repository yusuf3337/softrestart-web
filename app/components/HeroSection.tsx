'use client';

import { motion, type Variants } from 'framer-motion';
import { useApp } from '../context/AppContext';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: EASE },
  }),
};

export default function HeroSection() {
  const { t } = useApp();

  const SERVICES = [
    { id: '01', title: t('feature.web.title'), sub: t('feature.web.sub') },
    { id: '02', title: t('feature.saas.title'), sub: t('feature.saas.sub') },
    { id: '03', title: t('feature.cloud.title'), sub: t('feature.cloud.sub') },
    { id: '04', title: t('feature.ui.title'), sub: t('feature.ui.sub') },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Faint hairline grid, top only */}
      <div
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 55%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Prompt line */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="inline-flex items-center gap-2 font-mono text-xs md:text-sm text-muted">
            <span className="text-accent">softrestart@studio</span>
            <span className="text-faint">:~$</span>
            <span>
              ./init --
              {t('hero.badge')
                .toLocaleLowerCase('tr-TR')
                .replace(/\u0307/g, '')
                .replace(/[\s&]+/g, '-')}
            </span>
            <span className="caret-blink text-accent">_</span>
          </span>
        </motion.div>

        {/* Massive mono wordmark */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 font-mono font-extrabold leading-[0.95] tracking-tighter text-foreground text-balance"
          style={{ fontSize: 'clamp(3rem, 11vw, 8.5rem)', letterSpacing: '-0.05em' }}
        >
          soft<span className="text-accent">restart</span>
          <span className="text-accent">()</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-7 max-w-2xl text-lg md:text-2xl leading-relaxed text-muted text-pretty"
        >
          {t('hero.tagline')}
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-2.5 px-6 py-3 font-mono text-sm md:text-base text-background bg-accent hover:bg-foreground transition-colors duration-200"
          >
            <span>{t('hero.cta').toLowerCase()}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#sss"
            className="inline-flex items-center gap-2.5 px-6 py-3 font-mono text-sm md:text-base text-muted border border-line hover:border-accent hover:text-foreground transition-colors duration-200"
          >
            <span className="text-accent">?</span> {t('nav.faq').toLowerCase()}
          </a>
        </motion.div>

        {/* Services as terminal listing — no cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-20 md:mt-28 border-t border-line"
        >
          <div className="flex items-center gap-2 py-4 font-mono text-xs text-faint">
            <span className="text-accent">&gt;</span>
            <span className="uppercase tracking-widest">ls ./capabilities</span>
          </div>

          <ul>
            {SERVICES.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group border-t border-line first:border-t-0"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1.5 md:gap-8 py-6 md:py-7 transition-colors duration-200 group-hover:bg-elevated -mx-4 px-4">
                  <span className="font-mono text-sm text-accent shrink-0 w-8">{s.id}</span>
                  <h3 className="font-mono text-lg md:text-2xl font-semibold text-foreground tracking-tight shrink-0 md:w-72 group-hover:text-accent transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-muted flex-1">{s.sub}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="border-t border-line" />
        </motion.div>
      </div>
    </section>
  );
}
