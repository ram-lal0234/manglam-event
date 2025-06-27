'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
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
      // Initial States with better opacity handling
      gsap.set([logoRef.current, circleRef.current, flareRef.current], { 
        opacity: 0, 
        scale: 0,
        clearProps: "all"
      });

      // Enhanced Particles Animation with better performance
      const particles = Array.from({ length: 30 }, (_, i) => {
        const particle = document.createElement('div');
        particle.className = `absolute rounded-full ${i % 2 === 0 ? 'bg-accent/20 blur-sm' : 'bg-accent/40'} w-1 h-1`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particlesRef.current?.appendChild(particle);

        gsap.to(particle, {
          x: 'random(-150, 150)',
          y: 'random(-150, 150)',
          opacity: 'random(0.2, 0.6)',
          scale: 'random(0.5, 1.5)',
          duration: 'random(4, 8)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.03
        });

        return particle;
      });

      // Enhanced Circle Animation with smoother easing
      const circleTimeline = gsap.timeline();
      circleTimeline
        .to(circleRef.current, {
          strokeDashoffset: 0,
          duration: 3,
          ease: 'power2.inOut'
        })
        .to(circleRef.current, {
          scale: 1.05,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });

      // Enhanced Logo Animation with better timing
      const logoTimeline = gsap.timeline({ delay: 0.5 });
      logoTimeline
        .to(logoRef.current, { 
          opacity: 1, 
          scale: 1.1, 
          duration: 1.8, 
          ease: 'expo.out' 
        })
        .to(logoRef.current, {
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)'
        })
        .to(logoRef.current, {
          boxShadow: '0 0 50px rgba(255,255,255,0.3)',
          repeat: -1,
          yoyo: true,
          duration: 2.5,
          ease: 'sine.inOut'
        }, '<');

      // Enhanced Flare Animation with better timing
      gsap.to(flareRef.current, {
        x: '400%',
        duration: 2.5,
        ease: 'power2.inOut',
        delay: 1.2,
        repeat: -1,
        repeatDelay: 3
      });

      // Enhanced Typing Effect with better timing
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
      setTimeout(typeText, 1500);

      // Enhanced Exit Animation with better timing and smoothness
      const exitTimeline = gsap.timeline({
        delay: 5.5,
        onStart: () => {
          setIsExiting(true);
        },
        onComplete: () => {
          setIsLoading(false);
          document.body.style.overflow = '';
          document.body.style.height = '';
        }
      });

      exitTimeline
        .to(logoRef.current, { 
          scale: 0.8, 
          opacity: 0, 
          duration: 1.2, 
          ease: 'power3.in' 
        })
        .to(circleRef.current, { 
          opacity: 0, 
          scale: 0.8,
          duration: 1.2, 
          ease: 'power3.in' 
        }, '<')
        .to(particles, { 
          opacity: 0, 
          scale: 0,
          duration: 1.5, 
          ease: 'power3.in', 
          stagger: 0.03 
        }, '<')
        .to([textRef.current, flareRef.current], { 
          opacity: 0, 
          duration: 1 
        }, '<')
        .to(preloaderRef.current, { 
          scale: 1.05, 
          opacity: 0, 
          duration: 1.5, 
          ease: 'power3.inOut' 
        }, '<');
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={preloaderRef}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-background via-background/95 to-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Enhanced Grain Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-40" />
          </div>

          {/* Enhanced Radial Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />

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
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              {/* Enhanced Lens Flare */}
              <div
                ref={flareRef}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-45"
                style={{ transform: 'translateX(-100%)' }}
              />
            </div>
          </div>

          {/* Enhanced Loading Text */}
          <div
            ref={textRef}
            className="mt-12 text-xl font-light tracking-wider text-foreground/80"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
