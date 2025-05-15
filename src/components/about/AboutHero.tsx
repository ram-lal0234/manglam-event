'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation with enhanced stagger
      gsap.from(textRef.current?.children || [], {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: {
          amount: 1,
          ease: "power2.out"
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Enhanced parallax effect for background
      gsap.to(bgRef.current, {
        yPercent: 30,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Animated overlay
      gsap.to(overlayRef.current, {
        opacity: 0.7,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/about/hero-bg.jpg)',
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Animated Gradient Overlay */}
        <motion.div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Animated Particles */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        ref={textRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-light to-accent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Creating unforgettable moments and turning dreams into reality through
            exceptional event planning and management.
          </motion.p>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-2 h-4 bg-white/50 rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutHero; 