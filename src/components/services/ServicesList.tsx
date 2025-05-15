'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Destination Weddings",
    description: "At Manglam Event, destination weddings aren't just events — they're stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.",
    icon: "🌅"
  },
  {
    title: "Wedding Planning",
    description: "Every love story is unique, and so is the way we bring it to life. At Manglam Event, we turn dreams into celebrations, weaving magic into every detail. From the first petal to the final toast, we plan with heart, creating weddings that feel as timeless as your love.",
    icon: "💍"
  },
  {
    title: "Venue Selection",
    description: "The perfect moment begins with the perfect place. At Manglam Event, we don't just find venues — we discover backdrops for your story. Whether it's under open skies or within royal walls, we match your dreams with spaces that speak your love language.",
    icon: "🏰"
  },
  {
    title: "Wedding Decor",
    description: "Rooted in tradition, adorned with elegance — our décor tells your story through colors, culture, and craft. At Manglam Event, we blend timeless rituals with artistic flair, creating a setting where heritage meets heart, and every detail feels like home.",
    icon: "✨"
  },
  {
    title: "Wedding Entertainment",
    description: "Let the music rise and the moments sparkle — we curate joy that dances through your celebration. At Manglam Event, wedding entertainment is an experience, where beats meet traditions, and every performance adds magic to your memories.",
    icon: "🎵"
  },
  {
    title: "Bride Groom Entry",
    description: "Every love story deserves a grand beginning. At Manglam Event, we craft unforgettable bride and groom entries — moments where dreams walk in, hearts skip beats, and all eyes are on love making its way into forever.",
    icon: "👰"
  },
  {
    title: "Hospitality",
    description: "With warmth in every gesture and care in every detail, we treat your guests like family. At Manglam Event, hospitality goes beyond service — it's about creating personalized experiences, from the first welcome ritual to seamless guest management, ensuring that every moment feels like home.",
    icon: "🏠"
  },
  {
    title: "Wedding Photography & Videography",
    description: "Every glance, every laugh, every tear — we capture the moments that speak louder than words. At Manglam Event, our candid photography and cinematic videography weave your love story into timeless visuals, preserving every authentic moment and every cinematic frame, so your memories live on forever.",
    icon: "📸"
  },
  {
    title: "Wedding Choreography",
    description: "From the first step to the final twirl, we bring your dance dreams to life. At Manglam Event, our choreography blends grace and rhythm, crafting a performance that tells your story with every move — a magical dance that will be remembered long after the music fades.",
    icon: "💃"
  },
  {
    title: "Vendor Management",
    description: "Behind every flawless celebration is a team of trusted artisans. At Manglam Event, we handle every detail with precision, from selecting the finest vendors to ensuring seamless coordination. Our expert vendor management guarantees that each element of your event aligns perfectly, creating a harmonious experience that reflects your vision.",
    icon: "🤝"
  },
  {
    title: "Logistics",
    description: "In the dance of planning, every detail matters. At Manglam Event, we master the art of logistics, ensuring that every element of your celebration flows seamlessly. From the first moment to the last, our meticulous coordination guarantees that your event unfolds flawlessly, leaving you free to enjoy the magic of the moment.",
    icon: "📋"
  },
  {
    title: "Invitations & Gifting",
    description: "The first glimpse of your celebration, an invitation that speaks of elegance and warmth. At Manglam Event, we craft personalized invites and thoughtful gifts that set the tone for your special day. Every detail, from the paper to the gesture, is a reflection of your love, leaving a lasting impression before the celebration even begins.",
    icon: "🎁"
  },
  {
    title: "Ring Ceremony",
    description: "A moment where promises are made, and hearts are bound. At Manglam Event, we create a ring ceremony that reflects the depth of your love — a seamless blend of tradition and elegance, turning this simple exchange into an unforgettable celebration of commitment.",
    icon: "💎"
  },
  {
    title: "Birthdays",
    description: "Birthdays are more than just a date — they are a celebration of life, laughter, and love. At Manglam Event, we craft unforgettable birthday experiences, filled with joy, surprises, and memories that linger. From intimate gatherings to grand festivities, we make every year more special than the last.",
    icon: "🎂"
  },
  {
    title: "Corporate Events",
    description: "Corporate events are not just about business; they are about building connections, celebrating achievements, and inspiring teams. At Manglam Event, we craft seamless experiences that blend professionalism with creativity, ensuring every gathering leaves a lasting impression and every detail reflects your company's vision.",
    icon: "💼"
  },
  {
    title: "Printing & Stationery",
    description: "The finest details often lie in the smallest touches. At Manglam Event, we elevate your celebration with custom printing and stationery that reflect your unique style. From elegant invites to personalized keepsakes, every piece is crafted with care, setting the tone and adding a personal touch to your unforgettable day.",
    icon: "📝"
  }
];

const ServicesList = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const categories = [
    { id: 'all', name: 'All Services', icon: '✨' },
    { id: 'wedding', name: 'Wedding', icon: '💍' },
    { id: 'corporate', name: 'Corporate', icon: '💼' },
    { id: 'special', name: 'Special Events', icon: '🎉' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced title animation
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

      // Enhanced parallax effect
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

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-secondary via-accent/5 to-secondary relative overflow-hidden min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background Elements */}
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
          className="parallax-bg floating-element absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
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
          ref={titleRef}
          className="text-center mb-16"
          style={{ y, opacity, scale }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="text-6xl">✨</span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-accent-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-light via-white to-accent"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-accent max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our comprehensive range of services, crafted with passion and precision
            to make your special moments truly unforgettable.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-accent/10 text-accent hover:bg-accent/20'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            speed={1000}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true
            }}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.5,
              momentumVelocityRatio: 0.5,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, FreeMode]}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.title} className="w-[300px] sm:w-[400px] md:w-[500px]">
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-accent/5 backdrop-blur-sm shadow-lg h-full border border-accent/10 hover:border-accent/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  }}
                >
                  <div className="p-8">
                    <motion.div
                      className="text-4xl mb-4 inline-block"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-semibold text-accent-light mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-accent leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .services-swiper {
          padding: 50px 0;
          overflow: visible;
        }
        .services-swiper .swiper-slide {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.5;
          transform: scale(0.8) translateY(20px);
        }
        .services-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.1) translateY(0);
        }
        .services-swiper .swiper-pagination-bullet {
          background: var(--accent-light);
          opacity: 0.5;
          transition: all 0.3s;
          width: 8px;
          height: 8px;
        }
        .services-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--accent);
          transform: scale(1.2);
          width: 24px;
          border-radius: 4px;
        }
        .services-swiper .swiper-button-next,
        .services-swiper .swiper-button-prev {
          color: var(--accent-light);
          background: rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          transition: all 0.3s;
        }
        .services-swiper .swiper-button-next:after,
        .services-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
        .services-swiper .swiper-button-next:hover,
        .services-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
      `}</style>
    </motion.section>
  );
};

export default ServicesList; 