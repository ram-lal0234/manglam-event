"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaHeart, FaUsers, FaCalendarAlt } from "react-icons/fa";

const OurFootprint = () => {
  const footprints = [
    {
      id: 1,
      name: "Anjani",
      image: "/images/footprints/anjani.png",
      description: "Luxury wedding venue with stunning architecture and impeccable service.",
      location: "Jodhpur, Rajasthan",
      rating: 5,
      events: "50+ Events"
    },
    {
      id: 2,
      name: "ASG",
      image: "/images/footprints/asg.png",
      description: "Modern corporate event space with state-of-the-art facilities.",
      location: "Mumbai, Maharashtra",
      rating: 5,
      events: "30+ Events"
    },
    {
      id: 3,
      name: "Capsitech",
      image: "/images/footprints/capsitech.png",
      description: "Innovative tech conference center with cutting-edge amenities.",
      location: "Bangalore, Karnataka",
      rating: 5,
      events: "25+ Events"
    },
    {
      id: 4,
      name: "iTorrent",
      image: "/images/footprints/iTorrent.png",
      description: "Dynamic entertainment venue perfect for celebrations and performances.",
      location: "Delhi, NCR",
      rating: 5,
      events: "40+ Events"
    },
    {
      id: 5,
      name: "Latiyal Handicrafts",
      image: "/images/footprints/latiyal_handicrafts.png",
      description: "Artistic venue showcasing traditional craftsmanship and cultural events.",
      location: "Jaipur, Rajasthan",
      rating: 5,
      events: "35+ Events"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footprintGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.05)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.02)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.07)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#footprintGradient)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Floating Flower Decorations */}
      <div className="absolute top-10 left-10 flower-decoration floating">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 flower-decoration floating-delayed">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
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
              <FaMapMarkerAlt className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">Our Partners</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              <span className="text-gradient-primary font-playfair">
                Trusted by
              </span>
              <br />
              <span className="text-foreground font-playfair">
                Leading Venues
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-cormorant leading-relaxed max-w-2xl mx-auto">
              Partnering with the finest venues across India to create extraordinary events.
            </p>
          </motion.div>
        </motion.div>

        {/* Logo Scroll Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Scroll Container */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            {/* Scrolling Logos */}
            <motion.div
              className="flex space-x-12 py-8"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
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
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div 
                    className="relative w-32 h-32 rounded-2xl overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(215, 38, 56, 0.1)",
                      boxShadow: "0 10px 30px rgba(215, 38, 56, 0.1)"
                    }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 flower-pattern opacity-5" />
                    
                    {/* Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                            boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                          }}
                        >
                          <FaMapMarkerAlt className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Floating Decoration */}
                      <motion.div
                        className="absolute -top-2 -right-2"
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
                        <FaStar className="w-3 h-3 text-yellow-400" />
                      </motion.div>
                    </div>
                    
                    {/* Venue Name */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-center">
                        <h3 className="text-xs font-medium text-foreground font-great-vibes">
                          {footprint.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Second Set (Duplicate for seamless loop) */}
              {footprints.map((footprint, index) => (
                <motion.div
                  key={`second-${footprint.id}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div 
                    className="relative w-32 h-32 rounded-2xl overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(215, 38, 56, 0.1)",
                      boxShadow: "0 10px 30px rgba(215, 38, 56, 0.1)"
                    }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 flower-pattern opacity-5" />
                    
                    {/* Logo Container */}
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                            boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                          }}
                        >
                          <FaMapMarkerAlt className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Floating Decoration */}
                      <motion.div
                        className="absolute -top-2 -right-2"
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
                        <FaStar className="w-3 h-3 text-yellow-400" />
                      </motion.div>
                    </div>
                    
                    {/* Venue Name */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-center">
                        <h3 className="text-xs font-medium text-foreground font-great-vibes">
                          {footprint.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: FaHeart, value: "500+", label: "Events" },
            { icon: FaUsers, value: "50+", label: "Venues" },
            { icon: FaStar, value: "5.0", label: "Rating" },
            { icon: FaCalendarAlt, value: "5+", label: "Years" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                  border: "1px solid rgba(215, 38, 56, 0.2)"
                }}
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground font-playfair">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-cormorant">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurFootprint;
