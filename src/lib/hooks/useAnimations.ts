import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  animationConfig, 
  viewportConfig, 
  createStaggerDelay, 
  createSpringConfig,
  createTransition,
  prefersReducedMotion,
  getAnimationConfig
} from '../animations';

/**
 * Custom hook for scroll-triggered animations
 * Provides easy-to-use animation triggers based on element visibility
 */
export const useScrollAnimation = (options?: {
  threshold?: number;
  once?: boolean;
  margin?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? "-100px" as any,
    amount: options?.threshold ?? 0.3
  });

  return {
    ref,
    isInView,
    animationProps: {
      initial: { opacity: 0, y: 50 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
};

/**
 * Custom hook for staggered animations
 * Manages sequential animation delays for multiple elements
 */
export const useStaggerAnimation = (itemCount: number, baseDelay: number = 0.1) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  const triggerAnimation = (index: number) => {
    setAnimatedItems(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const getItemAnimationProps = (index: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: animatedItems[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { 
      duration: 0.8, 
      delay: createStaggerDelay(index, baseDelay),
      ease: "easeOut"
    }
  });

  return {
    animatedItems,
    triggerAnimation,
    getItemAnimationProps
  };
};

/**
 * Custom hook for hover animations
 * Provides consistent hover effects with performance optimizations
 */
export const useHoverAnimation = (options?: {
  scale?: number;
  y?: number;
  duration?: number;
  spring?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    whileHover: {
      scale: options?.scale ?? 1.05,
      y: options?.y ?? -5,
      transition: options?.spring 
        ? createSpringConfig()
        : { duration: options?.duration ?? 0.3, ease: "easeOut" }
    }
  };

  return {
    isHovered,
    hoverProps
  };
};

/**
 * Custom hook for button animations
 * Provides consistent button interaction animations
 */
export const useButtonAnimation = () => {
  const buttonProps = {
    whileHover: { 
      scale: 1.05,
      transition: createSpringConfig()
    },
    whileTap: { 
      scale: 0.95,
      transition: createSpringConfig()
    }
  };

  const iconProps = {
    whileHover: { 
      x: 5,
      transition: { duration: 0.3 }
    }
  };

  return {
    buttonProps,
    iconProps
  };
};

/**
 * Custom hook for card animations
 * Provides consistent card hover and interaction effects
 */
export const useCardAnimation = () => {
  const cardProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: { 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: viewportConfig.once
  };

  const imageProps = {
    whileHover: { 
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const iconProps = {
    whileHover: { 
      scale: 1.1, 
      rotate: 10,
      transition: createSpringConfig()
    }
  };

  return {
    cardProps,
    imageProps,
    iconProps
  };
};

/**
 * Custom hook for section header animations
 * Provides consistent header animation patterns
 */
export const useSectionHeaderAnimation = () => {
  const containerProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: viewportConfig.once
  };

  const badgeProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
    viewport: viewportConfig.once
  };

  const titleProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.4 },
    viewport: viewportConfig.once
  };

  return {
    containerProps,
    badgeProps,
    titleProps
  };
};

/**
 * Custom hook for continuous animations
 * Provides infinite animations like rotation, floating, etc.
 */
export const useContinuousAnimation = (type: 'rotation' | 'floating' | 'pulse' | 'glow') => {
  const getAnimationProps = () => {
    switch (type) {
      case 'rotation':
        return {
          animate: { rotate: 360 },
          transition: { duration: 3, repeat: Infinity, ease: "linear" }
        };
      case 'floating':
        return {
          animate: { y: [-10, 10, -10] },
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        };
      case 'pulse':
        return {
          animate: { scale: [1, 1.1, 1] },
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        };
      case 'glow':
        return {
          animate: {
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 0 0 rgba(215, 38, 56, 0.4)",
              "0 0 0 10px rgba(215, 38, 56, 0)",
              "0 0 0 0 rgba(215, 38, 56, 0)"
            ]
          },
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        };
      default:
        return {};
    }
  };

  return {
    animationProps: getAnimationProps()
  };
};

/**
 * Custom hook for performance-optimized animations
 * Automatically reduces animations based on user preferences and device capabilities
 */
export const useOptimizedAnimation = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = prefersReducedMotion();
    setShouldReduceMotion(prefersReduced);

    // Check for low power device (basic heuristic)
    const isLowPower = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
    setIsLowPowerDevice(isLowPower);

    // Listen for changes in motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getOptimizedConfig = (normalConfig: any, reducedConfig?: any) => {
    if (shouldReduceMotion || isLowPowerDevice) {
      return reducedConfig || { duration: 0.1 };
    }
    return normalConfig;
  };

  return {
    shouldReduceMotion,
    isLowPowerDevice,
    getOptimizedConfig
  };
};

/**
 * Custom hook for intersection observer animations
 * Provides more control over scroll-triggered animations
 */
export const useIntersectionAnimation = (options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options?.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.3,
        rootMargin: options?.rootMargin ?? "-100px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return {
    ref,
    isVisible,
    animationProps: {
      initial: { opacity: 0, y: 50 },
      animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
};

// Export all hooks
export default {
  useScrollAnimation,
  useStaggerAnimation,
  useHoverAnimation,
  useButtonAnimation,
  useCardAnimation,
  useSectionHeaderAnimation,
  useContinuousAnimation,
  useOptimizedAnimation,
  useIntersectionAnimation
}; 