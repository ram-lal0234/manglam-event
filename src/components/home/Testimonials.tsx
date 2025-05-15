'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Priya & Rahul',
    role: 'Newlyweds',
    content: 'Manglam Event turned our dream wedding into reality. Every detail was perfect, and the team\'s dedication was beyond our expectations. The memories they helped create will last a lifetime.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    date: 'March 2024'
  },
  {
    id: 2,
    name: 'Amit & Sneha',
    role: 'Corporate Event',
    content: 'Our company\'s annual event was a huge success thanks to Manglam Event. Their professionalism and attention to detail made everything seamless and memorable.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    date: 'February 2024'
  },
  {
    id: 3,
    name: 'Rajesh & Meera',
    role: 'Wedding Anniversary',
    content: 'Celebrating our 25th anniversary with Manglam Event was magical. They captured the essence of our journey together in every aspect of the celebration.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    date: 'January 2024'
  },
];

const Testimonials = () => {
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
      className="py-32 bg-gradient-to-b from-primary via-primary/95 to-primary relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating-element absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
          className="floating-element absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
              className="absolute w-1 h-1 bg-white/30 rounded-full"
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
            <span className="text-6xl">💝</span>
          </motion.div>
          <motion.h2 
            className="section-title text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-light to-white"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Stories
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from our happy couples and clients about their experiences
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
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
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
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-white/10"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8 flex flex-col h-full">
                  <motion.div
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-white/20">
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div>
                      <motion.h3
                        className="text-xl font-semibold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {testimonial.name}
                      </motion.h3>
                      <motion.p
                        className="text-white/60"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {testimonial.role}
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </motion.div>

                  <motion.p
                    className="text-white/80 leading-relaxed mb-6 flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    "{testimonial.content}"
                  </motion.p>

                  <motion.div
                    className="text-white/40 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {testimonial.date}
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding: 2rem 0;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: var(--white);
          opacity: 0.5;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: var(--white);
          opacity: 1;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: var(--white);
        }
        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          color: var(--accent-light);
        }
      `}</style>
    </motion.section>
  );
};

export default Testimonials; 