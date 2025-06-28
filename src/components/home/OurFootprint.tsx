"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Users, Calendar, Star, Award, Trophy, Heart, Sparkles } from "lucide-react";
import { FaHandshake, FaCrown, FaGem, FaFire } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import EnhancedCard from "@/components/common/EnhancedCard";

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
      className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5 mix-blend-soft-light" />
        
        {/* Floating Event Icons */}
        {[FaGem, FaCrown, FaHandshake, FaFire].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        ))}

        {/* Sparkle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-6 h-6 text-accent/30" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Trophy className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              backgroundSize: "200% auto",
              animation: "gradient-x 3s ease infinite",
            }}
          >
            Our Footprint
          </motion.h2>
          
          <motion.p
            className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Years of excellence in creating unforgettable moments and building
            lasting relationships across celebrations
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <EnhancedCard
                className="bg-white/90 backdrop-blur-md border border-primary/10 h-full group"
                hover3D={true}
                glow={true}
                magnetic={true}
              >
                <div className="p-8">
                  <motion.div
                    className="relative w-20 h-20 mx-auto mb-6"
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", delay: 0.2 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.h3
                      className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      style={{
                        backgroundSize: "200% auto",
                      }}
                    >
                      {stat.value}
                    </motion.h3>
                    
                    <motion.p
                      className="text-lg font-semibold text-foreground/90 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.p>
                    
                    <motion.p
                      className="text-sm text-foreground/70 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {stat.description}
                    </motion.p>
                  </motion.div>
                </div>
              </EnhancedCard>
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
