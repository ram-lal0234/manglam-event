"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Destination Weddings",
    description: "At Manglam Event, destination weddings aren't just events — they're stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.",
    image: "/images/gallery/Folder-1/17.png",
    icon: "🌅",
    category: "wedding",
    features: ["Exotic Locations", "Cultural Integration", "Travel Coordination", "Local Expertise"]
  },
  {
    title: "Wedding Planning",
    description: "Every love story is unique, and so is the way we bring it to life. At Manglam Event, we turn dreams into celebrations, weaving magic into every detail. From the first petal to the final toast, we plan with heart, creating weddings that feel as timeless as your love.",
    image: "/images/services/VMP02808.jpg",
    icon: "💍",
    category: "wedding",
    features: ["Complete Planning", "Timeline Management", "Budget Control", "Vendor Coordination"]
  },
  {
    title: "Venue Selection",
    description: "The perfect moment begins with the perfect place. At Manglam Event, we don't just find venues — we discover backdrops for your story. Whether it's under open skies or within royal walls, we match your dreams with spaces that speak your love language.",
    image: "/images/services/venue-selection.jpg",
    icon: "🏰",
    category: "wedding",
    features: ["Venue Scouting", "Site Visits", "Contract Negotiation", "Logistics Planning"]
  },
  {
    title: "Wedding Decor",
    description: "Rooted in tradition, adorned with elegance — our décor tells your story through colors, culture, and craft. At Manglam Event, we blend timeless rituals with artistic flair, creating a setting where heritage meets heart, and every detail feels like home.",
    image: "/images/gallery/Folder-2/WEDDING DECOR.png",
    icon: "✨",
    category: "wedding",
    features: ["Custom Design", "Cultural Elements", "Premium Materials", "Setup & Teardown"]
  },
  {
    title: "Wedding Entertainment",
    description: "Let the music rise and the moments sparkle — we curate joy that dances through your celebration. At Manglam Event, wedding entertainment is an experience, where beats meet traditions, and every performance adds magic to your memories.",
    image: "/images/gallery/Folder-2/WEDDING ENTERTAINTMENT.png",
    icon: "🎵",
    category: "wedding",
    features: ["Live Music", "Cultural Performances", "DJ Services", "Sound Systems"]
  },
  {
    title: "Bride Groom Entry",
    description: "Every love story deserves a grand beginning. At Manglam Event, we craft unforgettable bride and groom entries — moments where dreams walk in, hearts skip beats, and all eyes are on love making its way into forever.",
    image: "/images/gallery/Folder-2/BRIDE GROOM ENTRY.png",
    icon: "👰",
    category: "wedding",
    features: ["Choreographed Entry", "Special Effects", "Music Selection", "Timing Coordination"]
  },
  {
    title: "Hospitality",
    description: "With warmth in every gesture and care in every detail, we treat your guests like family. At Manglam Event, hospitality goes beyond service — it's about creating personalized experiences, from the first welcome ritual to seamless guest management, ensuring that every moment feels like home.",
    image: "/images/services/hospitality.jpg",
    icon: "🏠",
    category: "wedding",
    features: ["Guest Management", "Accommodation", "Transportation", "Personalized Service"]
  },
  {
    title: "Wedding Photography & Videography",
    description: "Every glance, every laugh, every tear — we capture the moments that speak louder than words. At Manglam Event, our candid photography and cinematic videography weave your love story into timeless visuals, preserving every authentic moment and every cinematic frame, so your memories live on forever.",
    image: "/images/gallery/Folder-2/WEDDING PHOTOGRAPHY AND VIDEOGRAPHY.png",
    icon: "📸",
    category: "wedding",
    features: ["Candid Photography", "Cinematic Videos", "Drone Coverage", "Album Design"]
  },
  {
    title: "Wedding Choreography",
    description: "From the first step to the final twirl, we bring your dance dreams to life. At Manglam Event, our choreography blends grace and rhythm, crafting a performance that tells your story with every move — a magical dance that will be remembered long after the music fades.",
    image: "/images/gallery/Folder-2/WEDDING CHOREOGRAPHY.png",
    icon: "💃",
    category: "wedding",
    features: ["Custom Choreography", "Practice Sessions", "Music Selection", "Performance Coordination"]
  },
  {
    title: "Vendor Management",
    description: "Behind every flawless celebration is a team of trusted artisans. At Manglam Event, we handle every detail with precision, from selecting the finest vendors to ensuring seamless coordination. Our expert vendor management guarantees that each element of your event aligns perfectly, creating a harmonious experience that reflects your vision.",
    image: "/images/services/vendor management.jpg",
    icon: "🤝",
    category: "wedding",
    features: ["Vendor Selection", "Contract Management", "Quality Control", "Coordination"]
  },
  {
    title: "Logistics",
    description: "In the dance of planning, every detail matters. At Manglam Event, we master the art of logistics, ensuring that every element of your celebration flows seamlessly. From the first moment to the last, our meticulous coordination guarantees that your event unfolds flawlessly, leaving you free to enjoy the magic of the moment.",
    image: "/images/services/logistics.jpg",
    icon: "📋",
    category: "wedding",
    features: ["Timeline Management", "Resource Planning", "Coordination", "Execution"]
  },
  {
    title: "Invitations & Gifting",
    description: "The first glimpse of your celebration, an invitation that speaks of elegance and warmth. At Manglam Event, we craft personalized invites and thoughtful gifts that set the tone for your special day. Every detail, from the paper to the gesture, is a reflection of your love, leaving a lasting impression before the celebration even begins.",
    image: "/images/services/invitation.jpg",
    icon: "🎁",
    category: "wedding",
    features: ["Custom Design", "Premium Printing", "Gift Selection", "Packaging"]
  },
  {
    title: "Ring Ceremony",
    description: "A moment where promises are made, and hearts are bound. At Manglam Event, we create a ring ceremony that reflects the depth of your love — a seamless blend of tradition and elegance, turning this simple exchange into an unforgettable celebration of commitment.",
    image: "/images/gallery/Folder-1/RING CEREMONY.png",
    icon: "💎",
    category: "wedding",
    features: ["Traditional Rituals", "Modern Elements", "Family Integration", "Cultural Respect"]
  },
  {
    title: "Birthdays",
    description: "Birthdays are more than just a date — they are a celebration of life, laughter, and love. At Manglam Event, we craft unforgettable birthday experiences, filled with joy, surprises, and memories that linger. From intimate gatherings to grand festivities, we make every year more special than the last.",
    image: "/images/services/birthday.jpg",
    icon: "🎂",
    category: "special",
    features: ["Theme Design", "Entertainment", "Catering", "Decorations"]
  },
  {
    title: "Corporate Events",
    description: "Corporate events are not just about business; they are about building connections, celebrating achievements, and inspiring teams. At Manglam Event, we craft seamless experiences that blend professionalism with creativity, ensuring every gathering leaves a lasting impression and every detail reflects your company's vision.",
    image: "/images/services/corporate.jpg",
    icon: "💼",
    category: "corporate",
    features: ["Professional Setup", "Brand Integration", "Team Building", "Networking"]
  },
  {
    title: "Printing & Stationery",
    description: "The finest details often lie in the smallest touches. At Manglam Event, we elevate your celebration with custom printing and stationery that reflect your unique style. From elegant invites to personalized keepsakes, every piece is crafted with care, setting the tone and adding a personal touch to your unforgettable day.",
    image: "/images/gallery/Folder-2/PRINTING AND STATIONARY.png",
    icon: "📝",
    category: "wedding",
    features: ["Custom Design", "Premium Materials", "Quality Printing", "Personalization"]
  },
];

const ServicesList = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service cards with improved timing
      gsap.from(".service-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      // Enhanced floating animations
      gsap.to(".floating-element", {
        y: "random(-30, 30)",
        x: "random(-15, 15)",
        rotation: "random(-8, 8)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Rotating elements with varied speeds
      gsap.to(".rotating-element", {
        rotation: 360,
        duration: "random(10, 20)",
        repeat: -1,
        ease: "none",
      });

      // Pulsing elements
      gsap.to(".pulse-element", {
        scale: "random(0.8, 1.2)",
        opacity: "random(0.3, 0.8)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background with Theme Colors */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-primary/5" />
        
        {/* Animated SVG Elements with Theme Colors */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Flowing Lines */}
          <svg className="absolute top-20 left-10 w-40 h-40 text-primary/15 floating-element" viewBox="0 0 100 100">
            <path d="M10,10 Q50,5 90,10 Q85,50 90,90 Q50,95 10,90 Q5,50 10,10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          
          <svg className="absolute bottom-20 right-20 w-48 h-48 text-primary-light/20 floating-element" viewBox="0 0 100 100">
            <path d="M20,20 C20,20 40,5 60,20 C80,35 95,60 80,80 C65,95 40,80 20,80 C5,65 5,35 20,20" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>

          {/* Geometric Shapes */}
          <svg className="absolute top-1/3 right-1/4 w-32 h-32 text-primary/25 rotating-element" viewBox="0 0 100 100">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>

          <svg className="absolute bottom-1/3 left-1/3 w-36 h-36 text-primary-light/20 rotating-element" viewBox="0 0 100 100">
            <rect x="15" y="15" width="70" height="70" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.3"/>
          </svg>

          {/* Decorative Lines */}
          <div className="absolute top-40 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent floating-element" />
          <div className="absolute bottom-40 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent floating-element" />
          
          {/* Scattered Dots */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full pulse-element" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary-light/50 rounded-full pulse-element" />
          <div className="absolute bottom-1/4 left-3/4 w-2.5 h-2.5 bg-primary/35 rounded-full pulse-element" />
        </div>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center space-y-10 mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Enhanced Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 border-2 border-primary/30 rounded-full text-sm bg-primary/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <FaHeart className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes text-lg">What We Offer</span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient-primary font-playfair">
                Our Services
              </span>
              <br />
              <span className="text-foreground font-playfair">
                & Expertise
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-cormorant leading-relaxed max-w-4xl mx-auto">
              From 
              <span className="text-primary font-medium"> dream to reality</span>, 
              we offer comprehensive event solutions tailored to your unique vision.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card group relative overflow-hidden rounded-3xl cursor-pointer h-[420px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -16,
                scale: 1.03,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
            >
              {/* Enhanced Card Container */}
              <div className="relative h-full bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-600 group-hover:shadow-primary/30 group-hover:border-primary/20 group-hover:shadow-[0_25px_50px_-12px_rgba(215,38,56,0.25)]">
                
                {/* Enhanced Service Image */}
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-800 group-hover:scale-110 group-hover:brightness-75 group-hover:filter group-hover:contrast-105 group-hover:saturate-105"
                  />
                  
                  {/* Image Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-black/25 group-hover:from-black/60 group-hover:via-black/15 group-hover:to-black/40 transition-all duration-500" />
                  
                  {/* Image Shadow Effect */}
                  <div className="absolute inset-0 shadow-xl group-hover:shadow-primary/20 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  
                  {/* Image Glow Effect */}
                  <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-105" />
                  
                  {/* Enhanced Service Icon */}
                  <div className="absolute top-6 left-6 z-20">
                    <motion.div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-white/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Service Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white font-great-vibes drop-shadow-xl">
                      {service.title}
                    </h3>
                  </div>

                  {/* Enhanced Hover Content Overlay - Partial Coverage */}
                  <div className="absolute top-0 right-0 w-4/5 h-full bg-gradient-to-l from-primary/75 via-primary-light/70 to-primary-dark/80 backdrop-blur-md flex flex-col justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-800 ease-out z-10 transform translate-x-full group-hover:translate-x-0">
                    <div className="text-center text-white">
                      {/* Service Title on Hover */}
                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-200 mb-6">
                        <h3 className="text-2xl font-bold font-great-vibes text-white mb-3 drop-shadow-lg">
                          {service.title}
                        </h3>
                        <div className="w-20 h-0.5 bg-white/80 mx-auto rounded-full" />
                      </div>
                      
                      {/* Service Description */}
                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-400">
                        <p className="text-sm text-white/95 leading-relaxed font-cormorant px-2 line-clamp-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-5 rounded-full text-xl font-medium transition-all duration-400 border-2 border-primary/40 bg-primary/10 hover:bg-primary hover:text-white font-great-vibes shadow-lg hover:shadow-2xl"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 50px rgba(215, 38, 56, 0.4)",
              borderColor: "rgba(215, 38, 56, 0.8)"
            }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Get Started Today</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesList;
