"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaHeart, FaStar } from "react-icons/fa";

const Quote = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.05)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.02)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.08)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#quoteGradient)"
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
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Quote Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div 
              className="relative p-12 lg:p-16 rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                backdropFilter: "blur(25px)",
                border: "1px solid rgba(215, 38, 56, 0.1)",
                boxShadow: "0 25px 50px -12px rgba(215, 38, 56, 0.15)"
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 flower-pattern opacity-10" />
              
              {/* Quote Icon - Top Left */}
              <motion.div
                className="absolute top-8 left-8 lg:top-12 lg:left-12"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                    border: "1px solid rgba(215, 38, 56, 0.2)"
                  }}
                >
                  <FaQuoteLeft className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              {/* Quote Icon - Bottom Right */}
              <motion.div
                className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                    border: "1px solid rgba(215, 38, 56, 0.2)"
                  }}
                >
                  <FaQuoteRight className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              {/* Quote Content */}
              <div className="relative z-10 space-y-8">
                {/* Main Quote Text */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.h2
                    className="text-3xl lg:text-5xl font-bold leading-relaxed text-foreground font-playfair"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gradient-primary">
                      "Every event is a story waiting to be told,
                    </span>
                    <br />
                    <span className="text-foreground">
                      and we are the storytellers who make
                    </span>
                    <br />
                    <span className="text-gradient-primary">
                      your dreams come alive."
                    </span>
                  </motion.h2>

                  <motion.p
                    className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    At Manglam Event, we believe that every celebration is unique and deserves to be extraordinary. 
                    Our passion for creating unforgettable moments drives us to go above and beyond in every detail.
                  </motion.p>
                </motion.div>

                {/* Author Section */}
                <motion.div
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  {/* Author Avatar */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                        border: "3px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <FaHeart className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating Stars */}
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaStar className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-2 -left-2"
                      animate={{ 
                        rotate: [360, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaStar className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </motion.div>

                  {/* Author Info */}
                  <div className="text-center space-y-2">
                    <motion.h3
                      className="text-xl font-bold text-foreground font-playfair"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      Manglam Event Team
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground font-cormorant"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                      viewport={{ once: true }}
                    >
                      Your Trusted Event Partners
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
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

export default Quote; 