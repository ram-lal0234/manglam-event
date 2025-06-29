"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaStar, FaUsers, FaCalendarAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paragraphs
      gsap.from(".story-paragraph", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="storyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.05)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.02)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.07)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#storyGradient)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Floating Flower Decorations */}
      <div className="absolute top-20 left-20 flower-decoration floating">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-20 flower-decoration floating-delayed">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
              border: "1px solid rgba(215, 38, 56, 0.2)",
              backdropFilter: "blur(10px)"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaHeart className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">Our Journey</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-primary font-playfair">
                The Story
              </span>
              <br />
              <span className="text-foreground font-playfair">
                Behind Manglam
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-3xl mx-auto">
              A tale of passion, innovation, and the perfect partnership that brought 
              <span className="text-primary font-medium"> dreams to life</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Story Content */}
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Story Section 1 - Naveen's Legacy */}
          <motion.div
            className="story-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaHeart className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaStar className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">Family Legacy</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                Rooted in a family legacy of decor and production, Mr Naveen Rajpurohit proudly represents the third generation of a passionate lineage in the creative decor industry. With a background steeped in tradition, Naveen has always stood out for his drive to innovate, his visionary approach, and his passion for doing things differently.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                While working in the wedding industry, he developed a deep curiosity about the behind-the-scenes aspects of planning and execution—observing patterns, identifying challenges, and seeking ways to elevate the entire experience. This curiosity sparked a desire to push boundaries and reimagine what weddings could be.
              </p>
            </div>
          </motion.div>

          {/* Story Section 2 - The Meeting */}
          <motion.div
            className="story-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="space-y-6 lg:order-1 order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">The Perfect Partnership</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                During one such event, he crossed paths with Mansi Maheshwari and Aakash Maheshwari—two dynamic individuals managing a wedding segment with remarkable precision and creativity. Their creativity and precision left a lasting impression on Naveen.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                Intrigued by their work, he initiated a conversation, and soon, the three decided to spend more time together to exchange ideas and understand each other's visions. This led to a memorable trip to Mumbai in May 2022.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className="relative lg:order-2 order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaUsers className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -top-4 -left-4"
                  animate={{ 
                    rotate: [0, -360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaStar className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Story Section 3 - The Beginning */}
          <motion.div
            className="story-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaCalendarAlt className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -bottom-4 -right-4"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaStar className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaCalendarAlt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">The Beginning</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                During this journey, on the 23rd of May 2022, a simple conversation between three sparked a powerful idea—Naveen who had already envisioned the brand, shared his vision of starting an event company, and both Mansi and Aakash immediately resonated with the concept.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                Fueled by a shared dream, passion, unshakable faith in one another, and a belief in building something extraordinary together, they decided to embark on this journey together. Fate played its part when, during this journey Naveen received a call from Mr. Manak Khanna, inviting him to discuss a wedding project in Kumbhalgarh- marking the first step in bringing their vision to life and the beginning of a journey fueled by creativity, trust, and a collective dream to redefine celebrations.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: FaHeart, value: "3", label: "Founders" },
            { icon: FaUsers, value: "15+", label: "Team Members" },
            { icon: FaStar, value: "500+", label: "Events" },
            { icon: FaCalendarAlt, value: "2022", label: "Founded" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                  border: "1px solid rgba(215, 38, 56, 0.2)"
                }}
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground font-playfair">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-cormorant">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurStory;
