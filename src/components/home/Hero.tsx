"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  useEffect(() => {
    // Show content after a short delay to ensure smooth transition from preloader
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isContentVisible) return;

      // Enhanced text animation with split text
      const title = textRef.current?.querySelector('.hero-title');
      if (title) {
        const words = title.textContent?.split(' ') || [];
        title.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ');
        
        gsap.from(title.children, {
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
      }

      // Enhanced video animation
      if (isVideoLoaded) {
        gsap.from(videoRef.current, {
          opacity: 0,
          scale: 1.1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        });
      }

      // Enhanced gradient overlay animation
      gsap.from('.gradient-overlay', {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      });

      // Enhanced tagline animation with split text
      const tagline = document.querySelector('.tagline');
      if (tagline) {
        const words = tagline.textContent?.split(' ') || [];
        tagline.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ');
        
        gsap.from(tagline.children, {
          x: -100,
          opacity: 0,
          duration: 0.8,
          stagger: {
            amount: 1,
            ease: "power2.out"
          },
          delay: 0.5
        });
      }

      // Enhanced CTA buttons animation
      gsap.from('.cta-button', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.8
      });

      // Enhanced scroll indicator animation
      gsap.from('.scroll-indicator', {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power2.out'
      });

      // Enhanced floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '30px',
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isContentVisible, isVideoLoaded]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        gsap.to(cursor, {
          scale: 2,
          opacity: 0.5,
          duration: 0.3
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Create sparkles
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'absolute w-1 h-1 bg-accent rounded-full';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparklesRef.current?.appendChild(sparkle);

      gsap.to(sparkle, {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        opacity: 'random(0.2, 0.8)',
        scale: 'random(0.5, 1.5)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        onComplete: () => sparkle.remove()
      });
    };

    const sparkleInterval = setInterval(createSparkle, 200);
    return () => clearInterval(sparkleInterval);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ opacity }}
    >
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Background with video */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 parallax-bg"
          style={{ scale, y, rotate }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={handleVideoLoad}
          >
            <source
              src="https://videos.pexels.com/video-files/13038198/13038198-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Enhanced gradient overlay */}
        <motion.div
          className="absolute inset-0 gradient-overlay bg-gradient-to-b from-background/90 via-background/70 to-background/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Enhanced animated background elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
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
        </motion.div>

        {/* Sparkles container */}
        <div
          ref={sparklesRef}
          className="absolute inset-0 overflow-hidden"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={textRef}
          className="text-center max-w-4xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Creating Unforgettable Moments
          </h1>
          <p className="tagline text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8">
            Where Dreams Transform into Reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="cta-button bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="cta-button bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-6 h-6 text-foreground/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
