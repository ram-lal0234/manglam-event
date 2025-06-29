"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaStar, FaUsers, FaCalendarAlt, FaSeedling, FaGem } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paragraphs with permanent visibility
      gsap.from(".story-paragraph", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none none", // Changed to prevent reverse
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 1 }} // Changed from 0 to 1
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Clean Background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Minimal floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full floating" />
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full floating-delayed" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary-light/30 rounded-full rotate-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary/50 rounded-full floating" />

      {/* Clean lines */}
      <div className="absolute top-40 right-40 w-16 h-16 border border-primary/20 rotate-45 animated" />
      <div className="absolute bottom-40 left-40 w-12 h-12 border border-primary/15 rotate-45 animated-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 50
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Clean badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 border border-primary/30 rounded-full text-sm"
            initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 20
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
            initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 30
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
          initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 20
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Story Section 1 - Naveen's Legacy */}
          <motion.div
            className="story-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 1, x: 0 }} // Changed from opacity: 0, x: -50
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Clean image placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 1, scale: 1 }} // Changed from opacity: 0, scale: 0.8
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 border border-primary/20 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center border-2 border-primary/30 bg-primary/5">
                    <FaUsers className="w-16 h-16 text-primary" />
                  </div>
                </div>
                
                {/* Minimal floating elements */}
                <div className="absolute -top-2 -right-2 w-3 h-3 border border-primary/40 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/30 rounded-full" />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/30 bg-primary/5">
                  <FaUsers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-great-vibes text-gradient-primary">
                  Naveen's Legacy
                </h3>
              </div>
              
              <div className="text-xl space-y-4 text-muted-foreground font-cormorant leading-relaxed">
                <p>
                  With over <span className="text-primary font-medium">15 years</span> of experience in the wedding industry, 
                  Naveen has witnessed the evolution of celebrations from simple gatherings to grand spectacles. 
                  His journey began with a simple belief: every couple deserves their perfect day.
                </p>
                <p>
                  From intimate ceremonies to destination weddings, Naveen's expertise spans across 
                  <span className="text-primary font-medium"> 500+ successful events</span>, each one unique and memorable. 
                  His attention to detail and passion for perfection has made him a trusted name in the industry.
                </p>
              </div>

              {/* Clean stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div
                  className="text-center p-4 border border-primary/20 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-primary font-great-vibes">500+</div>
                  <div className="text-sm text-muted-foreground">Events</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 border border-primary/20 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-primary font-great-vibes">15+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Story Section 2 - The Partnership */}
          <motion.div
            className="story-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 1, x: 0 }} // Changed from opacity: 0, x: 50
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/30 bg-primary/5">
                  <FaHeart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-great-vibes text-gradient-primary">
                  The Perfect Partnership
                </h3>
              </div>
              
              <div className="text-xl space-y-4 text-muted-foreground font-cormorant leading-relaxed">
                <p>
                  When Naveen met his partner, it wasn't just a business decision—it was a meeting of 
                  <span className="text-primary font-medium"> kindred spirits</span>. Both shared the same vision: 
                  to create not just events, but experiences that would be remembered for a lifetime.
                </p>
                <p>
                  Their partnership brought together complementary skills: Naveen's industry expertise 
                  and his partner's innovative approach to design and technology. Together, they formed 
                  <span className="text-primary font-medium"> Manglam Event</span>—a name that reflects their commitment 
                  to creating auspicious and beautiful moments.
                </p>
              </div>

              {/* Clean features */}
              <div className="space-y-3 pt-6">
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaStar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Innovative Design Approach</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaStar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Technology Integration</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaStar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Personalized Experiences</span>
                </motion.div>
              </div>
            </div>

            {/* Clean image placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 1, scale: 1 }} // Changed from opacity: 0, scale: 0.8
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 border border-primary/20 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center border-2 border-primary/30 bg-primary/5">
                    <FaHeart className="w-16 h-16 text-primary" />
                  </div>
                </div>
                
                {/* Minimal floating elements */}
                <div className="absolute -top-2 -left-2 w-3 h-3 border border-primary/40 rounded-full" />
                <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-primary/30 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Story Section 3 - The Name */}
          <motion.div
            className="story-paragraph text-center max-w-4xl mx-auto"
            initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 50
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/30 bg-primary/5">
                  <FaCalendarAlt className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-great-vibes text-gradient-primary">
                  Why "Manglam"?
                </h3>
              </div>
              
              <div className="text-xl space-y-4 text-muted-foreground font-cormorant leading-relaxed">
                <p className="text-lg">
                  The name <span className="text-primary font-medium">"Manglam"</span> holds deep significance. 
                  Derived from Sanskrit, it means <span className="text-primary font-medium">"auspicious"</span> or 
                  <span className="text-primary font-medium"> "blessed"</span>—perfectly capturing the essence of what we create.
                </p>
                <p>
                  Every event we plan is infused with this spirit of auspiciousness. We believe that 
                  celebrations should not just be beautiful, but should bring positive energy and 
                  blessings to everyone involved.
                </p>
              </div>

              {/* Clean highlight box */}
              <motion.div
                className="p-8 border border-primary/20 rounded-lg bg-primary/5 mt-8"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold font-great-vibes text-primary mb-4">
                  Our Promise
                </h4>
                <p className="text-xl text-muted-foreground font-cormorant">
                  To create not just events, but <span className="text-primary font-medium">mangalmay</span> moments 
                  that bring joy, positivity, and blessings to every celebration.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurStory;
