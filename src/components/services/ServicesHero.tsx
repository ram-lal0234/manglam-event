"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitText } from "gsap/SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Service videos from the services list
const serviceVideos = [
  "/images/services/Sangeet Making.MP4",
  "/images/services/Pooja Vedant - 3.mp4",
  "/images/services/Haldi Entry - Amritam.MP4",
  "/images/services/Jaisalmer Rangmahal.mp4",
  "/images/services/Carnival - Dior Decor.MP4",
];

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

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced text animation with smoother timing
      const title = textRef.current?.querySelector(".section-title");
      if (title) {
        const split = new SplitText(title, { type: "chars,words" });
        gsap.from(split.chars, {
          opacity: 0,
          y: 30,
          duration: 1.2,
          stagger: {
            amount: 1.5,
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

      // Enhanced background video fade in with better parallax
      gsap.from(bgRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 2.5,
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
        y: 50,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Create enhanced sparkles with better performance
      const createSparkle = () => {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";
        sparklesRef.current?.appendChild(sparkle);

        gsap.to(sparkle, {
          opacity: 0,
          scale: 0,
          duration: 1.5 + Math.random(),
          ease: "power2.out",
          onComplete: () => {
            sparkle.remove();
          },
        });
      };

      // Create sparkles at intervals
      const sparkleInterval = setInterval(createSparkle, 300);

      // Enhanced custom cursor effect
      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.8,
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
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background"
      style={{ opacity }}
    >
      {/* Enhanced Background with Video Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          effect="fade"
          modules={[EffectFade, Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {serviceVideos.map((src, idx) => (
            <SwiperSlide key={idx} className="h-full w-full">
              <motion.video
                key={src}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ filter: "brightness(0.6) blur(0.5px)" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Enhanced Animated Particles */}
        <div ref={sparklesRef} className="absolute inset-0 pointer-events-none z-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <motion.div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"
        style={{ y }}
      />

      {/* Hero Content */}
      <div
        ref={textRef}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 py-16 z-30"
      >
        <motion.div
          className="inline-block mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <span className="text-6xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">✨</span>
        </motion.div>
        
        <motion.h1
          className="section-title heading-elegant-large mb-6 text-elegant-gradient drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)] tracking-tight leading-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Celebrate Life's Grandest Moments
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/95 font-medium drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] bg-black/40 rounded-xl px-8 py-4 backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          Experience unforgettable events with Manglam Event. From breathtaking weddings to spectacular corporate galas, our team crafts every detail with passion, creativity, and precision. Let us turn your dreams into cherished memories.
        </motion.p>
      </div>

      {/* Enhanced Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-10 h-10 rounded-full border-2 border-accent/60 pointer-events-none z-50 mix-blend-difference backdrop-blur-sm"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Enhanced Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-accent/30 via-accent/10 to-transparent z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      <style jsx global>{`
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.9) 0%,
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
