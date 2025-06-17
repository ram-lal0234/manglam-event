"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useGallery } from "@/context/GalleryContext";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  folder: string;
  type: "image";
}

const GalleryGrid = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedCategory } = useGallery();

  useEffect(() => {
    // Load photos from gallery folders
    const folder1Photos = Array.from({ length: 26 }, (_, i) => ({
      id: `folder1-${i + 1}`,
      url: `/images/gallery/Folder-1/${i + 1}.png`,
      alt: `Gallery Image ${i + 1} from Folder 1`,
      folder: "Gallery-1",
      type: "image" as const,
    }));

    const folder2Photos = Array.from({ length: 20 }, (_, i) => ({
      id: `folder2-${i + 1}`,
      url: `/images/gallery/Folder-2/${i + 1}.png`,
      alt: `Gallery Image ${i + 1} from Folder 2`,
      folder: "Gallery-2",
      type: "image" as const,
    }));

    // Load service photos
    const servicePhotos: GalleryItem[] = [
      {
        id: "service-1",
        url: "/images/services/VMP02941.jpg",
        alt: "Service Event Photo 1",
        folder: "Services",
        type: "image",
      },
      {
        id: "service-2",
        url: "/images/services/VMP02808.jpg",
        alt: "Service Event Photo 2",
        folder: "Services",
        type: "image",
      },
      {
        id: "service-3",
        url: "/images/services/RK_07840.jpg",
        alt: "Service Event Photo 3",
        folder: "Services",
        type: "image",
      },
      {
        id: "service-4",
        url: "/images/services/PTVF8365.jpg",
        alt: "Service Event Photo 4",
        folder: "Services",
        type: "image",
      },
      {
        id: "service-5",
        url: "/images/services/PTVF8191.jpg",
        alt: "Service Event Photo 5",
        folder: "Services",
        type: "image",
      },
      {
        id: "service-6",
        url: "/images/services/DTI04044.jpg",
        alt: "Service Event Photo 6",
        folder: "Services",
        type: "image",
      },
      {
        id: "service-7",
        url: "/images/services/0C3A5361.jpg",
        alt: "Service Event Photo 7",
        folder: "Services",
        type: "image",
      },
    ];

    setItems([...folder1Photos, ...folder2Photos, ...servicePhotos]);
    setIsLoading(false);
  }, []);

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.folder === selectedCategory);

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

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedItem) {
        if (e.key === "ArrowLeft") handlePrevious();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setSelectedItem(null);
      }
    },
    [selectedItem, handlePrevious, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-accent/5 hover:bg-accent/10 transition-all duration-300"
              onClick={() => handleItemClick(item, index)}
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium truncate">{item.alt}</p>
                  <p className="text-xs text-white/70">{item.folder}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={() => setSelectedItem(null)}
            >
              <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
                <button
                  className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="relative w-full h-full">
                  <Image
                    src={selectedItem.url}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GalleryGrid;
