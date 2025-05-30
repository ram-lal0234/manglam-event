'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import PhotoPreview from "./PhotoPreview";

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

interface GalleryViewProps {
  event: GalleryItem;
}

export default function GalleryView({ event }: GalleryViewProps) {
  const router = useRouter();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedPhoto) return;
    if (e.key === 'ArrowLeft') handlePrev();
    else if (e.key === 'ArrowRight') handleNext();
    else if (e.key === 'Escape') setSelectedPhoto(null);
  };

  useEffect(() => {
    if (selectedPhoto) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const handleNext = () => {
    if (activeIndex < event.photos.length - 1) {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      setSelectedPhoto(event.photos[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      setActiveIndex(prevIndex);
      setSelectedPhoto(event.photos[prevIndex]);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => router.back()} className="icon-button text-gray-700">
              <ArrowLeft className="icon" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{event.title}</h1>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-4 py-6 mt-[72px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {event.photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-gray-100 aspect-square"
              onClick={() => {
                setSelectedPhoto(photo);
                setActiveIndex(index);
              }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <h3 className="text-white text-sm font-semibold truncate">{photo.title}</h3>
                {photo.description && <p className="text-white text-xs truncate">{photo.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="w-full max-w-7xl h-full" onClick={(e) => e.stopPropagation()}>
              <PhotoPreview
                photo={selectedPhoto}
                onClose={() => setSelectedPhoto(null)}
                onNext={handleNext}
                onPrev={handlePrev}
                currentIndex={activeIndex}
                totalPhotos={event.photos.length}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Utility Styles (Tailwind CSS)
// Add in global styles or Tailwind config:
// .icon-button { @apply p-2 rounded-full hover:bg-gray-200 transition-colors }
// .icon { @apply w-5 h-5 }
// .icon-large { @apply w-8 h-8 }
// .nav-button { @apply absolute top-1/2 -translate-y-1/2 p-3 text-white hover:bg-black/30 rounded-full z-10 }
