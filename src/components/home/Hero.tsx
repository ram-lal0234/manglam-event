"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Enhanced mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Show content after a short delay to ensure smooth transition from preloader
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isContentVisible) return;

    const ctx = gsap.context(() => {
      // Enhanced split text animation with typewriter effect
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

        // Typewriter effect with enhanced animations
        gsap.from(textContainer.children, {
          opacity: 0,
          rotateY: 90,
          y: 50,
          scale: 0.5,
          duration: 1.2,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });

        // Add glow effect on completion
        gsap.to(textContainer.children, {
          textShadow: "0 0 20px rgba(215, 38, 56, 0.5)",
          duration: 0.5,
          delay: 1.5,
          yoyo: true,
          repeat: 1,
        });
      }

      // Enhanced video animation with 3D effect
      if (videoRef.current) {
        gsap.from(videoRef.current, {
          opacity: 0,
          scale: 1.1,
          rotationX: 5,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      }

      // Enhanced gradient overlay animation
      gsap.from(".gradient-overlay", {
        y: -100,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Enhanced tagline animation with wave effect
      gsap.from(".tagline", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Enhanced scroll indicator with bounce
      gsap.from(".scroll-indicator", {
        y: -30,
        opacity: 0,
        duration: 1.2,
        delay: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Enhanced floating animation for decorative elements
      gsap.to(".floating-element", {
        y: "25px",
        rotation: 5,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isContentVisible]);

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to -1 to 1
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Enhanced sparkle generation
  const generateSparkles = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/60 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          y: [0, -100],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeOut",
        }}
      />
    ));
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced background with 3D parallax */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 parallax-bg"
          style={{ 
            scale, 
            y,
            rotateX: useTransform(mouseYSpring, [-20, 20], [2, -2]),
            rotateY: useTransform(mouseXSpring, [-20, 20], [-2, 2]),
          }}
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
              src="https://wjbc2q51yihequgs.public.blob.vercel-storage.com/WEBSITE%20VDO-wu0559IOpeKQDBL8Hfe5qU4zIMVMJa.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Enhanced gradient overlay with mouse interaction */}
        <motion.div
          className="absolute inset-0 gradient-overlay bg-gradient-to-b from-black/80 via-black/60 to-black/80"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Enhanced grain overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-50" />
        </div>

        {/* Enhanced sparkles container */}
        <div ref={sparklesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
          {generateSparkles()}
        </div>
      </div>

      {/* Enhanced content with 3D effects */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Company name with enhanced 3D parallax */}
        <motion.div
          ref={textRef}
          className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-light to-white drop-shadow-lg"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
          }}
        />

        {/* Enhanced tagline with wave animation */}
        <motion.p
          className="tagline text-2xl md:text-3xl mb-12 text-white/90 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
          }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Creating Unforgettable Moments
          </motion.span>
        </motion.p>

        {/* Enhanced scroll indicator with interactive glow */}
        <motion.div
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))" }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced floating decorative elements */}
      <motion.div
        className="floating-element absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full blur-sm"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
      />
      <motion.div
        className="floating-element absolute top-40 right-32 w-2 h-2 bg-accent/30 rounded-full"
        style={{
          x: useTransform(mouseXSpring, [0, 20], [0, -10]),
          y: useTransform(mouseYSpring, [0, 20], [0, -10]),
        }}
      />
      <motion.div
        className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-primary/20 rounded-full blur-sm"
        style={{
          x: useTransform(mouseXSpring, [0, 20], [0, 15]),
          y: useTransform(mouseYSpring, [0, 20], [0, 15]),
        }}
      />
    </motion.section>
  );
};

export default Hero;