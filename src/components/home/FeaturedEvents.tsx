'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const FeaturedEvents = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const events = [
    {
      id: 1,
      title: 'Summer Wedding Celebration',
      date: 'June 15, 2024',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      description: 'A beautiful summer wedding with elegant decorations and perfect weather.'
    },
    {
      id: 2,
      title: 'Corporate Annual Meet',
      date: 'July 20, 2024',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      description: 'Annual corporate gathering with professional setup and networking opportunities.'
    },
    {
      id: 3,
      title: 'Birthday Bash',
      date: 'August 5, 2024',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
      description: 'A fun-filled birthday celebration with amazing decorations and entertainment.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-accent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-secondary mb-4"
          >
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our upcoming events and join us in creating unforgettable moments
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="featured-events-swiper"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{event.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedEvents; 