'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation for title with enhanced effect
      const title = titleRef.current?.querySelector('.section-title');
      if (title) {
        const split = new SplitText(title, { type: "chars,words" });
        gsap.from(split.chars, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: {
            amount: 1.2,
            ease: "power2.out"
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        });
      }

      // Enhanced card animations with 3D effect
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          rotationX: 15,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        });
      }

      // Create enhanced sparkles
      const createSparkle = () => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparklesRef.current?.appendChild(sparkle);

        gsap.to(sparkle, {
          opacity: 0,
          scale: 0,
          duration: 1 + Math.random(),
          ease: 'power2.out',
          onComplete: () => {
            sparkle.remove();
          }
        });
      };

      // Create sparkles at intervals
      const sparkleInterval = setInterval(createSparkle, 200);

      // Custom cursor effect
      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        clearInterval(sparkleInterval);
        window.removeEventListener('mousemove', handleMouseMove);
      };
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
      className="py-32 bg-gradient-to-b from-secondary via-secondary/95 to-secondary relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating-element absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="floating-element absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Enhanced Animated Particles */}
        <div ref={sparklesRef} className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={titleRef}
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
            className="section-title text-4xl font-bold text-accent-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-light via-accent to-accent-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Service Categories
          </motion.h2>
          <motion.p 
            className="text-lg text-accent max-w-2xl mx-auto"
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
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 group perspective-1000 ${
                activeCategory === category.id
                  ? 'ring-2 ring-accent ring-offset-4 ring-offset-accent/5'
                  : ''
              }`}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-64 w-full preserve-3d">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.7 }}
                />
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
                    className="text-xl font-semibold text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {category.name}
                  </motion.h3>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-50 mix-blend-difference"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <style jsx global>{`
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(1px);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </motion.section>
  );
};

export default ServiceCategories; 