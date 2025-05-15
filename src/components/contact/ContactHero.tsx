'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactHero = () => {
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
      className="relative h-[50vh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop)',
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
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl">
          Let's create something extraordinary together. Get in touch with us today.
        </p>
      </div>
    </section>
  );
};

export default ContactHero; 