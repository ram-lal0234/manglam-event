'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-accent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your vision and create an unforgettable experience together.
            Fill out the form below to get started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Planning</option>
                <option value="corporate">Corporate Events</option>
                <option value="birthday">Birthday Celebrations</option>
                <option value="decoration">Event Decoration</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Tell us about your event
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA; 