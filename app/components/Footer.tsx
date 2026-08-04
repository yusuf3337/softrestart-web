'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useApp } from '../context/AppContext';
import Logo from './Logo';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  const LINKS = {
    [t('footer.col.services')]: [
      { label: t('footer.link.webApp'), href: '/hizmetler' },
      { label: t('footer.link.mobileApp'), href: '/hizmetler' },
      { label: t('footer.link.saas'), href: '/hizmetler' },
      { label: t('footer.link.uiux'), href: '/hizmetler' },
      { label: t('footer.link.devops'), href: '/hizmetler' },
    ],
    [t('footer.col.company')]: [
      { label: t('nav.process'), href: '/surec' },
      { label: t('nav.careers'), href: '/kariyer' },
      { label: t('nav.faq'), href: '/#sss' },
      { label: t('nav.contact'), href: '/#iletisim' },
    ],
    [t('footer.col.contact')]: [
      { label: 'work.softrestart@gmail.com', href: 'mailto:work.softrestart@gmail.com' },
      { label: '+90 542 819 1504', href: 'tel:+905428191504' },
      { label: '+90 548 866 5422', href: 'tel:+905488665422' },
      { label: 'LOCATION: EVERYWHERE', href: '/#iletisim' },
    ],
  };

  return (
    <footer
      className="relative w-full overflow-hidden bg-[#060911] text-slate-300 border-t border-slate-800/80"
    >
      <div
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 30%, rgba(0,255,102,0.5) 50%, rgba(59,130,246,0.3) 70%, transparent 100%)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <Logo variant="footer" />

            <p
              className="text-base leading-relaxed max-w-sm text-slate-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('footer.desc')}
            </p>
          </motion.div>

          {/* Link columns */}
          {(Object.entries(LINKS) as [string, { label: string; href: string }[]][]).map(([title, links], ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (ci + 1) * 0.07, ease: EASE }}
              className="flex flex-col gap-3.5"
            >
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {title}
              </h4>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 text-slate-400 hover:text-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom bar with Futuristic Brand Terminal tags */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80"
        >
          <p className="text-xs md:text-sm text-slate-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {year} Softrestart. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
              <span className="text-[#00ff66] font-semibold">System status: ONLINE</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline font-semibold text-slate-300">&gt; REWRITE THE RULES.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
