'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: '⚡',
    title: 'Web & Mobil Uygulama',
    desc: 'React, Next.js ve React Native ile performanslı, ölçeklenebilir web ve mobil uygulamalar geliştiriyoruz.',
    tags: ['Next.js', 'React Native', 'TypeScript'],
  },
  {
    icon: '🚀',
    title: 'SaaS Ürün Tasarımı',
    desc: 'Sıfırdan SaaS ürünü oluşturuyoruz: kullanıcı yönetimi, ödeme entegrasyonu, çok kiracılı mimari.',
    tags: ['SaaS', 'Auth', 'Stripe'],
  },
  {
    icon: '🔗',
    title: 'API & Backend Sistemleri',
    desc: 'Node.js, Go ve Python ile güvenli, hızlı RESTful ve GraphQL API\'ler, mikro-hizmet mimarileri.',
    tags: ['Node.js', 'GraphQL', 'PostgreSQL'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Tasarım',
    desc: 'Kullanıcı odaklı, dönüşüm sağlayan arayüzler. Figma\'dan pixel-perfect implementasyona kadar.',
    tags: ['Figma', 'Design System', 'Prototyping'],
  },
  {
    icon: '☁️',
    title: 'DevOps & Cloud',
    desc: 'AWS, GCP ve Azure üzerinde CI/CD pipeline\'ları, container orkestrasyonu ve altyapı yönetimi.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    icon: '🧠',
    title: 'Teknik Danışmanlık',
    desc: 'Mimari kararlar, teknoloji seçimi, kod kalite analizi ve ekip büyütme stratejileri.',
    tags: ['Mimari', 'Code Review', 'Strateji'],
  },
] as const;

function ServiceCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-4 rounded-2xl p-6 bg-white cursor-default"
      style={{
        border: `1px solid ${hovered ? '#bfdbfe' : '#e2e8f0'}`,
        boxShadow: hovered
          ? '0 8px 32px rgba(37,99,235,0.1), 0 2px 8px rgba(37,99,235,0.06)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
      }}
    >
      {/* Top blue accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #bfdbfe, transparent)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{
          background: hovered ? '#dbeafe' : '#f0f7ff',
          transition: 'background 0.25s ease',
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="text-base font-bold leading-snug"
        style={{
          color: hovered ? '#1d4ed8' : '#0f172a',
          fontFamily: "'Inter', sans-serif",
          transition: 'color 0.2s ease',
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
      >
        {service.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: '#eff6ff',
              color: '#2563eb',
              border: '1px solid #bfdbfe',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="w-full py-24 md:py-32"
      style={{ background: '#f8faff' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}
          >
            Ne Yapıyoruz
          </span>
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#0f172a',
              letterSpacing: '-0.025em',
            }}
          >
            Hizmetlerimiz
          </h2>
          <p
            className="max-w-lg mx-auto text-base"
            style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
          >
            Fikrinizi gerçeğe dönüştürmek için ihtiyacınız olan her şeyi sunuyoruz —
            tasarımdan ölçeklendirmeye kadar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
