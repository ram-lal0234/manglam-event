'use client';

import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <motion.section
      className="relative min-h-[60vh] bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-20">
        <motion.div
          className="inline-block mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <span className="text-7xl">💌</span>
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Create Magic Together
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-foreground/90 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Share your vision with us, and we'll transform it into an unforgettable celebration
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ContactHero;