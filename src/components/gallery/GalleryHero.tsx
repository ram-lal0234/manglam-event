'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
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

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop)',
          transform: 'scale(1.1)',
          transition: 'transform 0.5s ease-out'
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        ref={textRef}
        className="relative h-full flex flex-col items-center justify-center text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Our Gallery
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl">
          Explore our collection of memorable events and celebrations we've had the pleasure of creating.
        </p>
      </div>
    </section>
  );
};

export default GalleryHero; 