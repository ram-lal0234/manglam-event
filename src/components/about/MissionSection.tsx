'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BackgroundBeams } from '@/components/ui/background-beams';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Only allow slight parallax, no fade-out
  const y = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mission-card', 
        {
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const missions = [
    {
      title: 'Our Mission',
      description: 'To create extraordinary events that exceed expectations and leave lasting impressions.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Vision',
      description: 'To be the leading event planning company known for innovation, creativity, and excellence.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Values',
      description: 'Integrity, creativity, attention to detail, and client satisfaction drive everything we do.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden bg-background"
      style={{ y, opacity }}
    >
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are driven by our commitment to excellence and our passion for creating
            unforgettable experiences.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <Card
              key={mission.title}
              className={cn(
                "mission-card group relative bg-background/60 backdrop-blur-lg border border-accent/10 hover:border-accent/30 transition-all duration-300",
                "hover:shadow-2xl hover:scale-105 focus-within:shadow-2xl focus-within:scale-105 outline-none",
                "rounded-2xl cursor-pointer",
              )}
              tabIndex={0}
              aria-label={mission.title}
            >
              <CardHeader>
                <motion.div 
                  className="text-primary mb-4"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  whileTap={{ scale: 0.95, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {mission.icon}
                </motion.div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {mission.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  {mission.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection; 