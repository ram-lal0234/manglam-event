"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

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
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

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

      // Split text animation
      const companyName = "Manglam Event";
      const chars = companyName.split("");
      const textContainer = textRef.current;
      if (textContainer) {
        textContainer.innerHTML = "";
        chars.forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.className = "inline-block";
          textContainer.appendChild(span);
        });

        gsap.from(textContainer.children, {
          opacity: 0,
          rotateY: 90,
          y: 50,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Video animation
      if (isVideoLoaded) {
        gsap.from(videoRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Gradient overlay animation
      gsap.from(".gradient-overlay", {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // Tagline animation
      gsap.from(".tagline", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      // CTA buttons animation
      gsap.from(".cta-button", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.8,
      });

      // Scroll indicator animation
      gsap.from(".scroll-indicator", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power2.out",
      });

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: "20px",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
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
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
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

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Create sparkles
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement("div");
      sparkle.className = "absolute w-1 h-1 bg-accent rounded-full";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparklesRef.current?.appendChild(sparkle);

      gsap.to(sparkle, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        opacity: "random(0.2, 0.8)",
        scale: "random(0.5, 1.5)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => sparkle.remove(),
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
        style={{ transform: "translate(-50%, -50%)" }}
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
          transition={{ duration: 1.5 }}
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
          className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-light to-white drop-shadow-lg hover:glow"
        />

        {/* Tagline */}
        <motion.p
          className="tagline text-2xl md:text-3xl mb-12 text-white/90 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Where Dreams Transform into Unforgettable Celebrations
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="/services"
            className="cta-button bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.a>
          <motion.a
            href="/contact"
            className="cta-button bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 border border-white/20 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
