"use client";

import { motion } from "framer-motion";
import { FaHeart, FaStar, FaUsers, FaClock, FaAward, FaLock, FaLightbulb, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Experienced Team",
      description: "Our team brings years of experience in creating unforgettable events with attention to every detail.",
      icon: FaUsers,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      title: "Personalized Approach",
      description: "Every event is unique. We tailor our services to match your vision and create truly personal experiences.",
      icon: FaHeart,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every aspect of event planning and execution.",
      icon: FaAward,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Timely Delivery",
      description: "Your time is precious. We ensure everything is delivered on schedule with perfect precision.",
      icon: FaClock,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "Trust & Reliability",
      description: "Build lasting relationships with our reliable and trustworthy event planning services.",
      icon: FaLock,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Creative Solutions",
      description: "Innovative ideas and creative solutions to make your event stand out and be memorable.",
      icon: FaLightbulb,
      color: "from-indigo-500 to-purple-500"
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
            <linearGradient id="whyChooseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.04)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.02)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.06)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#whyChooseGradient)"
            opacity="0.5"
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
      <div className="absolute inset-0 geometric-pattern opacity-15" />

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
              <FaHandshake className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">Why Choose Us</span>
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
                The Perfect
              </span>
              <br />
              <span className="text-foreground font-playfair">
                Choice for Your Event
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-3xl mx-auto">
              We combine creativity, experience, and dedication to deliver 
              <span className="text-primary font-medium"> exceptional events</span> that exceed your expectations.
            </p>
          </motion.div>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Reason Card */}
              <div 
                className="relative h-full p-8 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(215, 38, 56, 0.1)",
                  boxShadow: "0 10px 30px rgba(215, 38, 56, 0.1)"
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 flower-pattern opacity-5" />
                
                {/* Icon Container */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${reason.color})`,
                      boxShadow: "0 10px 30px rgba(215, 38, 56, 0.2)"
                    }}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating Decoration */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full"
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
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-foreground font-playfair"
                    whileHover={{ color: "var(--primary)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {reason.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-muted-foreground font-cormorant leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full"
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

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: "500+", label: "Happy Clients", icon: FaHeart },
            { number: "1000+", label: "Events Planned", icon: FaStar },
            { number: "5+", label: "Years Experience", icon: FaAward },
            { number: "100%", label: "Satisfaction Rate", icon: FaUsers }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                  border: "1px solid rgba(215, 38, 56, 0.2)"
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <motion.div
                  className="text-3xl font-bold text-foreground font-playfair"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground font-cormorant">{stat.label}</div>
              </div>
            </motion.div>
          ))}
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

export default WhyChooseUs; 