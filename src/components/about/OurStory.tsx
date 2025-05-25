'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface StorySection {
  title: string;
  content: string;
  year: string;
  icon: string;
}

const storySections: StorySection[] = [
  {
    title: "Our Legacy",
    content: "Manglam Event is not just a name; it's a legacy that began with a simple yet powerful dream. Founded by Naveen Rajpurohit, our journey is a testament to the power of passion, dedication, and the desire to create something extraordinary.",
    year: "2008",
    icon: "🏆"
  },
  {
    title: "The Beginning",
    content: "In 2008, Naveen Rajpurohit, a young entrepreneur with a vision, took the first step towards creating what would become one of the most trusted names in event management. With a background in business and a passion for creating memorable experiences, Naveen saw an opportunity to transform the way events were planned and executed.",
    year: "2009",
    icon: "✨"
  },
  {
    title: "The Meeting",
    content: "The turning point came when Naveen met Mansi, a creative soul with an eye for detail and a heart full of ideas. Their meeting was not just a coincidence; it was the beginning of a partnership that would change the landscape of event management in India.",
    year: "2010",
    icon: "🤝"
  }
];

const OurStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      const timeline = timelineRef.current?.children;
      if (!timeline) return;

      gsap.from(timeline, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: {
          amount: 1.5,
          ease: "power2.out"
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Simulate data loading
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, sectionRef);

    return () => ctx.revert();
  }, [isVisible]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50"
          >
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-4xl mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            📜
          </motion.div>
          <motion.h2 
            className="text-6xl font-bold text-gradient mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h2>
          <motion.p 
            className="text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A journey of passion, innovation, and excellence
          </motion.p>
        </motion.div>

        <div
          ref={timelineRef}
          className="max-w-4xl mx-auto space-y-24"
        >
          {storySections.map((section, index) => (
            <motion.div
              key={section.title}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Year Badge */}
              <motion.div
                className="absolute -left-24 top-0 text-2xl font-bold text-gradient"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {section.year}
              </motion.div>

              {/* Content */}
              <div className="relative">
                <motion.div
                  className="text-4xl mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {section.icon}
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-gradient mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {section.title}
                </motion.h3>
                <motion.p 
                  className="text-foreground/90 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {section.content}
                </motion.p>
              </div>

              {/* Connecting Line */}
              {index < storySections.length - 1 && (
                <div className="absolute left-0 top-full w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory; 