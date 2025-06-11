"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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
      className="py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-7xl font-bold text-gradient mb-8 tracking-tight font-roboto"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h2>
        </motion.div>

        <motion.div
          className="prose prose-lg md:prose-xl mx-auto text-foreground/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="story-paragraph text-lg md:text-xl leading-relaxed tracking-wide font-roboto font-light">
            Rooted in a family legacy of decor and production, Mr Naveen Rajpurohit proudly represents the third generation of a passionate lineage in the creative decor industry. With a background steeped in tradition, Naveen has always stood out for his drive to innovate, his visionary approach, and his passion for doing things differently. While working in the wedding industry, he developed a deep curiosity about the behind-the-scenes aspects of planning and execution—observing patterns, identifying challenges, and seeking ways to elevate the entire experience. This curiosity sparked a desire to push boundaries and reimagine what weddings could be.
          </p>
          <p className="story-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-light">
            During one such event, he crossed paths with Mansi Maheshwari and Aakash Maheshwari—two dynamic individuals managing a wedding segment with remarkable precision and creativity. Their creativity and precision left a lasting impression on Naveen. Intrigued by their work, he initiated a conversation, and soon, the three decided to spend more time together to exchange ideas and understand each other's visions. This led to a memorable trip to Mumbai in May 2022. During this journey, on the 23rd of May 2022, a simple conversation between three sparked a powerful idea—Naveen who had already envisioned the brand, shared his vision of starting an event company, and both Mansi and Aakash immediately resonated with the concept.
          </p>
          <p className="story-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-light">
            Fueled by a shared dream, passion, unshakable faith in one another, and a belief in building something extraordinary together, they decided to embark on this journey together. Fate played its part when, during this journey Naveen received a call from Mr. Manak Khanna, inviting him to discuss a wedding project in Kumbhalgarh- marking the first step in bringing their vision to life and the beginning of a journey fueled by creativity, trust, and a collective dream to redefine celebrations.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurStory;
