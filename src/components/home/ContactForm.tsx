'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced title animation with split text
      const title = titleRef.current?.querySelector('.section-title');
      if (title) {
        const words = title.textContent?.split(' ') || [];
        title.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ');
        
        gsap.from(title.children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: {
            amount: 1.2,
            ease: "power2.out"
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        });
      }

      // Floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '20px',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Add message to Firestore
      const messagesRef = collection(db, 'messages');
      const messageData = {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      };
      
      console.log('Attempting to add message:', messageData);
      const docRef = await addDoc(messagesRef, messageData);
      console.log('Message added successfully with ID:', docRef.id);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Full error:', error);
      
      setSubmitStatus('error');
      
      // Handle specific error cases
      if (error.code === 'permission-denied') {
        setErrorMessage('Unable to send message due to permission issues. Please contact support.');
      } else if (error.code === 'unavailable') {
        setErrorMessage('Network error. Please check your internet connection and try again.');
      } else if (error.code === 'invalid-argument') {
        setErrorMessage('Invalid form data. Please check your input and try again.');
      } else {
        setErrorMessage('Failed to send message. Please try again or contact support.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-accent via-accent/5 to-accent relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating-element absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="floating-element absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="text-6xl">📬</span>
          </motion.div>
          <motion.h2 
            className="section-title text-4xl font-bold text-secondary mb-4 bg-clip-text  bg-gradient-to-r from-secondary via-primary to-secondary"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's discuss how we can make your special day truly extraordinary
          </motion.p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="John Doe"
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="john@example.com"
                disabled={isSubmitting}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="+91 9876543210"
              disabled={isSubmitting}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
              placeholder="Tell us about your event..."
              disabled={isSubmitting}
            />
          </motion.div>

          <AnimatePresence>
            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-lg ${
                  submitStatus === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  <p>
                    {submitStatus === 'success'
                      ? 'Message sent successfully! We will get back to you soon.'
                      : errorMessage}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm; 