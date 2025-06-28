"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBook, FaHeart, FaStar, FaUsers, FaMagic } from "react-icons/fa";
import EnhancedCard from "@/components/common/EnhancedCard";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced paragraph animations
      gsap.from(".story-paragraph", {
        opacity: 0,
        y: 60,
        duration: 1.5,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=150",
          toggleActions: "play none none reverse",
        },
      });

      // Floating animation for decorative elements
      gsap.to('.story-float', {
        y: '15px',
        duration: 3,
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
      className="py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simplified Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-slate-900/20" />
        
        {/* Selective Floating Icons - Reduced for performance */}
        {[FaBook, FaHeart, FaMagic].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-slate-600/30"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FaBook className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-luxury mb-8 tracking-tight text-slate-800 dark:text-slate-100"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Story
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-poppins font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A journey of passion, creativity, and the pursuit of perfection
          </motion.p>
        </motion.div>

        {/* Enhanced Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Story Cards */}
          <div className="lg:col-span-12 space-y-8">
            {[
              {
                icon: FaUsers,
                title: "Legacy & Innovation",
                content: "Rooted in a family legacy of decor and production, Mr Naveen Rajpurohit proudly represents the third generation of a passionate lineage in the creative decor industry. With a background steeped in tradition, Naveen has always stood out for his drive to innovate, his visionary approach, and his passion for doing things differently. While working in the wedding industry, he developed a deep curiosity about the behind-the-scenes aspects of planning and execution—observing patterns, identifying challenges, and seeking ways to elevate the entire experience. This curiosity sparked a desire to push boundaries and reimagine what weddings could be."
              },
              {
                icon: FaHeart,
                title: "Fateful Meeting",
                content: "During one such event, he crossed paths with Mansi Maheshwari and Aakash Maheshwari—two dynamic individuals managing a wedding segment with remarkable precision and creativity. Their creativity and precision left a lasting impression on Naveen. Intrigued by their work, he initiated a conversation, and soon, the three decided to spend more time together to exchange ideas and understand each other's visions. This led to a memorable trip to Mumbai in May 2022. During this journey, on the 23rd of May 2022, a simple conversation between three sparked a powerful idea—Naveen who had already envisioned the brand, shared his vision of starting an event company, and both Mansi and Aakash immediately resonated with the concept."
              },
              {
                icon: FaMagic,
                title: "The Beginning",
                content: "Fueled by a shared dream, passion, unshakable faith in one another, and a belief in building something extraordinary together, they decided to embark on this journey together. Fate played its part when, during this journey Naveen received a call from Mr. Manak Khanna, inviting him to discuss a wedding project in Kumbhalgarh- marking the first step in bringing their vision to life and the beginning of a journey fueled by creativity, trust, and a collective dream to redefine celebrations."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-all duration-300">
                        <story.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-grow">
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-luxury text-slate-800 dark:text-slate-100 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      >
                        {story.title}
                      </motion.h3>
                      
                      <motion.p
                        className="story-paragraph text-lg md:text-xl text-elegant leading-relaxed text-slate-600 dark:text-slate-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        {story.content}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;
