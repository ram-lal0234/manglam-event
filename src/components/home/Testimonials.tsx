"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaQuoteLeft, FaHeart, FaStar, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import EnhancedCard from "@/components/common/EnhancedCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Jawarilal Kankariya",
    role: "Grandfather of the Bride",
    content:
      "I truly appreciate the hard work, efforts, and creativity Manglam Event and team put in my granddaughter Nehal's wedding. My family and guests really loved the decoration and all the arrangements by Manglam Event. The team worked with excitement and happiness, and followed the changes as per requirement which fueled energy in wedding. Thankyou Manglam Event and team.",
    rating: 5,
    date: "January 2023",
    location: "Garh Govind",
  },
  {
    id: 2,
    name: "Sneha & Dependra",
    role: "Newlyweds",
    content:
      "I want to take a moment and appreciate the wedding planning by Manglam Event and team, they followed all our instructions really well, they took our ideas seriously and made our vision into life, they really arranged everything well, and their services were up to mark. We will highly recommend Manglam Event for your wedding planning.",
    rating: 5,
    date: "December 2023",
    location: "Sardarclub",
  },
  {
    id: 3,
    name: "Shanky Bagrecha",
    role: "Bride's Family",
    content:
      "The team really planned the wedding very well and we are grateful for that, aakash you didn't even sit for a moment and managed everything so perfectly as we didn't hear no from him even for whatever instant arrangements we asked. We didn't just hired wedding planner but also made a good bond with aakash & mansi which is again appreciable as it's important to get understood and connected with the one's who are planning the important day of your life. Thankyou Naveenji, mansi, and aakash.",
    rating: 5,
    date: "February 2022",
    location: "Rangmahal Jaisalmer",
  },
  {
    id: 4,
    name: "Manohar Jethani",
    role: "Groom's Father",
    content:
      "I can't describe in words the quality of work Manglam Event and team did at my son's wedding. We are really thankful to them as they really valued our vision and converted it into a beautiful wedding. We are really grateful to them.",
    rating: 5,
    date: "October 2022",
    location: "Amargarh Resort by Neelkanth Alura",
  },
  {
    id: 5,
    name: "Justice Vinit Kumar",
    role: "Client",
    content:
      "I really loved the decoration. Naveen ji and his team made the wedding memorable for us and our guests. All the arrangements and management was so smooth. Thankyou Manglam Event and team.",
    rating: 5,
    date: "November 2024",
    location: "",
  },
  {
    id: 6,
    name: "Moti Singh Rajpurohit",
    role: "Bride's Father",
    content:
      "I have no words to describe the efforts and hardwork Manglam Event and Team put in my daughter's wedding. I visioned the wedding and they converted my vision into life as this is one of the best wedding of the year for me. I am really grateful to Naveen ji. I wish them success ahead.",
    rating: 5,
    date: "November 2024",
    location: "LalBagh, Ranakpur",
  },
  {
    id: 7,
    name: "Rumit & Sakshi",
    role: "Newlyweds",
    content:
      "Manglam Event has done wonders. They not only organized but the hardwork and efforts they put in were really appreciable. My guests were from different corners of the world and they really enjoyed the wedding whole heartedly. The wedding for me and my guests was mindblowing. I wish them success ahead and good wishes. Thankyou so much.",
    rating: 5,
    date: "November 2024",
    location: "Kings Muthaliya Resort, Takhatgarh",
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
      className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Heart Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <FaHeart className="w-8 h-8" />
          </motion.div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaQuoteLeft className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Client Stories
          </motion.h2>
          
          <motion.p
            className="text-white/90 text-xl max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real experiences from our cherished clients who trusted us with their most precious moments
          </motion.p>
        </motion.div>

        {/* Enhanced Swiper */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={40}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={t.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                                     <EnhancedCard
                     className="bg-white/10 backdrop-blur-md border border-white/20 h-full min-h-[400px] flex flex-col"
                     hover3D={true}
                     glow={true}
                     magnetic={true}
                   >
                    <div className="p-8 md:p-10 flex flex-col h-full">
                      {/* Rating Stars */}
                      <motion.div
                        className="flex justify-center mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {[...Array(t.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                            whileHover={{ scale: 1.2 }}
                          >
                            <FaStar className="text-yellow-400 text-xl mx-0.5" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Quote Icon */}
                      <motion.div
                        className="text-center mb-4"
                        initial={{ opacity: 0, rotate: -45 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <FaQuoteLeft className="text-white/30 text-3xl mx-auto" />
                      </motion.div>

                      {/* Testimonial Content */}
                      <motion.div
                        className="flex-grow flex items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <p className="text-white text-lg leading-relaxed font-light italic text-center">
                          "{t.content}"
                        </p>
                      </motion.div>

                      {/* Client Info */}
                      <motion.div
                        className="text-center pt-6 border-t border-white/20 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <h4 className="font-semibold text-xl text-white mb-2">{t.name}</h4>
                        <p className="text-white/80 text-base mb-3">{t.role}</p>
                        
                        <div className="flex items-center justify-center space-x-4 text-sm text-white/70">
                          <div className="flex items-center space-x-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{t.date}</span>
                          </div>
                          {t.location && (
                            <div className="flex items-center space-x-1">
                              <FaMapMarkerAlt className="w-3 h-3" />
                              <span>{t.location}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </EnhancedCard>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
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
