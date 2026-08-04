'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'icon' | 'auto' | 'footer';
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center shrink-0 group ${className}`}>
      <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/black-s.PNG"
          alt="Softrestart"
          width={40}
          height={40}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </Link>
  );
}
