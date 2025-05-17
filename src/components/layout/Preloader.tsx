'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      // Initial States
      gsap.set([logoRef.current, circleRef.current, flareRef.current], { opacity: 0, scale: 0 });

      // Particles (blurred background and sharp foreground)
      const particles = Array.from({ length: 40 }, (_, i) => {
        const particle = document.createElement('div');
        particle.className = `absolute rounded-full ${i % 2 === 0 ? 'bg-accent/30 blur-sm' : 'bg-accent'} w-1 h-1`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particlesRef.current?.appendChild(particle);

        gsap.to(particle, {
          x: 'random(-150, 150)',
          y: 'random(-150, 150)',
          opacity: 'random(0.1, 0.7)',
          scale: 'random(0.5, 2)',
          duration: 'random(2, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.05
        });

        return particle;
      });

      // Circle stroke animation with gradient shimmer
      const circleTimeline = gsap.timeline();
      circleTimeline.to(circleRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut'
      });

      // Logo Entrance + Glow Pulse + Subtle Bounce
      const logoTimeline = gsap.timeline({ delay: 0.3 });
      logoTimeline
        .to(logoRef.current, { opacity: 1, scale: 1.2, duration: 1.5, ease: 'expo.out' })
        .to(logoRef.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.inOut'
        })
        .to(logoRef.current, {
          boxShadow: '0 0 30px rgba(255,255,255,0.4)',
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: 'sine.inOut'
        }, '<');

      // Flare enhanced sweep with refraction feel
      gsap.to(flareRef.current, {
        x: '250%',
        duration: 1.5,
        ease: 'power2.inOut',
        delay: 0.8,
        repeat: -1,
        repeatDelay: 2
      });

      // Typing effect
      const text = "Crafting Unforgettable Moments...";
      let currentText = "";
      let currentIndex = 0;

      const typeText = () => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          if (textRef.current) {
            textRef.current.textContent = currentText;
          }
          currentIndex++;
          setTimeout(typeText, 50);
        }
      };
      setTimeout(typeText, 1200);

      // Exit Animation with smooth zoom out
      const exitTimeline = gsap.timeline({
        delay: 4,
        onComplete: () => {
          if (preloaderRef.current) preloaderRef.current.style.display = 'none';
          document.body.style.overflow = '';
        }
      });

      exitTimeline
        .to(logoRef.current, { scale: 0.9, opacity: 0, duration: 0.8, ease: 'power2.in' })
        .to(circleRef.current, { opacity: 0, duration: 0.8, ease: 'power2.in' }, '<')
        .to(particles, { opacity: 0, duration: 1, ease: 'power2.in', stagger: 0.02 }, '<')
        .to([textRef.current, flareRef.current], { opacity: 0, duration: 0.5 }, '<')
        .to(preloaderRef.current, { scale: 1.1, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, '<');
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-secondary via-secondary/95 to-secondary"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-50" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />

      {/* Particles container */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden"
      />

      {/* Logo container */}
      <div className="relative">
        {/* Animated circle */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 200 200"
        >
          <circle
            ref={circleRef}
            className="stroke-primary"
            fill="none"
            strokeWidth="2"
            strokeDasharray="565.48"
            strokeDashoffset="565.48"
            cx="100"
            cy="100"
            r="90"
          />
        </svg>

        {/* Logo */}
        <div
          ref={logoRef}
          className="relative w-32 h-32 drop-shadow-2xl transition-all will-change-transform"
        >
          <Image
            src="/images/logo.png"
            alt="Manglam Event Logo"
            fill
            className="object-contain"
            priority
          />
          {/* Soft aura */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
          {/* Lens flare */}
          <div
            ref={flareRef}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-45"
            style={{ transform: 'translateX(-100%)' }}
          />
        </div>
      </div>

      {/* Loading text */}
      <div
        ref={textRef}
        className="mt-8 text-white/80 font-light tracking-wider"
      />
    </div>
  );
};

export default Preloader;
