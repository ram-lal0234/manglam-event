'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

gsap.registerPlugin(ScrollTrigger);

const GalleryGrid = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      title: 'Royal Wedding Celebration'
    },
    {
      id: 2,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      title: 'Annual Corporate Gala'
    },
    {
      id: 3,
      category: 'birthdays',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
      title: 'Sweet 16 Birthday Party'
    },
    {
      id: 4,
      category: 'decorations',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
      title: 'Floral Arrangement'
    },
    {
      id: 5,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      title: 'Beach Wedding Ceremony'
    },
    {
      id: 6,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      title: 'Product Launch Event'
    },
    {
      id: 7,
      category: 'birthdays',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
      title: 'Kids Birthday Party'
    },
    {
      id: 8,
      category: 'decorations',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
      title: 'Wedding Decoration'
    },
    {
      id: 9,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      title: 'Traditional Wedding'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.children;
      if (!items) return;

      gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full max-w-4xl"
            >
              {filteredItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full max-w-4xl mt-4"
            >
              {filteredItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-20 object-cover cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid; 