'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SparklesCore } from '@/components/ui/sparkles';

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Only allow slight parallax, no fade-out
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background gradient in
      gsap.to('.hero-gradient', {
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
      });
      // Animate text elements with stagger
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
      // Animate floating elements
      gsap.to('.floating-element', {
        y: '20px',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: { amount: 1.5, from: 'random' }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{ y, opacity }}
    >
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element absolute w-24 h-24 rounded-full bg-primary/10 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ y: [0, 20, 0], scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, repeatType: 'reverse' }}
            whileHover={{ scale: 1.15, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          />
        ))}
      </div>
      {/* Content */}
      <div ref={textRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          className="hero-text text-4xl md:text-6xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Crafting Unforgettable
          <motion.span 
            className="text-primary inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {' '}Experiences
          </motion.span>
        </motion.h1>
        <motion.p
          className="hero-text text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          We are passionate event planners dedicated to turning your dreams into reality.
          With years of experience and a creative approach, we ensure every event is
          unique and memorable.
        </motion.p>
        <motion.div
          className="hero-text flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:outline-none transition-transform duration-200 shadow-md hover:scale-105"
            asChild
            aria-label="Get Started"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.97 }}
              tabIndex={0}
            >
              Get Started
            </motion.a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/50 backdrop-blur-sm hover:bg-background/80 focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:outline-none transition-transform duration-200 shadow-md hover:scale-105"
            asChild
            aria-label="Our Services"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.97 }}
              tabIndex={0}
            >
              Our Services
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHero; 