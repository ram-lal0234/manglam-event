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
                      {t.location && ` • ${t.location}`}
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
