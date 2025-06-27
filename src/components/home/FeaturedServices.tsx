"use client";

import { motion, useAnimation } from "framer-motion";
import { Calendar, Users, Camera } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Destination Weddings",
    description:
      "At Manglam Event, destination weddings aren't just events — they're stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.",
    image: "/images/gallery/Folder-1/17.png",
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

  const handleHover = async (id: number) => {
    setHoveredId(id);
    await controls.start({
      scale: [1, 1.02, 1],
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.5, 1]
      },
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="heading-elegant-large mb-6 text-elegant-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how we can turn your special day into an unforgettable
            celebration
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative elegant-card bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              onHoverStart={() => handleHover(service.id)}
              animate={controls}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 transition-opacity duration-500 group-hover:opacity-70`}
                />
                <motion.div
                  className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center ${service.textColor} backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.15,
                    transition: { 
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                >
                  <motion.div
                    className="transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-8">
                <motion.h3
                  className="heading-elegant-small text-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-foreground/80 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {service.description}
                </motion.p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center text-sm text-foreground/80 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ 
                        x: 8,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.span
                        className={`w-1.5 h-1.5 rounded-full ${service.textColor} mr-2 transition-all duration-300`}
                        animate={{
                          scale: hoveredId === service.id ? [1, 1.8, 1] : 1,
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="relative h-12 overflow-hidden rounded-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
                    animate={{
                      x: hoveredId === service.id ? [0, 100, 0] : 0,
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                    animate={{
                      y: hoveredId === service.id ? [0, -3, 0] : 0,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span
                      className={`text-sm font-medium ${service.textColor} transition-all duration-300 group-hover:font-semibold`}
                    >
                      Explore {service.title}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
