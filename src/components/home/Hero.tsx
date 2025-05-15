"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced text animation
      gsap.from(textRef.current?.children || [], {
        opacity: 0,
        y: 100,
        duration: 1.5,
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

      // Enhanced video animation
      gsap.from(videoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Parallax effect
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
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

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 parallax-bg"
          style={{ scale, y }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/13038198/13038198-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        {/* Animated Particles */}
        <div className="absolute inset-0">
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
        </div>
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative h-full flex flex-col items-center justify-center text-center text-white px-4"
      >
        <motion.div
          className="inline-block mb-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Image
            src="/images/logo.png"
            alt="Manglam Event Logo"
            width={150}
            height={150}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-light to-white drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Manglam Event
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl mb-12 text-white/90 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Dreams Transform into Unforgettable Celebrations
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="/services"
            className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
