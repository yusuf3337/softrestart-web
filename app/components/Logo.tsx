'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'icon' | 'auto' | 'footer';
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label="Softrestart ana sayfa"
    >
      <div className="relative w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:rotate-90">
        <Image
          src="/white-s.png"
          alt=""
          width={28}
          height={28}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
        softrestart
        <span className="text-accent">_</span>
      </span>
    </Link>
  );
}
