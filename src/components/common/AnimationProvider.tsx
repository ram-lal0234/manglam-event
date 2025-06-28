"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './CustomCursor';
import { initSmoothScroll, destroySmoothScroll } from '@/lib/animations/smooth-scroll';

interface AnimationContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  prefersReducedMotion: boolean;
  pageTransition: boolean;
  setPageTransition: (transition: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: React.ReactNode;
}

const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageTransition, setPageTransition] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Initialize smooth scroll if motion is not reduced
    let lenis: any;
    if (!mediaQuery.matches) {
      lenis = initSmoothScroll();
    }

    // Hide loading after initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearTimeout(timer);
      if (lenis) {
        destroySmoothScroll();
      }
    };
  }, []);

  const contextValue: AnimationContextType = {
    isLoading,
    setIsLoading,
    prefersReducedMotion,
    pageTransition,
    setPageTransition,
  };

  return (
    <AnimationContext.Provider value={contextValue}>
      {!prefersReducedMotion && <CustomCursor />}
      
      <AnimatePresence mode="wait">
        {pageTransition && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-background origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative">
        {children}
      </div>
    </AnimationContext.Provider>
  );
};

export default AnimationProvider; 