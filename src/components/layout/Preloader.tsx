'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    const ctx = gsap.context(() => {
      // Initial States
      gsap.set([logoRef.current, circleRef.current, flareRef.current], { opacity: 0, scale: 0 });

      // Enhanced Particles Animation
      const particles = Array.from({ length: 50 }, (_, i) => {
        const particle = document.createElement('div');
        particle.className = `absolute rounded-full ${i % 2 === 0 ? 'bg-accent/30 blur-sm' : 'bg-accent'} w-1 h-1`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particlesRef.current?.appendChild(particle);

        gsap.to(particle, {
          x: 'random(-200, 200)',
          y: 'random(-200, 200)',
          opacity: 'random(0.1, 0.7)',
          scale: 'random(0.5, 2)',
          duration: 'random(3, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.02
        });

        return particle;
      });

      // Enhanced Circle Animation
      const circleTimeline = gsap.timeline();
      circleTimeline
        .to(circleRef.current, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power2.inOut'
        })
        .to(circleRef.current, {
          scale: 1.1,
          duration: 1,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });

      // Enhanced Logo Animation
      const logoTimeline = gsap.timeline({ delay: 0.3 });
      logoTimeline
        .to(logoRef.current, { 
          opacity: 1, 
          scale: 1.2, 
          duration: 1.5, 
          ease: 'expo.out' 
        })
        .to(logoRef.current, {
          scale: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)'
        })
        .to(logoRef.current, {
          boxShadow: '0 0 40px rgba(255,255,255,0.4)',
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: 'sine.inOut'
        }, '<');

      // Enhanced Flare Animation
      gsap.to(flareRef.current, {
        x: '300%',
        duration: 2,
        ease: 'power2.inOut',
        delay: 0.8,
        repeat: -1,
        repeatDelay: 2.5
      });

      // Enhanced Typing Effect
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
          setTimeout(typeText, 40);
        }
      };
      setTimeout(typeText, 1000);

      // Enhanced Exit Animation
      const exitTimeline = gsap.timeline({
        delay: 4.5,
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.height = '';
          }
        }
      });

      exitTimeline
        .to(logoRef.current, { 
          scale: 0.9, 
          opacity: 0, 
          duration: 1, 
          ease: 'power2.in' 
        })
        .to(circleRef.current, { 
          opacity: 0, 
          duration: 1, 
          ease: 'power2.in' 
        }, '<')
        .to(particles, { 
          opacity: 0, 
          duration: 1.2, 
          ease: 'power2.in', 
          stagger: 0.02 
        }, '<')
        .to([textRef.current, flareRef.current], { 
          opacity: 0, 
          duration: 0.8 
        }, '<')
        .to(preloaderRef.current, { 
          scale: 1.1, 
          opacity: 0, 
          duration: 1, 
          ease: 'power2.inOut' 
        }, '<');
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-background via-background/95 to-background"
    >
      {/* Enhanced Grain Overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-60" />
      </div>

      {/* Enhanced Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent" />

      {/* Enhanced Particles Container */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden"
      />

      {/* Enhanced Logo Container */}
      <div className="relative">
        {/* Enhanced Animated Circle */}
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

        {/* Enhanced Logo */}
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
          {/* Enhanced Soft Aura */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          {/* Enhanced Lens Flare */}
          <div
            ref={flareRef}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-45"
            style={{ transform: 'translateX(-100%)' }}
          />
        </div>
      </div>

      {/* Enhanced Loading Text */}
      <div
        ref={textRef}
        className="mt-12 text-xl font-light tracking-wider text-foreground/90"
      />
    </div>
  );
};

export default Preloader;
