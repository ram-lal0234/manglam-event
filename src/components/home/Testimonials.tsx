"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar, FaHeart, FaUsers } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Rajesh",
      role: "Wedding Couple",
      image: "/images/testimonials/",
      content: "Manglam Event made our wedding day absolutely magical! Every detail was perfect, from the venue decoration to the coordination. They truly understood our vision and brought it to life beyond our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Anita Sharma",
      role: "Corporate Client",
      image: "/images/testimonials/",
      content: "Professional, reliable, and creative! Our corporate event was a huge success thanks to their exceptional planning and execution. The team went above and beyond to ensure everything was flawless.",
      rating: 5
    },
    {
      id: 3,
      name: "Rahul & Meera",
      role: "Birthday Celebration",
      image: "/images/testimonials/",
      content: "Our daughter's birthday party was a dream come true! The theme, decorations, and entertainment were all perfect. The kids had an amazing time, and so did we. Highly recommended!",
      rating: 5
    },
    {
      id: 4,
      name: "Sunita Patel",
      role: "Family Event",
      image: "/images/testimonials/",
      content: "From the initial consultation to the final execution, Manglam Event exceeded our expectations. Their attention to detail and personalized approach made our family celebration truly special.",
      rating: 5
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
            <linearGradient id="testimonialsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.03)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.01)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.05)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#testimonialsGradient)"
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
              <FaHeart className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">Client Testimonials</span>
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
                What Our
              </span>
              <br />
              <span className="text-foreground font-playfair">
                Clients Say
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our 
              <span className="text-primary font-medium"> happy clients</span> have to say about their experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Testimonial Card */}
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
                
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 right-6"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                      border: "1px solid rgba(215, 38, 56, 0.2)"
                    }}
                  >
                    <FaQuoteLeft className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Rating */}
                  <motion.div
                    className="flex items-center space-x-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FaStar className="w-5 h-5 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-lg text-muted-foreground font-cormorant leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Avatar */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                          border: "3px solid rgba(255, 255, 255, 0.8)",
                          boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <FaUsers className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Floating Star */}
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
                    </motion.div>

                    {/* Author Details */}
                    <div>
                      <motion.h4
                        className="text-lg font-bold text-foreground font-playfair"
                        whileHover={{ color: "var(--primary)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {testimonial.name}
                      </motion.h4>
                      <p className="text-muted-foreground font-cormorant">{testimonial.role}</p>
                    </div>
                  </motion.div>
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
            className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
              border: "1px solid rgba(215, 38, 56, 0.2)",
              backdropFilter: "blur(10px)"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaHeart className="w-6 h-6 text-primary" />
            </motion.div>
            <span className="text-foreground font-great-vibes text-lg">
              Join our happy clients and create your perfect event!
            </span>
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

export default Testimonials;
