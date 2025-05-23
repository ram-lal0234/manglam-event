"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Destination Weddings",
    description: "At Manglam Event, destination weddings aren't just events — they're stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    icon: "✈️"
  },
  {
    id: 2,
    title: "Wedding Planning",
    description: "Every love story is unique, and so is the way we bring it to life. At Manglam Event, we turn dreams into celebrations, weaving magic into every detail. From the first petal to the final toast, we plan with heart, creating weddings that feel as timeless as your love.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    icon: "💍"
  },
  {
    id: 3,
    title: "Venue Selection",
    description: "The perfect moment begins with the perfect place. At Manglam Event, we don't just find venues — we discover backdrops for your story. Whether it's under open skies or within royal walls, we match your dreams with spaces that speak your love language.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    icon: "🏰"
  }
];

const FeaturedServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced title animation with split text
      const title = titleRef.current?.querySelector('.section-title');
      if (title) {
        const words = title.textContent?.split(' ') || [];
        title.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ');
        
        gsap.from(title.children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
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
      }

      // Floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '20px',
        duration: 2,
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
      className="py-32 bg-gradient-to-b from-secondary via-secondary/95 to-secondary relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating-element absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
        <motion.div
          className="floating-element absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full"
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
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            className="section-title text-4xl font-bold text-accent-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-light via-accent to-accent-light"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-accent max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how we can make your special day truly extraordinary
          </motion.p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          freeMode={{
            enabled: true,
            momentum: true,
          }}
          className="featured-services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-semibold text-accent-light mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-accent/80 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <a
                      href="/services"
                      className="inline-flex items-center text-accent-light hover:text-accent transition-colors duration-300"
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .featured-services-swiper {
          padding: 2rem 0;
        }
        .featured-services-swiper .swiper-pagination-bullet {
          background: var(--accent);
          opacity: 0.5;
        }
        .featured-services-swiper .swiper-pagination-bullet-active {
          background: var(--accent-light);
          opacity: 1;
        }
        .featured-services-swiper .swiper-button-next,
        .featured-services-swiper .swiper-button-prev {
          color: var(--accent-light);
        }
        .featured-services-swiper .swiper-button-next:hover,
        .featured-services-swiper .swiper-button-prev:hover {
          color: var(--accent);
        }
      `}</style>
    </motion.section>
  );
};

export default FeaturedServices;
