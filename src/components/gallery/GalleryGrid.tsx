'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  photos: GalleryPhoto[];
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Royal Wedding Celebration',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    description: 'A grand celebration of love and commitment',
    photos: [
      {
        id: '1-1',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
        title: 'Wedding Ceremony',
        description: 'The beautiful ceremony setup'
      },
      {
        id: '1-2',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
        title: 'Reception',
        description: 'The grand reception hall'
      }
    ]
  },
  {
    id: '2',
    title: 'Corporate Annual Meet',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
    description: 'Professional gathering with modern amenities',
    photos: [
      {
        id: '2-1',
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
        title: 'Conference Room',
        description: 'The main conference hall setup'
      }
    ]
  },
  {
    id: '3',
    title: 'Sweet 16 Birthday Party',
    category: 'birthday',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
    description: 'A magical celebration of youth and joy',
    photos: [
      {
        id: '3-1',
        url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
        title: 'Party Setup',
        description: 'The birthday party decoration'
      }
    ]
  },
  {
    id: '4',
    title: 'Cultural Festival',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    description: 'Celebrating rich traditions and heritage',
    photos: [
      {
        id: '4-1',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
        title: 'Festival Ground',
        description: 'The festival venue setup'
      }
    ]
  },
  {
    id: '5',
    title: 'Religious Ceremony',
    category: 'religious',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    description: 'A spiritual gathering of faith and devotion',
    photos: [
      {
        id: '5-1',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
        title: 'Ceremony Hall',
        description: 'The main ceremony hall'
      }
    ]
  }
];

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<GalleryItem | null>(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (selectedEvent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedEvent.title}</h1>
            <button
              onClick={() => setSelectedEvent(null)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {selectedEvent.photos?.map((photo) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(photo.url)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{photo.title}</h3>
                    {photo.description && (
                      <p className="text-white/80 text-sm mt-1">{photo.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
            Event Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of beautifully captured moments from various events.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  <Link
                    href={`/gallery/${item.id}`}
                    className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium transition-colors"
                  >
                    View All Photos
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && selectedEvent && selectedEvent.photos && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
              >
                {selectedEvent.photos.map((photo) => (
                  <SwiperSlide key={photo.id}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
                      {photo.description && (
                        <p className="text-white/80">{photo.description}</p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid; 