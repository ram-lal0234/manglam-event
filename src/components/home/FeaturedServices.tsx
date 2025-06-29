"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaHeart, FaStar, FaUsers, FaCalendarAlt, FaCamera, FaMusic, FaUtensils } from "react-icons/fa";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Wedding Planning",
      description: "Complete wedding planning and coordination services to make your special day perfect.",
      image: "/images/services/PTVF8191.jpg",
      icon: FaHeart,
      features: ["Venue Selection", "Vendor Management", "Day Coordination"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Corporate Events",
      description: "Professional corporate event management for conferences, seminars, and team building.",
      image: "/images/services/corporate.jpg",
      icon: FaUsers,
      features: ["Conference Planning", "Team Building", "Product Launches"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Birthday Celebrations",
      description: "Memorable birthday celebrations tailored to your preferences and style.",
      image: "/images/services/birthday.jpg",
      icon: FaCalendarAlt,
      features: ["Theme Decoration", "Entertainment", "Catering"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Photography & Videography",
      description: "Professional photography and videography services to capture your precious moments.",
      image: "/images/services/PTVF8365.jpg",
      icon: FaCamera,
      features: ["Event Coverage", "Photo Editing", "Video Production"],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "Entertainment",
      description: "Premium entertainment services including live music, DJs, and performers.",
      image: "/images/services/VMP02808.jpg",
      icon: FaMusic,
      features: ["Live Music", "DJ Services", "Performers"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Catering Services",
      description: "Exquisite catering services with customized menus for all occasions.",
      image: "/images/services/VMP02941.jpg",
      icon: FaUtensils,
      features: ["Custom Menus", "Food Styling", "Service Staff"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.03)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.01)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.05)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#servicesGradient)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Floating Flower Decorations */}
      <div className="absolute top-20 left-20 flower-decoration floating">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-20 flower-decoration floating-delayed">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-8 mb-16"
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
              <FaStar className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">Our Premium Services</span>
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
                Featured
              </span>
              <br />
              <span className="text-foreground font-playfair">
                Services
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-3xl mx-auto">
              Discover our comprehensive range of event planning services designed to make your celebrations 
              <span className="text-primary font-medium"> truly extraordinary</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Service Card */}
              <div 
                className="relative h-full rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(215, 38, 56, 0.1)",
                  boxShadow: "0 10px 30px rgba(215, 38, 56, 0.1)"
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 flower-pattern opacity-5" />
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(215, 38, 56, 0.2)"
                    }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-foreground font-playfair"
                    whileHover={{ color: "var(--primary)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-muted-foreground font-cormorant leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground font-cormorant">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="pt-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="/services"
                      className="group inline-flex items-center space-x-2 text-primary font-medium hover:text-primary-dark transition-colors duration-300"
                    >
                      <span className="font-great-vibes">Learn More</span>
                      <motion.div
                        className="relative"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                    border: "1px solid rgba(215, 38, 56, 0.2)"
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                    border: "1px solid rgba(215, 38, 56, 0.2)"
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-2xl overflow-hidden transition-all duration-400"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 font-great-vibes">View All Services</span>
              <motion.div
                className="relative z-10 ml-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-background"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-background"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default FeaturedServices;
