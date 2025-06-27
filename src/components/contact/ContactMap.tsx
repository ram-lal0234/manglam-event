'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ContactMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="heading-elegant-large mb-4 text-elegant-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Find Us
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Visit our office or get in touch with us for any inquiries
          </motion.p>
        </div>

        <motion.div
          ref={mapRef}
          className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-accent/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.2151119089691!2d72.96187241549418!3d26.228602512836545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418974e2d63f41%3A0xc24a13acec15f737!2sManglam%20Event%20Jodhpur!5e0!3m2!1sen!2sin!4v1747370821309!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-foreground/80">
            We're located in the heart of the city, easily accessible from all major areas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;