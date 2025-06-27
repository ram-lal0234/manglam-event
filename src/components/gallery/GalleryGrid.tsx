"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGallery } from "@/context/GalleryContext";
import Image from "next/image";
import Masonry from './Masonry';

interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  folder: string;
  type: 'image' | 'video';
  height?: number; // For masonry layout
}

const GalleryGrid = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedCategory } = useGallery();

  useEffect(() => {
    // Load photos from gallery folders with random heights for masonry
    const folder1Photos = Array.from({ length: 26 }, (_, i) => ({
      id: `folder1-${i + 1}`,
      url: `/images/gallery/Folder-1/${i + 1}.png`,
      alt: `Gallery Image ${i + 1} from Folder 1`,
      folder: "Gallery-1",
      type: 'image' as const,
      height: Math.random() * 200 + 200 // Random height between 200-400px
    }));

    const folder2Photos = Array.from({ length: 20 }, (_, i) => ({
      id: `folder2-${i + 1}`,
      url: `/images/gallery/Folder-2/${i + 1}.png`,
      alt: `Gallery Image ${i + 1} from Folder 2`,
      folder: "Gallery-2",
      type: 'image' as const,
      height: Math.random() * 200 + 200 // Random height between 200-400px
    }));

    // Load service photos
    const servicePhotos: GalleryItem[] = [
      {
        id: 'service-1',
        url: '/images/services/VMP02941.jpg',
        alt: 'Service Event Photo 1',
        folder: 'Services',
        type: 'image',
        height: Math.random() * 200 + 200
      },
      {
        id: 'service-2',
        url: '/images/services/VMP02808.jpg',
        alt: 'Service Event Photo 2',
        folder: 'Services',
        type: 'image',
        height: Math.random() * 200 + 200
      },
      {
        id: 'service-3',
        url: '/images/services/RK_07840.jpg',
        alt: 'Service Event Photo 3',
        folder: 'Services',
        type: 'image',
        height: Math.random() * 200 + 200
      },
      {
        id: 'service-4',
        url: '/images/services/PTVF8365.jpg',
        alt: 'Service Event Photo 4',
        folder: 'Services',
        type: 'image',
        height: Math.random() * 200 + 200
      },
      {
        id: 'service-5',
        url: '/images/services/PTVF8191.jpg',
        alt: 'Service Event Photo 5',
        folder: 'Services',
        type: 'image',
        height: Math.random() * 200 + 200
      },
      {
        id: 'service-6',
        url: '/images/services/DTI04044.jpg',
        alt: 'Service Event Photo 6',
        folder: 'Services',
        type: 'image',
        height: Math.random() * 200 + 200
      },
      {
        id: 'service-7',
        url: '/images/services/0C3A5361.jpg',
        alt: 'Service Event Photo 7',
        folder: 'Services',
        type: 'image',
        height: Math.random() * 200 + 200
      },
      {
        id: 'service-video-1',
        url: '/images/services/Sangeet Making.MP4',
        alt: 'Sangeet Making Video',
        folder: 'Services',
        type: 'video',
        height: 300
      },
      {
        id: 'service-video-2',
        url: '/images/services/Pooja Vedant - 3.mp4',
        alt: 'Pooja Vedant Video',
        folder: 'Services',
        type: 'video',
        height: 300
      },
      {
        id: 'service-video-3',
        url: '/images/services/Haldi Entry - Amritam.MP4',
        alt: 'Haldi Entry Video',
        folder: 'Services',
        type: 'video',
        height: 300
      },
      {
        id: 'service-video-4',
        url: '/images/services/Jaisalmer Rangmahal.mp4',
        alt: 'Jaisalmer Rangmahal Video',
        folder: 'Services',
        type: 'video',
        height: 300
      },
      {
        id: 'service-video-5',
        url: '/images/services/Carnival - Dior Decor.MP4',
        alt: 'Carnival Dior Decor Video',
        folder: 'Services',
        type: 'video',
        height: 300
      }
    ];

    setItems([...folder1Photos, ...folder2Photos, ...servicePhotos]);
    setIsLoading(false);
  }, []);

  const filteredItems = selectedCategory === "all"
    ? items
    : items.filter(item => item.folder === selectedCategory);

  const handleItemClick = useCallback((item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedItem(filteredItems[newIndex]);
    }
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredItems.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedItem(filteredItems[newIndex]);
    }
  }, [currentIndex, filteredItems]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedItem) {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedItem(null);
    }
  }, [selectedItem, handlePrevious, handleNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-elegant-large mb-6 text-elegant-gradient">
            Our Event Gallery
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our collection of beautifully captured moments from various events and celebrations.
          </p>
        </motion.div>

        <Masonry columns={4} gap={16} className="mb-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier easing
              }}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl elegant-image"
              style={{ height: item.height || 300 }}
              onClick={() => handleItemClick(item, index)}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              ) : (
                <div className="relative w-full h-full bg-black/20">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-105"
                    muted
                    loop
                    playsInline
                    preload="none"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                      <svg className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  <p className="text-sm font-medium opacity-90">{item.folder}</p>
                  <p className="text-xs opacity-75 mt-1">{item.type === 'video' ? 'Video' : 'Image'}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-7xl h-full" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:text-primary transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:text-primary transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {currentIndex < filteredItems.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:text-primary transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                {currentIndex + 1} / {filteredItems.length}
              </div>

              {/* Media Content */}
              <div className="w-full h-full flex items-center justify-center">
                {selectedItem.type === 'image' ? (
                  <Image
                    src={selectedItem.url}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                ) : (
                  <video
                    src={selectedItem.url}
                    className="max-w-full max-h-full"
                    controls
                    autoPlay
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
