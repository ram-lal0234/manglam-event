'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGallery } from '../../context/GalleryContext';

const categories = [
  { id: 'all', name: 'All Events', icon: '🎉' },
  { id: 'wedding', name: 'Weddings', icon: '💑' },
  { id: 'corporate', name: 'Corporate', icon: '💼' },
  { id: 'birthday', name: 'Birthdays', icon: '🎂' },
  { id: 'cultural', name: 'Cultural', icon: '🎭' },
  { id: 'religious', name: 'Religious', icon: '🙏' }
];

const GalleryCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { setSelectedCategory } = useGallery();

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setSelectedCategory(category);
  };

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of events and celebrations, each captured with care and creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategorySelect(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCategories; 