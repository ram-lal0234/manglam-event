'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = contentRef.current?.children;
      if (!content) return;

      // Enhanced stagger animation for content
      gsap.from(content, {
        opacity: 0,
        y: 100,
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

      // Parallax effect for background elements
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities to create unique and memorable experiences.',
      icon: '✨'
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring the highest quality in our services and execution.',
      icon: '⭐'
    },
    {
      title: 'Trust',
      description: 'We build lasting relationships based on transparency, reliability, and mutual respect.',
      icon: '🤝'
    },
    {
      title: 'Passion',
      description: 'We are driven by our love for creating magical moments and making dreams come true.',
      icon: '❤️'
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="parallax-bg absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"
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
          className="parallax-bg absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
          className="parallax-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-5xl mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            🎯
          </motion.div>
          <motion.h2 
            className="text-7xl font-bold text-gradient mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Creating unforgettable experiences through excellence and innovation
          </motion.p>
        </motion.div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          <motion.div
            className="bg-gradient-to-br from-background to-accent/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl card-hover border border-accent/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-5xl mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              🎯
            </motion.div>
            <motion.h3 
              className="text-4xl font-semibold text-gradient mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-foreground/90 leading-relaxed text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              At Manglam Event, our mission is to transform ordinary moments into extraordinary memories. 
              We believe that every celebration deserves to be unique, meaningful, and perfectly executed. 
              Through our innovative approach, attention to detail, and unwavering commitment to excellence, 
              we strive to create experiences that exceed expectations and leave lasting impressions.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-background to-accent/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl card-hover border border-accent/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-5xl mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              💫
            </motion.div>
            <motion.h3 
              className="text-4xl font-semibold text-gradient mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Values
            </motion.h3>
            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex items-start space-x-6 bg-background/90 backdrop-blur-sm p-8 rounded-2xl border border-accent/20 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="text-4xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {value.icon}
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="text-2xl font-semibold text-foreground mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {value.title}
                    </motion.h4>
                    <motion.p 
                      className="text-foreground/90 text-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection; 