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
import { FaVolumeMute, FaVolumeUp, FaPlay, FaCalendarAlt, FaStar } from "react-icons/fa";
import EnhancedButton from "@/components/common/EnhancedButton";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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
    if (!isContentVisible) return;

    const ctx = gsap.context(() => {
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
          duration: 1.2,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      }

      // Video animation
      if (videoRef.current) {
        gsap.from(videoRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 2,
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

      // Gradient overlay animation
      gsap.from(".gradient-overlay", {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Tagline animation
      gsap.from(".tagline", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // CTA buttons animation
      gsap.from(".cta-button", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      // Scroll indicator animation
      gsap.from(".scroll-indicator", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
        },
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
  }, [isContentVisible]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

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
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={handleVideoLoad}
          >
            <source
              src="https://wjbc2q51yihequgs.public.blob.vercel-storage.com/website%20video1-mJ2FDBUvWVhns3IoqCKdjOOs6wRUBV.mp4"
              type="video/mp4"
            />
          </video>

          {/* Mute/Unmute Button */}
          <motion.button
            onClick={toggleMute}
            className="fixed bottom-8 right-8 z-[100] p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/40 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ pointerEvents: 'auto' }}
          >
            {isMuted ? (
              <FaVolumeMute className="w-6 h-6 text-white" />
            ) : (
              <FaVolumeUp className="w-6 h-6 text-white" />
            )}
          </motion.button>
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
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-6xl mx-auto">
        {/* Event Stats Bar */}
        <motion.div
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex justify-center space-x-8 md:space-x-16">
            {[
              { icon: FaStar, number: "500+", label: "Events Created" },
              { icon: FaCalendarAlt, number: "15+", label: "Years Experience" },
              { icon: FaPlay, number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                  whileHover={{ 
                    backgroundColor: "rgba(215, 38, 56, 0.2)",
                    borderColor: "rgba(215, 38, 56, 0.5)"
                  }}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div
                  className="text-xl md:text-2xl font-bold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company name with split animation */}
        <motion.div
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-light to-white drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255,255,255,0.3))"
          }}
        />

        {/* Enhanced Tagline */}
        <motion.div
          className="mb-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="tagline text-2xl md:text-4xl lg:text-5xl text-white/95 font-light tracking-wide leading-tight"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 10px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Creating Unforgettable Moments
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            From intimate celebrations to grand corporate events, we craft experiences that linger in hearts and memories forever.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="cta-button"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <EnhancedButton
              variant="primary"
              size="lg"
              glow={true}
              ripple={true}
              magnetic={true}
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary via-primary to-primary/90 shadow-2xl"
            >
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="w-5 h-5" />
                <span>Plan Your Event</span>
              </div>
            </EnhancedButton>
          </motion.div>

          <motion.div
            className="cta-button"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <EnhancedButton
              variant="outline"
              size="lg"
              glow={false}
              ripple={true}
              className="px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
            >
              <div className="flex items-center space-x-3">
                <FaPlay className="w-4 h-4" />
                <span>View Portfolio</span>
              </div>
            </EnhancedButton>
          </motion.div>
        </motion.div>

        {/* Floating Event Types */}
        <motion.div
          className="absolute bottom-40 left-1/2 transform -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex space-x-6">
            {["Weddings", "Corporate", "Birthdays", "Anniversaries"].map((type, index) => (
              <motion.div
                key={type}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(215, 38, 56, 0.2)",
                  borderColor: "rgba(215, 38, 56, 0.5)"
                }}
              >
                {type}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
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
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
