"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  stagger?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0,
    stagger = 0.1,
  } = options;

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { 
    threshold, 
    margin: rootMargin,
    once: triggerOnce 
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        controls.start('visible');
      }, delay * 1000);

      return () => clearTimeout(timer);
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, delay, triggerOnce]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return {
    ref,
    controls,
    isInView,
    variants,
    childVariants,
    animate: controls,
    initial: 'hidden'
  };
};

export const useStaggerAnimation = (count: number, delay: number = 0.1) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const staggerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: delay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
  };

  const trigger = () => {
    setIsVisible(true);
    controls.start('visible');
  };

  return {
    staggerVariants,
    itemVariants,
    controls,
    trigger,
    isVisible
  };
};

export const useParallaxScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}; 