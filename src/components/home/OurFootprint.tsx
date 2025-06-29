"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

const OurFootprint = () => {
  const footprints = [
    {
      id: 1,
      name: "Anjani",
      image: "/images/footprints/anjani.png",
      description:
        "Luxury wedding venue with stunning architecture and impeccable service.",
      location: "Jodhpur, Rajasthan",
      rating: 5,
      events: "50+ Events",
    },
    {
      id: 2,
      name: "ASG",
      image: "/images/footprints/asg.png",
      description:
        "Modern corporate event space with state-of-the-art facilities.",
      location: "Mumbai, Maharashtra",
      rating: 5,
      events: "30+ Events",
    },
    {
      id: 3,
      name: "Capsitech",
      image: "/images/footprints/capsitech.png",
      description:
        "Innovative tech conference center with cutting-edge amenities.",
      location: "Bangalore, Karnataka",
      rating: 5,
      events: "25+ Events",
    },
    {
      id: 4,
      name: "iTorrent",
      image: "/images/footprints/iTorrent.png",
      description:
        "Dynamic entertainment venue perfect for celebrations and performances.",
      location: "Delhi, NCR",
      rating: 5,
      events: "40+ Events",
    },
    {
      id: 5,
      name: "Latiyal Handicrafts",
      image: "/images/footprints/latiyal_handicrafts.png",
      description:
        "Artistic venue showcasing traditional craftsmanship and cultural events.",
      location: "Jaipur, Rajasthan",
      rating: 5,
      events: "35+ Events",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="footprintGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.08)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.04)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.1)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#footprintGradient)"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Enhanced Floating Flower Decorations */}
      <div className="absolute top-10 left-10 flower-decoration floating">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary/60">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 flower-decoration floating-delayed">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary/50">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z" />
        </svg>
      </div>

      {/* Additional Flower Decorations */}
      <div className="absolute top-1/3 right-1/4 flower-decoration floating-slow">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/40">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/3 flower-decoration floating">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/45">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z" />
        </svg>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full text-base font-medium"
            style={{
              background:
                "linear-gradient(135deg, rgba(215, 38, 56, 0.15) 0%, rgba(215, 38, 56, 0.08) 100%)",
              border: "1px solid rgba(215, 38, 56, 0.25)",
              backdropFilter: "blur(10px)",
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
              <FaMapMarkerAlt className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes text-xl">
              Our Trusted Partners
            </span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-primary font-great-vibes">
                Trusted by
              </span>
              <br />
              <span className="text-foreground font-great-vibes">
                Leading Venues
              </span>
            </h2>

            <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-3xl mx-auto">
              Partnering with the finest venues across India to create
              extraordinary events that leave lasting impressions.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Logo Scroll Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Scroll Container */}
          <div className="relative overflow-hidden">
            {/* Enhanced Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Enhanced Scrolling Logos */}
            <motion.div
              className="flex space-x-16 py-12"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* First Set */}
              {footprints.map((footprint, index) => (
                <motion.div
                  key={`first-${footprint.id}`}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, y: -10 }}
                >
                  <div
                    className="relative w-40 h-40 rounded-3xl overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(215, 38, 56, 0.15)",
                      boxShadow: "0 15px 40px rgba(215, 38, 56, 0.15)",
                    }}
                  >
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 flower-pattern opacity-8" />

                    {/* Enhanced Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center p-6">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Main Image */}
                        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white shadow-lg">
                          <Image
                            src={footprint.image}
                            alt={footprint.name}
                            fill
                            className="object-contain p-2"
                            sizes="80px"
                          />
                        </div>
                        
                        {/* Location Icon Overlay */}
                        <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                        </div>
                      </div>

                      {/* Enhanced Floating Decoration */}
                      <motion.div
                        className="absolute -top-3 -right-3"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <FaStar className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
                      </motion.div>
                    </div>

                    {/* Enhanced Venue Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-center">
                        <h3 className="text-sm font-bold text-foreground font-great-vibes mb-1">
                          {footprint.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-cormorant">
                          {footprint.location}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Second Set (Duplicate for seamless loop) */}
              {footprints.map((footprint, index) => (
                <motion.div
                  key={`second-${footprint.id}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.15, y: -10 }}
                >
                  <div
                    className="relative w-40 h-40 rounded-3xl overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(215, 38, 56, 0.15)",
                      boxShadow: "0 15px 40px rgba(215, 38, 56, 0.15)",
                    }}
                  >
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 flower-pattern opacity-8" />

                    {/* Enhanced Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center p-6">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Main Image */}
                        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white shadow-lg">
                          <Image
                            src={footprint.image}
                            alt={footprint.name}
                            fill
                            className="object-contain p-2"
                            sizes="80px"
                          />
                        </div>
                        
                        {/* Location Icon Overlay */}
                        <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                        </div>
                      </div>

                      {/* Enhanced Floating Decoration */}
                      <motion.div
                        className="absolute -top-3 -right-3"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <FaStar className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
                      </motion.div>
                    </div>

                    {/* Enhanced Venue Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-center">
                        <h3 className="text-sm font-bold text-foreground font-great-vibes mb-1">
                          {footprint.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-cormorant">
                          {footprint.location}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: FaHeart, value: "500+", label: "Events" },
            { icon: FaUsers, value: "50+", label: "Venues" },
            { icon: FaStar, value: "5.0", label: "Rating" },
            { icon: FaCalendarAlt, value: "15+", label: "Years" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 group-hover:shadow-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(215, 38, 56, 0.15) 0%, rgba(215, 38, 56, 0.08) 100%)",
                  border: "1px solid rgba(215, 38, 56, 0.25)",
                }}
              >
                <stat.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground font-great-vibes mb-2">
                {stat.value}
              </div>
              <div className="text-base text-muted-foreground font-cormorant">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurFootprint;
