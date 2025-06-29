"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Users, Calendar, Star, Award } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "500+",
    label: "Happy Clients",
    description: "Families who trusted us with their special moments",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    value: "1000+",
    label: "Events Completed",
    description: "Successfully organized celebrations",
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: "4.9",
    label: "Client Rating",
    description: "Based on verified customer reviews",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "15+",
    label: "Years Experience",
    description: "Creating unforgettable memories",
  },
];

const clientLogos = [
  {
    name: "Anjani",
    logo: "/images/footprints/anjani.png",
  },
  {
    name: "asg",
    logo: "/images/footprints/asg.png",
  },
  {
    name: "capsitech",
    logo: "/images/footprints/capsitech.png",
  },
  {
    name: "iTorrent",
    logo: "/images/footprints/iTorrent.png",
  },
  {
    name: "latiyal_handicrafts",
    logo: "/images/footprints/latiyal_handicrafts.png",
  }
];

const OurFootprint = () => {
  const sectionRef = useRef<HTMLElement>(null);
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

  // Auto carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosPerPage = 6;
  const totalPages = Math.ceil(clientLogos.length / logosPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const visibleLogos = clientLogos.slice(
    currentIndex * logosPerPage,
    (currentIndex + 1) * logosPerPage
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-background to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5 mix-blend-soft-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Footprint
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Years of excellence in creating unforgettable moments and building
            lasting relationships
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-primary mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {stat.value}
              </motion.h3>
              <motion.p
                className="text-lg font-semibold text-foreground/90 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {stat.label}
              </motion.p>
              <motion.p
                className="text-sm text-foreground/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl font-semibold text-primary mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Leading Brands
          </motion.h3>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
              >
                {visibleLogos.map((client, index) => (
                  <motion.div
                    key={client.name}
                    className="relative h-16 w-full bg-white rounded-xl p-4 hover:shadow-lg duration-300 border border-primary/5 hover:border-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain p-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-logo.png";
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-primary w-4" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurFootprint;
