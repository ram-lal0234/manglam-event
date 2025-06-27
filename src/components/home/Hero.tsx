'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  useEffect(() => {
    // Wait for preloader to complete and then show content
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 1000); // Increased delay to ensure preloader is complete

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isContentVisible) return;

    const ctx = gsap.context(() => {
      // Enhanced text animation with better timing
      const companyName = 'Manglam Event';
      const chars = companyName.split('');
      const textContainer = textRef.current;

      if (textContainer) {
        textContainer.innerHTML = '';
        chars.forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.className = 'inline-block opacity-0';
          textContainer.appendChild(span);
        });

        gsap.fromTo(textContainer.children, 
          {
            opacity: 0,
            rotateY: 90,
            y: 50,
          },
          {
            opacity: 1,
            rotateY: 0,
            y: 0,
            duration: 1.5,
            stagger: 0.08,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom center',
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );
      }

      // Enhanced video animation with better timing
      if (videoRef.current) {
        gsap.fromTo(videoRef.current, 
          {
            opacity: 0,
            scale: 1.1,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 2.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom center',
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );
      }

      // Enhanced gradient overlay animation
      gsap.fromTo('.gradient-overlay', 
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );

      // Enhanced tagline animation
      gsap.fromTo('.tagline', 
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );

      // Enhanced CTA buttons animation
      gsap.fromTo('.cta-button', 
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: 'back.out(1.7)',
          delay: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );

      // Enhanced scroll indicator animation
      gsap.fromTo('.scroll-indicator', 
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );

      // Enhanced floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '15px',
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          amount: 1,
          ease: "power2.out"
        }
      });

      // Set hero as ready after animations
      setTimeout(() => {
        setIsHeroReady(true);
      }, 2000);

    }, sectionRef);

    return () => ctx.revert();
  }, [isContentVisible]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !isHeroReady) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        gsap.to(cursor, {
          scale: 2,
          opacity: 0.5,
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
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
  }, [isHeroReady]);

  return (
    <AnimatePresence>
      {isContentVisible && (
        <motion.section
          ref={sectionRef}
          className="relative h-screen w-full overflow-hidden"
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Custom cursor */}
          <motion.div
            ref={cursorRef}
            className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{ transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHeroReady ? 1 : 0, scale: isHeroReady ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          />

          {/* Background with video */}
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
                onLoadedData={handleVideoLoad}
              >
                <source
                  src="https://videos.pexels.com/video-files/13038198/13038198-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            </motion.div>

            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 gradient-overlay bg-gradient-to-b from-black/80 via-black/60 to-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />

            {/* Grain overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-50" />
            </div>

            {/* Sparkles container */}
            <div ref={sparklesRef} className="absolute inset-0 overflow-hidden" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            {/* Company name with split animation */}
            <div
              ref={textRef}
              className="heading-elegant-large mb-8 text-elegant-gradient drop-shadow-lg hover:glow"
            />

            {/* Tagline */}
            <motion.p
              className="tagline heading-elegant-medium mb-12 text-white/90 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              Creating Unforgettable Moments
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="cta-button px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-medium hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="cta-button px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Hero;
