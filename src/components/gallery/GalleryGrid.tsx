"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useGallery } from "@/context/GalleryContext";
import Image from "next/image";
import { FaHeart, FaStar, FaCamera, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Masonry from "./Masonry";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Custom styles for pagination
const paginationStyles = `
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin: 0 4px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 0.9);
    transform: scale(1.2);
  }
  .swiper-pagination-bullet:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

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
        alt: "Wedding Celebration 3",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-9",
        url: "/images/gallery/Folder-2/6.png",
        alt: "Wedding Celebration 6",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-10",
        url: "/images/gallery/Folder-2/7.png",
        alt: "Wedding Celebration 7",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-11",
        url: "/images/gallery/Folder-2/8.png",
        alt: "Wedding Celebration 8",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-12",
        url: "/images/gallery/Folder-2/10.png",
        alt: "Wedding Celebration 10",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-13",
        url: "/images/gallery/Folder-2/11.png",
        alt: "Wedding Celebration 11",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-14",
        url: "/images/gallery/Folder-2/12.png",
        alt: "Wedding Celebration 12",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-15",
        url: "/images/gallery/Folder-2/13.png",
        alt: "Wedding Celebration 13",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-16",
        url: "/images/gallery/Folder-2/15.png",
        alt: "Wedding Celebration 15",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-17",
        url: "/images/gallery/Folder-2/16.png",
        alt: "Wedding Celebration 16",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-18",
        url: "/images/gallery/Folder-2/17.png",
        alt: "Wedding Celebration 17",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-19",
        url: "/images/gallery/Folder-2/18.png",
        alt: "Wedding Celebration 18",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-20",
        url: "/images/gallery/Folder-2/19.png",
        alt: "Wedding Celebration 19",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-21",
        url: "/images/gallery/Folder-2/20.png",
        alt: "Wedding Celebration 20",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-22",
        url: "/images/gallery/Folder-2/21.png",
        alt: "Wedding Celebration 21",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-23",
        url: "/images/gallery/Folder-2/22.png",
        alt: "Wedding Celebration 22",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-24",
        url: "/images/gallery/Folder-2/23.png",
        alt: "Wedding Celebration 23",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-25",
        url: "/images/gallery/Folder-2/24.png",
        alt: "Wedding Celebration 24",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-26",
        url: "/images/gallery/Folder-2/25.png",
        alt: "Wedding Celebration 25",
        folder: "Gallery-2",
        type: "image",
      },
      {
        id: "folder2-27",
        url: "/images/gallery/Folder-2/27.png",
        alt: "Wedding Celebration 27",
        folder: "Gallery-2",
        type: "image",
      },
    ];

    const allPhotos = [...folder1Photos, ...folder2Photos];
    setItems(allPhotos);
    setIsLoading(false);
  }, []);

  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.folder === selectedCategory);

  const handleItemClick = useCallback((item: GalleryItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
    setSelectedItem(item);
  }, [filteredItems]);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const handlePrevious = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);

  const handleNext = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  // Convert items to Masonry format
  const masonryItems = filteredItems.map((item) => ({
    id: item.id,
    img: item.url,
    height: 300, // Default height, will be calculated by Masonry component based on actual image dimensions
    alt: item.alt,
    folder: item.folder,
  }));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Custom Styles */}
      <style jsx global>{paginationStyles}</style>
      
      {/* Masonry Grid */}
      <div className="p-4 md:p-8">
        <Masonry
          items={masonryItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
          onItemClick={(item) => {
            const galleryItem = filteredItems.find(i => i.id === item.id);
            if (galleryItem) {
              handleItemClick(galleryItem);
            }
          }}
        />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-10 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaTimes className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                {currentIndex + 1} / {filteredItems.length}
              </div>

              {/* Swiper */}
              <div className="w-full max-w-6xl h-full max-h-[85vh]">
                <Swiper
                  onSwiper={setSwiper}
                  initialSlide={currentIndex}
                  modules={[Navigation, Pagination, EffectFade]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  navigation={false}
                  pagination={{ 
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                  }}
                  className="w-full h-full"
                  onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                >
                  {filteredItems.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full h-full max-w-4xl max-h-full">
                          <Image
                            src={item.url}
                            alt={item.alt}
                            fill
                            className="object-contain rounded-2xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          />
                          {/* Image Info */}
                          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 text-white">
                            <h3 className="text-lg font-semibold mb-1">{item.alt}</h3>
                            <p className="text-sm opacity-80">{item.folder}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom Pagination */}
                <div className="swiper-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
