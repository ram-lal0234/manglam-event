"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    role: "Newlyweds",
    content:
      "Manglam Event turned our dream wedding into reality. Every detail was perfect, and the team's dedication was beyond our expectations. The memories they helped create will last a lifetime.",
    rating: 5,
    date: "March 2024",
    image: "/avatars/rahul-priya.jpg",
  },
  {
    id: 2,
    name: "Amit & Sneha",
    role: "Corporate Event",
    content:
      "Our company's annual event was a huge success thanks to Manglam Event. Their professionalism and attention to detail made everything seamless and memorable.",
    rating: 5,
    date: "February 2024",
    image: "/avatars/amit-sneha.jpg",
  },
  {
    id: 3,
    name: "Rajesh & Meera",
    role: "Wedding Anniversary",
    content:
      "Celebrating our 25th anniversary with Manglam Event was magical. They captured the essence of our journey together in every aspect of the celebration.",
    rating: 5,
    date: "January 2024",
    image: "/avatars/rajesh-meera.jpg",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 bg-primary relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mt-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Client Stories
          </h2>
          <p className="text-white text-lg max-w-xl mx-auto font-light">
            Real experiences from our cherished clients
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-white/10">
                <div className="flex flex-col items-center text-center">
                  {/* Stars */}
                  <div className="mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl mx-0.5">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-white text-xl leading-relaxed mb-8 font-light italic">
                    "{t.content}"
                  </p>

                  {/* Footer */}
                  <div className="text-white">
                    <h4 className="font-medium text-xl mb-1">{t.name}</h4>
                    <p className="text-base text-white/80">
                      {t.role} • {t.date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding: 2rem 0;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 3px;
        }

        .swiper-slide {
          transition: transform 0.3s ease;
        }

        @font-face {
          font-family: "Inter";
          src: url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
        }

        * {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </motion.section>
  );
}
