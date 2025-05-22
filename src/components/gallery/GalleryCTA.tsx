'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const GalleryCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
              >
                Ready to Create Your Perfect Event?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                Let us help you plan and execute an unforgettable celebration. Our team of experts is ready to bring your vision to life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-gray-800 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA; 