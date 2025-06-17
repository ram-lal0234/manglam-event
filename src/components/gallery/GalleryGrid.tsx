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
    const folder1Photos: GalleryItem[] = [
      {
        id: "folder1-1",
        url: "/images/gallery/Folder-1/RING CEREMONY.png",
        alt: "Ring Ceremony",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-2",
        url: "/images/gallery/Folder-1/DESTINATION WEDDING.png",
        alt: "Destination Wedding",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-3",
        url: "/images/gallery/Folder-1/2.png",
        alt: "Wedding Celebration 2",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-4",
        url: "/images/gallery/Folder-1/3.png",
        alt: "Wedding Celebration 3",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-5",
        url: "/images/gallery/Folder-1/5.png",
        alt: "Wedding Celebration 5",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-6",
        url: "/images/gallery/Folder-1/6.png",
        alt: "Wedding Celebration 6",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-7",
        url: "/images/gallery/Folder-1/7.png",
        alt: "Wedding Celebration 7",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-8",
        url: "/images/gallery/Folder-1/8.png",
        alt: "Wedding Celebration 8",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-9",
        url: "/images/gallery/Folder-1/9.png",
        alt: "Wedding Celebration 9",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-10",
        url: "/images/gallery/Folder-1/10.png",
        alt: "Wedding Celebration 10",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-11",
        url: "/images/gallery/Folder-1/11.png",
        alt: "Wedding Celebration 11",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-12",
        url: "/images/gallery/Folder-1/12.png",
        alt: "Wedding Celebration 12",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-13",
        url: "/images/gallery/Folder-1/13.png",
        alt: "Wedding Celebration 13",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-14",
        url: "/images/gallery/Folder-1/14.png",
        alt: "Wedding Celebration 14",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-15",
        url: "/images/gallery/Folder-1/15.png",
        alt: "Wedding Celebration 15",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-16",
        url: "/images/gallery/Folder-1/16.png",
        alt: "Wedding Celebration 16",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-17",
        url: "/images/gallery/Folder-1/17.png",
        alt: "Wedding Celebration 17",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-18",
        url: "/images/gallery/Folder-1/18.png",
        alt: "Wedding Celebration 18",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-19",
        url: "/images/gallery/Folder-1/19.png",
        alt: "Wedding Celebration 19",
        folder: "Gallery-1",
        type: "image",
      },
      {
        id: "folder1-20",
        url: "/images/gallery/Folder-1/20.png",
        alt: "Wedding Celebration 20",
        folder: "Gallery-1",
        type: "image",
      },
    ];

    const folder2Photos: GalleryItem[] = [
      {
        id: "folder2-1",
        url: "/images/gallery/Folder-2/WEDDING PLANNING.png",
        alt: "Wedding Planning",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-2",
        url: "/images/gallery/Folder-2/WEDDING PHOTOGRAPHY AND VIDEOGRAPHY.png",
        alt: "Wedding Photography and Videography",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-3",
        url: "/images/gallery/Folder-2/WEDDING ENTERTAINTMENT.png",
        alt: "Wedding Entertainment",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-4",
        url: "/images/gallery/Folder-2/WEDDING DECOR.png",
        alt: "Wedding Decor",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-5",
        url: "/images/gallery/Folder-2/WEDDING CHOREOGRAPHY.png",
        alt: "Wedding Choreography",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-6",
        url: "/images/gallery/Folder-2/PRINTING AND STATIONARY.png",
        alt: "Printing and Stationary",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-7",
        url: "/images/gallery/Folder-2/BRIDE GROOM ENTRY.png",
        alt: "Bride Groom Entry",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-8",
        url: "/images/gallery/Folder-2/3.png",
        alt: "Wedding Service 3",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-9",
        url: "/images/gallery/Folder-2/6.png",
        alt: "Wedding Service 6",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-10",
        url: "/images/gallery/Folder-2/7.png",
        alt: "Wedding Service 7",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-11",
        url: "/images/gallery/Folder-2/8.png",
        alt: "Wedding Service 8",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-12",
        url: "/images/gallery/Folder-2/10.png",
        alt: "Wedding Service 10",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-13",
        url: "/images/gallery/Folder-2/11.png",
        alt: "Wedding Service 11",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-14",
        url: "/images/gallery/Folder-2/12.png",
        alt: "Wedding Service 12",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-15",
        url: "/images/gallery/Folder-2/13.png",
        alt: "Wedding Service 13",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-16",
        url: "/images/gallery/Folder-2/15.png",
        alt: "Wedding Service 15",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-17",
        url: "/images/gallery/Folder-2/16.png",
        alt: "Wedding Service 16",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-18",
        url: "/images/gallery/Folder-2/17.png",
        alt: "Wedding Service 17",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-19",
        url: "/images/gallery/Folder-2/18.png",
        alt: "Wedding Service 18",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-20",
        url: "/images/gallery/Folder-2/19.png",
        alt: "Wedding Service 19",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-21",
        url: "/images/gallery/Folder-2/20.png",
        alt: "Wedding Service 20",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-22",
        url: "/images/gallery/Folder-2/21.png",
        alt: "Wedding Service 21",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-23",
        url: "/images/gallery/Folder-2/22.png",
        alt: "Wedding Service 22",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-24",
        url: "/images/gallery/Folder-2/23.png",
        alt: "Wedding Service 23",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-25",
        url: "/images/gallery/Folder-2/24.png",
        alt: "Wedding Service 24",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-26",
        url: "/images/gallery/Folder-2/25.png",
        alt: "Wedding Service 25",
        folder: "Gallery-2",
        type: "image",
      },
    ];

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
        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl bg-accent/5 hover:bg-accent/10 transition-all duration-300 mb-4"
              onClick={() => handleItemClick(item, index)}
            >
              <div className="relative aspect-[4/3]">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={() => setSelectedItem(null)}
              >
                <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
                  <button
                    className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-[10000] bg-black/50 p-2 rounded-full hover:bg-black/70"
                    onClick={() => setSelectedItem(null)}
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-[10000] bg-black/50 p-3 rounded-full hover:bg-black/70"
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
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-[10000] bg-black/50 p-3 rounded-full hover:bg-black/70"
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

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full z-[10000]">
                    {currentIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </motion.div>
              {/* Hide navbar when lightbox is open */}
              <style jsx global>{`
                nav {
                  display: none !important;
                }
              `}</style>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GalleryGrid;
