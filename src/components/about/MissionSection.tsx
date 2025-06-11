'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paragraphs
      gsap.from(".mission-paragraph", {
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
            repeatType: 'reverse',
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
            repeatType: 'reverse',
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
            Our Vision
          </motion.h2>
        </motion.div>

        <motion.div
          className="prose prose-lg md:prose-xl mx-auto text-foreground/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mission-paragraph text-lg md:text-xl leading-relaxed tracking-wide font-roboto font-light">
            The word Manglam signifies purity and auspiciousness. We chose this name for our company because, for us, being a part of someone's precious moments and special day is an absolute honor. From our name to the work we do, we aim to make everything truly mangalmay—filled with positivity, joy, and heartfelt effort.
          </p>
          <p className="mission-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-light">
            At the heart of every wedding lies a beautiful promise—a lifetime bond not just between two people, but between two families. At Manglam Event, we understand the depth of that connection, and we're here to transform your wedding into a luxurious, personal, and unforgettable celebration.
          </p>
          <p className="mission-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-light">
            We believe your wedding day should be about soaking in every brilliant moment—laughing with your friends, talking with your family, and feeling every emotion as it unfolds. That's why we work quietly behind the scenes, handling every detail with care and precision, so you can be completely present.
          </p>
          <p className="mission-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-light">
            Every celebration we plan is handcrafted and tailored entirely to your needs. From intimate gatherings to grand affairs, we pour our passion, commitment, and signature attention to detail into bringing your dream to life. Whether it's a dreamy destination or your own backyard, we create visual experiences and designer touches that reflect your unique vibe.
          </p>
          <p className="mission-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-light">
            Our young, vibrant team of designers works closely with local artists and craftsmen to custom-design every element of your functions. We're not just planners—we're storytellers, curators, and creators of endless memories. With us, you get more than just an event; you get a seamless experience. We assist you at every step of the planning process, connect you with the best service providers, and even offer thoughtful gift solutions. Our hospitality is personified from the very first hello to the final goodbye.
          </p>
          <p className="mission-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-light">
            Because we love what we do, and it shows in every detail. From concept to celebration, we're here to make your wedding less about the hassle and more about the joy—so two families can come together, and a lifetime of memories can begin.
          </p>
          <p className="mission-paragraph text-lg md:text-xl leading-relaxed mt-8 tracking-wide font-roboto font-medium">
            Let's bring your dreamland to life.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionSection; 