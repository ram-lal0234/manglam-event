"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPlay, FaArrowRight, FaHeart, FaStar, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.1)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.05)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.02)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
            opacity="0.6"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#waveGradient)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Floating Flower Decorations */}
      <div className="absolute top-20 left-10 flower-decoration floating">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>
      
      <div className="absolute top-40 right-20 flower-decoration floating-delayed">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>

      <div className="absolute bottom-40 left-20 flower-decoration floating-slow">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaHeart className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-primary font-great-vibes">Creating Unforgettable Moments</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary font-playfair">
                  Dream
                </span>
                <br />
                <span className="text-foreground font-playfair">
                  Events to
                </span>
                <br />
                <span className="text-gradient-primary font-playfair">
                  Reality
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-2xl">
                Transform your special moments into extraordinary experiences with our 
                <span className="text-primary font-medium"> premium event planning services</span>. 
                From intimate gatherings to grand celebrations, we bring your vision to life.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                    border: "1px solid rgba(215, 38, 56, 0.2)"
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FaUsers className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-playfair">500+</div>
                  <div className="text-sm text-muted-foreground font-cormorant">Happy Clients</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                    border: "1px solid rgba(215, 38, 56, 0.2)"
                  }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FaStar className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-playfair">1000+</div>
                  <div className="text-sm text-muted-foreground font-cormorant">Events Planned</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
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
                  <span className="relative z-10 font-great-vibes">Explore Services</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-2xl overflow-hidden transition-all duration-400"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                    border: "1px solid rgba(215, 38, 56, 0.2)",
                    backdropFilter: "blur(10px)",
                    color: "var(--foreground)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 font-great-vibes">Get Quote</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-[600px] rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(215, 38, 56, 0.1)",
                  boxShadow: "0 25px 50px -12px rgba(215, 38, 56, 0.25)"
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 flower-pattern opacity-20" />
                
                {/* Main Image */}
                <Image
                  src="/images/services/PTVF8191.jpg"
                  alt="Wedding Event"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(215, 38, 56, 0.2)"
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FaPlay className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Bottom Info Card */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(215, 38, 56, 0.1)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground font-playfair">Wedding Planning</h3>
                      <p className="text-sm text-muted-foreground font-cormorant">Complete wedding solutions</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                        >
                          <FaStar className="w-4 h-4 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                  border: "2px solid rgba(215, 38, 56, 0.2)"
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                  border: "2px solid rgba(215, 38, 56, 0.2)"
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
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
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24"
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

export default Hero;
