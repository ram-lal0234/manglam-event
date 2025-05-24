'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface GalleryViewProps {
  eventTitle: string;
  photos: GalleryPhoto[];
}

const GalleryView = ({ eventTitle, photos }: GalleryViewProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{eventTitle}</h1>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                className="w-full"
              >
                {photos.map((photo) => (
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

              {/* Thumbnails */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                className="mt-4 h-24"
              >
                {photos.map((photo) => (
                  <SwiperSlide key={photo.id}>
                    <div className="aspect-square overflow-hidden rounded-lg cursor-pointer">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                onClick={() => setSelectedPhoto(null)}
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
    </div>
  );
};

export default GalleryView; 