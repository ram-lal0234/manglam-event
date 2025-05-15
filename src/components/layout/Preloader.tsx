'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([logoRef.current, progressRef.current], {
        opacity: 0,
        y: 20
      });

      // Logo animation
      gsap.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Progress bar animation
      gsap.to(progressRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      // Simulate loading progress
      gsap.to(progressRef.current, {
        width: '100%',
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
          // Fade out preloader
          gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
              if (preloaderRef.current) {
                preloaderRef.current.style.display = 'none';
              }
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary"
    >
      <div
        ref={logoRef}
        className="relative w-32 h-32 mb-8"
      >
        <Image
          src="/images/logo.png"
          alt="Manglam Event Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-white"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

export default Preloader; 