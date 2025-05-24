'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { BackgroundBeams } from '@/components/ui/background-beams';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Events Planned', value: '500+' },
  { label: 'Happy Clients', value: '300+' },
];

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-content',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
      gsap.fromTo(
        '.story-image',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
      gsap.fromTo(
        '.stat-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-background">
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Story Content */}
        <div ref={contentRef} className="story-content">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Manglam Event was founded with a vision to redefine event planning. Over the past decade, we have crafted unforgettable experiences for clients across the region, blending creativity, precision, and passion in every project.
          </p>
          <p className="text-lg text-foreground/80 mb-4">
            Our team thrives on challenges and is dedicated to making every event unique. From intimate gatherings to grand celebrations, we bring ideas to life with meticulous attention to detail.
          </p>
          <p className="text-lg text-foreground/80 mb-8">
            We believe in building lasting relationships with our clients, ensuring every event is not just successful, but truly memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card bg-background/60 backdrop-blur-lg border border-accent/10 rounded-2xl px-8 py-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl outline-none cursor-pointer"
                tabIndex={0}
                aria-label={stat.label}
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground/80 text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Story Image */}
        <div ref={imageRef} className="story-image flex justify-center items-center">
          <motion.img
            src="/images/about-story.jpg"
            alt="Our team at work planning an event"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory; 