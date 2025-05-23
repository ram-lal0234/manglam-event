'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with enhanced stagger
      gsap.from(titleRef.current?.children || [], {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: {
          amount: 1.2,
          ease: "power2.out"
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Enhanced parallax effect for background elements
      gsap.to('.parallax-bg', {
        yPercent: 30,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '20px',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      // Scroll-based carousel animation
      if (swiperRef.current?.swiper) {
        const swiper = swiperRef.current.swiper;
        
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const totalSlides = swiper.slides.length;
            const targetSlide = Math.floor(progress * totalSlides);
            
            if (targetSlide !== swiper.activeIndex) {
              swiper.slideTo(targetSlide, 1000);
            }
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const storySections = [
    {
      title: "Our Legacy",
      content: "Manglam Event is not just a name; it's a legacy that began with a simple yet powerful dream. Founded by Naveen Rajpurohit, our journey is a testament to the power of passion, dedication, and the desire to create something extraordinary.",
      year: "2008",
      icon: "🏆"
    },
    {
      title: "The Beginning",
      content: "In 2008, Naveen Rajpurohit, a young entrepreneur with a vision, took the first step towards creating what would become one of the most trusted names in event management. With a background in business and a passion for creating memorable experiences, Naveen saw an opportunity to transform the way events were planned and executed.",
      year: "2009",
      icon: "✨"
    },
    {
      title: "The Meeting",
      content: "The turning point came when Naveen met Mansi, a creative soul with an eye for detail and a heart full of ideas. Their meeting was not just a coincidence; it was the beginning of a partnership that would change the landscape of event management in India.",
      year: "2010",
      icon: "🤝"
    },
    {
      title: "The Birth of Manglam Event",
      content: "Together, Naveen and Mansi founded Manglam Event, combining their unique strengths to create a company that would go beyond traditional event management. Their vision was clear: to create events that were not just gatherings but experiences that would be remembered for a lifetime.",
      year: "2011",
      icon: "🎉"
    },
    {
      title: "The First Step",
      content: "The journey began with a single event, a small gathering that would set the tone for everything that followed. With meticulous planning, attention to detail, and a commitment to excellence, Manglam Event quickly gained recognition for its innovative approach and exceptional service.",
      year: "2012",
      icon: "🚀"
    },
    {
      title: "The Meaning Behind Our Name",
      content: "'Manglam' is derived from the Sanskrit word 'Mangal,' which means auspicious and prosperous. This name reflects our commitment to bringing positivity, joy, and success to every event we manage. It's a promise to our clients that their special moments will be handled with care, creativity, and a touch of magic.",
      year: "Present",
      icon: "🌟"
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-gradient-modern relative overflow-hidden min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="parallax-bg absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent"
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
          className="parallax-bg floating-element absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
        <motion.div
          className="parallax-bg floating-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-light/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-5xl font-bold text-gradient mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground/80 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A story of passion, dedication, and excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storySections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-gradient-card backdrop-blur-sm rounded-lg p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
              >
                {section.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-semibold text-foreground mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              >
                {section.title}
              </motion.h3>
              <motion.p 
                className="text-primary mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                {section.year}
              </motion.p>
              <motion.p 
                className="text-foreground/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              >
                {section.content}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory; 