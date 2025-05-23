"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ServicesHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation
      const title = textRef.current?.querySelector(".section-title");
      if (title) {
        const split = new SplitText(title, { type: "chars,words" });
        gsap.from(split.chars, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: {
            amount: 1.2,
            ease: "power2.out",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Background video fade in with enhanced parallax
      gsap.from(bgRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Enhanced gradient overlay slide in
      gsap.from(overlayRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Create enhanced sparkles
      const createSparkle = () => {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";
        sparklesRef.current?.appendChild(sparkle);

        gsap.to(sparkle, {
          opacity: 0,
          scale: 0,
          duration: 1 + Math.random(),
          ease: "power2.out",
          onComplete: () => {
            sparkle.remove();
          },
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
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        clearInterval(sparkleInterval);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background"
      style={{ opacity }}
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        <motion.div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop)",
            scale,
            y,
          }}
        />
        <motion.div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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

      <div
        ref={textRef}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 py-32"
      >
        <motion.div
          className="inline-block mb-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <span className="text-7xl">✨</span>
        </motion.div>
        <motion.h1
          className="section-title text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl max-w-4xl leading-relaxed text-foreground/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive event planning and management services tailored to make
          your special occasions truly memorable.
        </motion.p>
      </div>

      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-50 mix-blend-difference"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <style jsx global>{`
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          border-radius: 50%;
          pointer-events: none;
          filter: blur(1px);
        }
        .parallax-bg {
          transform-origin: center center;
          will-change: transform;
        }
      `}</style>
    </motion.section>
  );
};

export default ServicesHero;
