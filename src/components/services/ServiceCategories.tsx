'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '20px',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      id: 'all',
      name: 'All Services',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'wedding',
      name: 'Wedding Planning',
      icon: '💍',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'corporate',
      name: 'Corporate Events',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'birthday',
      name: 'Birthday Celebrations',
      icon: '🎉',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-accent via-accent/5 to-accent relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating-element absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
        <motion.div
          className="floating-element absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="text-6xl">🎯</span>
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-secondary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent-light to-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Service Categories
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our comprehensive range of event planning and management services
            designed to meet your specific needs.
          </motion.p>
        </motion.div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                activeCategory === category.id
                  ? 'ring-2 ring-accent ring-offset-4 ring-offset-accent/5'
                  : ''
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-64 w-full">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <motion.span
                    className="text-4xl mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {category.icon}
                  </motion.span>
                  <motion.h3
                    className="text-xl font-semibold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {category.name}
                  </motion.h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceCategories; 