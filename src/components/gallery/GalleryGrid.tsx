"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useGallery } from "@/context/GalleryContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  photos: GalleryPhoto[];
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Royal Wedding Celebration",
    category: "wedding",
    description: "A grand celebration of love and tradition",
    photos: [
      { id: "1-1", url: "/gallery/wedding-1.jpg", alt: "Wedding ceremony" },
      { id: "1-2", url: "/gallery/wedding-2.jpg", alt: "Wedding reception" },
      { id: "1-3", url: "/gallery/wedding-3.jpg", alt: "Wedding decorations" }
    ]
  },
  {
    id: "2",
    title: "Corporate Annual Meet",
    category: "corporate",
    description: "Professional networking and team building",
    photos: [
      { id: "2-1", url: "/gallery/corporate-1.jpg", alt: "Conference hall" },
      { id: "2-2", url: "/gallery/corporate-2.jpg", alt: "Team building" },
      { id: "2-3", url: "/gallery/corporate-3.jpg", alt: "Award ceremony" }
    ]
  },
  {
    id: "3",
    title: "Sweet 16 Birthday Party",
    category: "birthday",
    description: "A magical celebration of youth and joy",
    photos: [
      { id: "3-1", url: "/gallery/birthday-1.jpg", alt: "Birthday party decoration" },
      { id: "3-2", url: "/gallery/birthday-2.jpg", alt: "Birthday cake" },
      { id: "3-3", url: "/gallery/birthday-3.jpg", alt: "Birthday guests" }
    ]
  },
  {
    id: "4",
    title: "Cultural Festival",
    category: "cultural",
    description: "Celebrating rich traditions and heritage",
    photos: [
      { id: "4-1", url: "/gallery/cultural-1.jpg", alt: "Festival ground" },
      { id: "4-2", url: "/gallery/cultural-2.jpg", alt: "Festival decorations" },
      { id: "4-3", url: "/gallery/cultural-3.jpg", alt: "Festival food" }
    ]
  },
  {
    id: "5",
    title: "Religious Ceremony",
    category: "religious",
    description: "A spiritual gathering of faith and devotion",
    photos: [
      { id: "5-1", url: "/gallery/religious-1.jpg", alt: "Ceremony hall" },
      { id: "5-2", url: "/gallery/religious-2.jpg", alt: "Ceremony attendees" },
      { id: "5-3", url: "/gallery/religious-3.jpg", alt: "Ceremony altar" }
    ]
  },
];

const GalleryGrid = () => {
  const [selectedEvent, setSelectedEvent] = useState<GalleryItem | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const { selectedCategory } = useGallery();

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.photos[0].url}
                  alt={item.photos[0].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  <button
                    onClick={() => setSelectedEvent(item)}
                    className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Preview Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={() => setSelectedEvent(null)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-4xl mx-4">
            <Swiper
              modules={[Navigation, Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              effect="fade"
              onSwiper={setSwiper}
            >
              {selectedEvent.photos.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <div className="aspect-[4/3]">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
