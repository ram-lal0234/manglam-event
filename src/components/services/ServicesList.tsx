"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { image } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Destination Weddings",
    description:
      "At Manglam Event, destination weddings aren't just events — they're stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "🌅",
  },
  {
    title: "Wedding Planning",
    description:
      "Every love story is unique, and so is the way we bring it to life. At Manglam Event, we turn dreams into celebrations, weaving magic into every detail. From the first petal to the final toast, we plan with heart, creating weddings that feel as timeless as your love.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "💍",
  },
  {
    title: "Venue Selection",
    description:
      "The perfect moment begins with the perfect place. At Manglam Event, we don't just find venues — we discover backdrops for your story. Whether it's under open skies or within royal walls, we match your dreams with spaces that speak your love language.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "🏰",
  },
  {
    title: "Wedding Decor",
    description:
      "Rooted in tradition, adorned with elegance — our décor tells your story through colors, culture, and craft. At Manglam Event, we blend timeless rituals with artistic flair, creating a setting where heritage meets heart, and every detail feels like home.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "✨",
  },
  {
    title: "Wedding Entertainment",
    description:
      "Let the music rise and the moments sparkle — we curate joy that dances through your celebration. At Manglam Event, wedding entertainment is an experience, where beats meet traditions, and every performance adds magic to your memories.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "🎵",
  },
  {
    title: "Bride Groom Entry",
    description:
      "Every love story deserves a grand beginning. At Manglam Event, we craft unforgettable bride and groom entries — moments where dreams walk in, hearts skip beats, and all eyes are on love making its way into forever.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "👰",
  },
  {
    title: "Hospitality",
    description:
      "With warmth in every gesture and care in every detail, we treat your guests like family. At Manglam Event, hospitality goes beyond service — it's about creating personalized experiences, from the first welcome ritual to seamless guest management, ensuring that every moment feels like home.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "🏠",
  },
  {
    title: "Wedding Photography & Videography",
    description:
      "Every glance, every laugh, every tear — we capture the moments that speak louder than words. At Manglam Event, our candid photography and cinematic videography weave your love story into timeless visuals, preserving every authentic moment and every cinematic frame, so your memories live on forever.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "📸",
  },
  {
    title: "Wedding Choreography",
    description:
      "From the first step to the final twirl, we bring your dance dreams to life. At Manglam Event, our choreography blends grace and rhythm, crafting a performance that tells your story with every move — a magical dance that will be remembered long after the music fades.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "💃",
  },
  {
    title: "Vendor Management",
    description:
      "Behind every flawless celebration is a team of trusted artisans. At Manglam Event, we handle every detail with precision, from selecting the finest vendors to ensuring seamless coordination. Our expert vendor management guarantees that each element of your event aligns perfectly, creating a harmonious experience that reflects your vision.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "🤝",
  },
  {
    title: "Logistics",
    description:
      "In the dance of planning, every detail matters. At Manglam Event, we master the art of logistics, ensuring that every element of your celebration flows seamlessly. From the first moment to the last, our meticulous coordination guarantees that your event unfolds flawlessly, leaving you free to enjoy the magic of the moment.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "📋",
  },
  {
    title: "Invitations & Gifting",
    description:
      "The first glimpse of your celebration, an invitation that speaks of elegance and warmth. At Manglam Event, we craft personalized invites and thoughtful gifts that set the tone for your special day. Every detail, from the paper to the gesture, is a reflection of your love, leaving a lasting impression before the celebration even begins.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "🎁",
  },
  {
    title: "Ring Ceremony",
    description:
      "A moment where promises are made, and hearts are bound. At Manglam Event, we create a ring ceremony that reflects the depth of your love — a seamless blend of tradition and elegance, turning this simple exchange into an unforgettable celebration of commitment.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "💎",
  },
  {
    title: "Birthdays",
    description:
      "Birthdays are more than just a date — they are a celebration of life, laughter, and love. At Manglam Event, we craft unforgettable birthday experiences, filled with joy, surprises, and memories that linger. From intimate gatherings to grand festivities, we make every year more special than the last.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "🎂",
  },
  {
    title: "Corporate Events",
    description:
      "Corporate events are not just about business; they are about building connections, celebrating achievements, and inspiring teams. At Manglam Event, we craft seamless experiences that blend professionalism with creativity, ensuring every gathering leaves a lasting impression and every detail reflects your company's vision.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "💼",
  },
  {
    title: "Printing & Stationery",
    description:
      "The finest details often lie in the smallest touches. At Manglam Event, we elevate your celebration with custom printing and stationery that reflect your unique style. From elegant invites to personalized keepsakes, every piece is crafted with care, setting the tone and adding a personal touch to your unforgettable day.",
    image: "https://images.unsplash.com/photo-1580489944761-15a1462a8c26",
    icon: "📝",
  },
];

const ServicesList = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const categories = [
    { id: "all", name: "All Services", icon: "✨" },
    { id: "wedding", name: "Wedding", icon: "💍" },
    { id: "corporate", name: "Corporate", icon: "💼" },
    { id: "special", name: "Special Events", icon: "🎉" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced title animation with consistent timing
      gsap.from(titleRef.current?.children || [], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: {
          amount: 0.8,
          ease: "power2.out",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
          once: true,
        },
      });

      // Enhanced parallax effect with better performance
      gsap.to(".parallax-bg", {
        yPercent: 20,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          once: true,
        },
      });

      // Optimized floating animation
      gsap.to(".floating-element", {
        y: "15px",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        repeatRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Blobs */}
        <motion.div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          >
            <span className="text-7xl">✨</span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover our comprehensive range of event planning and management
            services
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-background/80 to-accent/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-accent/20 hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/50" />
              </div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mb-6 bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl transform group-hover:rotate-12 transition-transform duration-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-foreground/90 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesList;
