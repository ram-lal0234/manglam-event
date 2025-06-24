"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Calendar, Users, Camera } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Destination Weddings",
    description:
      "At Manglam Event, destination weddings aren't just events — they're stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.",
    image: "/images/gallery/Folder-1/DESTINATION WEDDING.png",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-rose-500/20 to-pink-500/20",
    textColor: "text-rose-500",
    features: [
      "Exotic Locations",
      "Cultural Integration",
      "Travel Planning",
      "Local Expertise",
    ],
  },
  {
    id: 2,
    title: "Wedding Planning",
    description:
      "Every love story is unique, and so is the way we bring it to life. At Manglam Event, we turn dreams into celebrations, weaving magic into every detail. From the first petal to the final toast, we plan with heart, creating weddings that feel as timeless as your love.",
    image: "/images/services/VMP02808.jpg",
    icon: <Users className="w-8 h-8" />,
    color: "from-blue-500/20 to-indigo-500/20",
    textColor: "text-blue-500",
    features: [
      "Custom Themes",
      "Vendor Coordination",
      "Timeline Management",
      "Budget Planning",
    ],
  },
  {
    id: 3,
    title: "Venue Selection",
    description:
      "The perfect moment begins with the perfect place. At Manglam Event, we don't just find venues — we discover backdrops for your story. Whether it's under open skies or within royal walls, we match your dreams with spaces that speak your love language.",
    image: "/images/services/venue-selection.jpg",
    icon: <Camera className="w-8 h-8" />,
    color: "from-purple-500/20 to-violet-500/20",
    textColor: "text-purple-500",
    features: [
      "Luxury Venues",
      "Historic Palaces",
      "Beach Resorts",
      "Garden Settings",
    ],
  },
];

const FeaturedServices = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const controls = useAnimation();

  // Enhanced 3D tilt effect
  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        className="group relative bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setHoveredId(service.id)}
        onHoverEnd={() => setHoveredId(null)}
        whileHover={{ 
          y: -10,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        {/* Enhanced image container with parallax */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Enhanced gradient overlay with animation */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Enhanced icon with 3D effect */}
          <motion.div
            className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center ${service.textColor} backdrop-blur-sm border border-white/20`}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", delay: index * 0.1 }}
            whileHover={{ 
              rotate: 360, 
              scale: 1.1,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            style={{
              transform: "translateZ(20px)",
            }}
          >
            {service.icon}
          </motion.div>

          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={{ x: hoveredId === service.id ? "100%" : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Enhanced content section */}
        <div className="p-8" style={{ transform: "translateZ(10px)" }}>
          <motion.h3
            className="text-2xl font-semibold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {service.title}
          </motion.h3>
          
          <motion.p
            className="text-foreground/80 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {service.description}
          </motion.p>

          {/* Enhanced features list with staggered animation */}
          <div className="space-y-3 mb-6">
            {service.features.map((feature: string, idx: number) => (
              <motion.div
                key={idx}
                className="flex items-center text-sm text-foreground/80 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className={`w-2 h-2 rounded-full ${service.textColor} mr-3`}
                  animate={{
                    scale: hoveredId === service.id ? [1, 1.5, 1] : 1,
                    boxShadow: hoveredId === service.id ? 
                      "0 0 10px currentColor" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                />
                <span className="group-hover:text-foreground transition-colors duration-200">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA with ripple effect */}
          <motion.button
            className={`relative w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} ${service.textColor} font-medium overflow-hidden group`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="relative z-10">Explore {service.title}</span>
            
            {/* Ripple effect background */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-xl"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border-2 border-current rounded-xl"
              initial={{ pathLength: 0 }}
              whileHover={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>

        {/* Enhanced glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
          whileHover={{ 
            boxShadow: `0 0 30px ${service.textColor.includes('rose') ? 'rgba(244, 63, 94, 0.3)' : 
                                   service.textColor.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 
                                   'rgba(147, 51, 234, 0.3)'}`,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #D72638, #F2545B, #D72638)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Services
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we can turn your special day into an unforgettable
            celebration
          </motion.p>
        </motion.div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;