'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Keşif & Analiz',
    desc: 'İhtiyaçlarınızı, hedef kitlenizi ve iş süreçlerinizi derinlemesine anlıyoruz. Rakip analizi ve teknik fizibilite raporu hazırlıyoruz.',
    icon: '🔍',
    duration: '1–2 Hafta',
  },
  {
    number: '02',
    title: 'Tasarım & Prototip',
    desc: 'Kullanıcı akışlarını, wireframe\'leri ve yüksek kaliteli Figma prototiplerini hazırlıyoruz. Onayınızı almadan kod yazmıyoruz.',
    icon: '✏️',
    duration: '2–3 Hafta',
  },
  {
    number: '03',
    title: 'Geliştirme & Test',
    desc: 'Çevik metodoloji ile sprint\'ler halinde geliştiriyoruz. Her sprint sonunda çalışan bir ürünü inceleme yapmanız için sunuyoruz.',
    icon: '⚙️',
    duration: '4–12 Hafta',
  },
  {
    number: '04',
    title: 'Lansman & Destek',
    desc: 'Ürünü canlıya alıyoruz, performansı izliyoruz ve lansman sonrası 3 ay boyunca ücretsiz teknik destek sağlıyoruz.',
    icon: '🚀',
    duration: 'Süregelen',
  },
] as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProcessSection() {
  return (
    <section id="surec" className="w-full py-24 md:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}
          >
            Metodoloji
          </span>
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: "'Inter', sans-serif", color: '#0f172a', letterSpacing: '-0.025em' }}
          >
            Nasıl Çalışıyoruz?
          </h2>
          <p
            className="max-w-md mx-auto text-base"
            style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
          >
            Şeffaf, öngörülebilir ve sonuç odaklı bir süreç.
            Her aşamada tam kontrol sizdedir.
          </p>
        </motion.div>

        {/* Steps — alternating layout on desktop */}
        <div className="relative">
          {/* Vertical connector — desktop only */}
          <div
            className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, #bfdbfe, #e0f2fe, #bfdbfe)' }}
          />

          <div className="flex flex-col gap-10 lg:gap-6">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-5/12">
                    <div
                      className="rounded-2xl p-6 bg-white"
                      style={{ border: '1px solid #e2e8f0', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-xl">{step.icon}</span>
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: '#0f172a', fontFamily: "'Inter', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="flex-shrink-0 lg:w-2/12 flex justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: '#eff6ff',
                        border: '2px solid #3b82f6',
                        boxShadow: '0 0 0 6px rgba(59,130,246,0.08)',
                      }}
                    >
                      <span
                        className="font-black text-base"
                        style={{ color: '#2563eb', fontFamily: "'Inter', sans-serif" }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
