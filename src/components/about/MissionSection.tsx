'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaEye, FaHeart, FaStar, FaGem, FaCrown, FaMagic, FaInfinity } from 'react-icons/fa';
import EnhancedCard from "@/components/common/EnhancedCard";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
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
      gsap.from(".mission-paragraph", {
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
      gsap.to('.mission-float', {
        y: '20px',
        duration: 4,
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
      className="py-32 bg-gradient-to-b from-accent/5 via-background to-primary/5 relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simplified Static Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-slate-700/10 to-slate-800/20" />
        
        {/* Minimal Floating Icons */}
        {[FaEye, FaHeart, FaStar].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-slate-600/30"
            style={{
              left: `${25 + i * 25}%`,
              top: `${15 + i * 25}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-6 h-6" />
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
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FaEye className="w-10 h-10 text-accent" />
          </motion.div>

          <motion.h2 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-luxury mb-8 tracking-tight bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              backgroundSize: "200% auto",
              animation: "gradient-x 4s ease infinite",
            }}
          >
            Our Vision
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-poppins font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Creating mangalmay moments filled with positivity, joy, and heartfelt effort
          </motion.p>
        </motion.div>

        {/* Enhanced Mission Content */}
        <div className="space-y-12">
          {[
            {
              icon: FaHeart,
              title: "Manglam - Purity & Auspiciousness",
              content: "The word Manglam signifies purity and auspiciousness. We chose this name for our company because, for us, being a part of someone's precious moments and special day is an absolute honor. From our name to the work we do, we aim to make everything truly mangalmay—filled with positivity, joy, and heartfelt effort."
            },
            {
              icon: FaGem,
              title: "Beautiful Promises",
              content: "At the heart of every wedding lies a beautiful promise—a lifetime bond not just between two people, but between two families. At Manglam Event, we understand the depth of that connection, and we're here to transform your wedding into a luxurious, personal, and unforgettable celebration."
            },
            {
              icon: FaStar,
              title: "Present in Every Moment",
              content: "We believe your wedding day should be about soaking in every brilliant moment—laughing with your friends, talking with your family, and feeling every emotion as it unfolds. That's why we work quietly behind the scenes, handling every detail with care and precision, so you can be completely present."
            },
            {
              icon: FaCrown,
              title: "Handcrafted Celebrations",
              content: "Every celebration we plan is handcrafted and tailored entirely to your needs. From intimate gatherings to grand affairs, we pour our passion, commitment, and signature attention to detail into bringing your dream to life. Whether it's a dreamy destination or your own backyard, we create visual experiences and designer touches that reflect your unique vibe."
            },
            {
              icon: FaMagic,
              title: "Storytellers & Creators",
              content: "Our young, vibrant team of designers works closely with local artists and craftsmen to custom-design every element of your functions. We're not just planners—we're storytellers, curators, and creators of endless memories. With us, you get more than just an event; you get a seamless experience. We assist you at every step of the planning process, connect you with the best service providers, and even offer thoughtful gift solutions. Our hospitality is personified from the very first hello to the final goodbye."
            },
            {
              icon: FaInfinity,
              title: "Love What We Do",
              content: "Because we love what we do, and it shows in every detail. From concept to celebration, we're here to make your wedding less about the hassle and more about the joy—so two families can come together, and a lifetime of memories can begin."
            }
          ].map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="w-full"
            >
              <EnhancedCard
                className="bg-white/80 backdrop-blur-md border border-accent/10 p-8 md:p-12 group"
                hover3D={true}
                glow={true}
                magnetic={true}
              >
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                      <mission.icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-luxury text-accent mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      {mission.title}
                    </motion.h3>
                    
                    <motion.p
                      className="mission-paragraph text-lg md:text-xl text-elegant leading-relaxed text-foreground/80"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    >
                      {mission.content}
                    </motion.p>
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>
          ))}

          {/* Final Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center pt-12"
          >
            <EnhancedCard
              className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-md border border-gradient-to-r from-primary/20 to-accent/20 p-12"
              hover3D={true}
              glow={true}
              magnetic={true}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-luxury text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                  animation: "gradient-x 3s ease infinite",
                }}
              >
                Let's bring your dreamland to life.
              </motion.p>
            </EnhancedCard>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection; 