"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaStar, FaUsers, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Destination Weddings",
    description: "At Manglam Event, destination weddings aren't just events — they're stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.",
    image: "/images/gallery/Folder-1/17.png",
    icon: "🌅",
    category: "wedding"
  },
  {
    title: "Wedding Planning",
    description: "Every love story is unique, and so is the way we bring it to life. At Manglam Event, we turn dreams into celebrations, weaving magic into every detail. From the first petal to the final toast, we plan with heart, creating weddings that feel as timeless as your love.",
    image: "/images/services/VMP02808.jpg",
    icon: "💍",
    category: "wedding"
  },
  {
    title: "Venue Selection",
    description: "The perfect moment begins with the perfect place. At Manglam Event, we don't just find venues — we discover backdrops for your story. Whether it's under open skies or within royal walls, we match your dreams with spaces that speak your love language.",
    image: "/images/services/venue-selection.jpg",
    icon: "🏰",
    category: "wedding"
  },
  {
    title: "Wedding Decor",
    description: "Rooted in tradition, adorned with elegance — our décor tells your story through colors, culture, and craft. At Manglam Event, we blend timeless rituals with artistic flair, creating a setting where heritage meets heart, and every detail feels like home.",
    image: "/images/gallery/Folder-2/WEDDING DECOR.png",
    icon: "✨",
    category: "wedding"
  },
  {
    title: "Wedding Entertainment",
    description: "Let the music rise and the moments sparkle — we curate joy that dances through your celebration. At Manglam Event, wedding entertainment is an experience, where beats meet traditions, and every performance adds magic to your memories.",
    image: "/images/gallery/Folder-2/WEDDING ENTERTAINTMENT.png",
    icon: "🎵",
    category: "wedding"
  },
  {
    title: "Bride Groom Entry",
    description: "Every love story deserves a grand beginning. At Manglam Event, we craft unforgettable bride and groom entries — moments where dreams walk in, hearts skip beats, and all eyes are on love making its way into forever.",
    image: "/images/gallery/Folder-2/BRIDE GROOM ENTRY.png",
    icon: "👰",
    category: "wedding"
  },
  {
    title: "Hospitality",
    description: "With warmth in every gesture and care in every detail, we treat your guests like family. At Manglam Event, hospitality goes beyond service — it's about creating personalized experiences, from the first welcome ritual to seamless guest management, ensuring that every moment feels like home.",
    image: "/images/services/hospitality.jpg",
    icon: "🏠",
    category: "wedding"
  },
  {
    title: "Wedding Photography & Videography",
    description: "Every glance, every laugh, every tear — we capture the moments that speak louder than words. At Manglam Event, our candid photography and cinematic videography weave your love story into timeless visuals, preserving every authentic moment and every cinematic frame, so your memories live on forever.",
    image: "/images/gallery/Folder-2/WEDDING PHOTOGRAPHY AND VIDEOGRAPHY.png",
    icon: "📸",
    category: "wedding"
  },
  {
    title: "Wedding Choreography",
    description: "From the first step to the final twirl, we bring your dance dreams to life. At Manglam Event, our choreography blends grace and rhythm, crafting a performance that tells your story with every move — a magical dance that will be remembered long after the music fades.",
    image: "/images/gallery/Folder-2/WEDDING CHOREOGRAPHY.png",
    icon: "💃",
    category: "wedding"
  },
  {
    title: "Vendor Management",
    description: "Behind every flawless celebration is a team of trusted artisans. At Manglam Event, we handle every detail with precision, from selecting the finest vendors to ensuring seamless coordination. Our expert vendor management guarantees that each element of your event aligns perfectly, creating a harmonious experience that reflects your vision.",
    image: "/images/services/vendor management.jpg",
    icon: "🤝",
    category: "wedding"
  },
  {
    title: "Logistics",
    description: "In the dance of planning, every detail matters. At Manglam Event, we master the art of logistics, ensuring that every element of your celebration flows seamlessly. From the first moment to the last, our meticulous coordination guarantees that your event unfolds flawlessly, leaving you free to enjoy the magic of the moment.",
    image: "/images/services/logistics.jpg",
    icon: "📋",
    category: "wedding"
  },
  {
    title: "Invitations & Gifting",
    description: "The first glimpse of your celebration, an invitation that speaks of elegance and warmth. At Manglam Event, we craft personalized invites and thoughtful gifts that set the tone for your special day. Every detail, from the paper to the gesture, is a reflection of your love, leaving a lasting impression before the celebration even begins.",
    image: "/images/services/invitation.jpg",
    icon: "🎁",
    category: "wedding"
  },
  {
    title: "Ring Ceremony",
    description: "A moment where promises are made, and hearts are bound. At Manglam Event, we create a ring ceremony that reflects the depth of your love — a seamless blend of tradition and elegance, turning this simple exchange into an unforgettable celebration of commitment.",
    image: "/images/gallery/Folder-1/RING CEREMONY.png",
    icon: "💎",
    category: "wedding"
  },
  {
    title: "Birthdays",
    description: "Birthdays are more than just a date — they are a celebration of life, laughter, and love. At Manglam Event, we craft unforgettable birthday experiences, filled with joy, surprises, and memories that linger. From intimate gatherings to grand festivities, we make every year more special than the last.",
    image: "/images/services/birthday.jpg",
    icon: "🎂",
    category: "special"
  },
  {
    title: "Corporate Events",
    description: "Corporate events are not just about business; they are about building connections, celebrating achievements, and inspiring teams. At Manglam Event, we craft seamless experiences that blend professionalism with creativity, ensuring every gathering leaves a lasting impression and every detail reflects your company's vision.",
    image: "/images/services/corporate.jpg",
    icon: "💼",
    category: "corporate"
  },
  {
    title: "Printing & Stationery",
    description: "The finest details often lie in the smallest touches. At Manglam Event, we elevate your celebration with custom printing and stationery that reflect your unique style. From elegant invites to personalized keepsakes, every piece is crafted with care, setting the tone and adding a personal touch to your unforgettable day.",
    image: "/images/gallery/Folder-2/PRINTING AND STATIONARY.png",
    icon: "📝",
    category: "wedding"
  },
];

const ServicesList = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service cards
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredServices]);

  const categories = [
    { id: "all", name: "All Services", icon: "✨" },
    { id: "wedding", name: "Wedding", icon: "💍" },
    { id: "corporate", name: "Corporate", icon: "💼" },
    { id: "special", name: "Special Events", icon: "🎉" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.05)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.02)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.07)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#servicesGradient)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-20 floating-element">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaStar className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 right-20 floating-element">
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart className="w-6 h-6 text-primary" />
        </motion.div>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
              border: "1px solid rgba(215, 38, 56, 0.2)",
              backdropFilter: "blur(10px)"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaHeart className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">What We Offer</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-primary font-playfair">
                Our Services
              </span>
              <br />
              <span className="text-foreground font-playfair">
                & Expertise
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-3xl mx-auto">
              From 
              <span className="text-primary font-medium"> dream to reality</span>, 
              we offer comprehensive event solutions tailored to your unique vision.
            </p>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-foreground hover:text-primary"
              }`}
              style={{
                background: activeCategory === category.id
                  ? "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)"
                  : "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                border: "1px solid rgba(215, 38, 56, 0.2)",
                backdropFilter: "blur(10px)"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card group relative overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(215, 38, 56, 0.1)",
                boxShadow: "0 10px 30px rgba(215, 38, 56, 0.1)"
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(215, 38, 56, 0.2)"
              }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 8px 20px rgba(215, 38, 56, 0.4)"
                    }}
                  >
                    {service.icon}
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaStar className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground font-playfair mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-cormorant leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <motion.button
                  className="inline-flex items-center space-x-2 text-primary font-medium group-hover:text-primary-dark transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
              boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(215, 38, 56, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">Get Started Today</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesList;
