'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats
      const stats = statsRef.current?.children;
      if (stats) {
        gsap.from(stats, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        });
      }

      // Animate features
      const features = featuresRef.current?.children;
      if (features) {
        gsap.from(features, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      id: 1,
      number: '500+',
      label: 'Events Completed'
    },
    {
      id: 2,
      number: '98%',
      label: 'Client Satisfaction'
    },
    {
      id: 3,
      number: '15+',
      label: 'Years Experience'
    },
    {
      id: 4,
      number: '50+',
      label: 'Team Members'
    }
  ];

  const features = [
    {
      id: 1,
      title: 'Expert Team',
      description: 'Our experienced team ensures flawless execution of every event.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We create personalized experiences tailored to your needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Quality Service',
      description: 'We maintain the highest standards in every aspect of our service.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We are committed to making your event truly special and memorable
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-background rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-accent/10"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 