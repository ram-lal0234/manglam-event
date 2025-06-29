import { Variants } from "framer-motion";

/**
 * Centralized Animation System for Manglam Event
 * 
 * This file contains all reusable animation patterns, variants, and utilities
 * used throughout the application. It ensures consistency and maintainability.
 */

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

/**
 * Fade In Animation Variants
 * Used for elements that should fade in from invisible to visible
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/**
 * Slide Up Animation Variants
 * Used for elements that should slide up from below
 */
export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1,
      ease: "easeOut"
    }
  }
};

/**
 * Slide Down Animation Variants
 * Used for elements that should slide down from above
 */
export const slideDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1,
      ease: "easeOut"
    }
  }
};

/**
 * Slide Left Animation Variants
 * Used for elements that should slide in from the right
 */
export const slideLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/**
 * Slide Right Animation Variants
 * Used for elements that should slide in from the left
 */
export const slideRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/**
 * Scale Animation Variants
 * Used for elements that should scale up from small to normal
 */
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1,
      ease: "easeOut"
    }
  }
};

/**
 * Staggered Container Variants
 * Used for containers with multiple children that should animate in sequence
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Staggered Item Variants
 * Used for individual items within a staggered container
 */
export const staggerItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/**
 * Card Hover Variants
 * Used for interactive cards that should lift on hover
 */
export const cardHoverVariants: Variants = {
  initial: { 
    y: 0,
    scale: 1,
    boxShadow: "0 10px 30px rgba(215, 38, 56, 0.1)"
  },
  hover: { 
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(215, 38, 56, 0.2)",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

/**
 * Button Hover Variants
 * Used for interactive buttons with scale and glow effects
 */
export const buttonHoverVariants: Variants = {
  initial: { 
    scale: 1,
    boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 15px 35px rgba(215, 38, 56, 0.4)",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
};

/**
 * Icon Rotation Variants
 * Used for icons that should continuously rotate
 */
export const iconRotationVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

/**
 * Floating Animation Variants
 * Used for decorative elements that should float up and down
 */
export const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * Pulse Glow Variants
 * Used for elements that should pulse with a glow effect
 */
export const pulseGlowVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 0 0 rgba(215, 38, 56, 0.4)",
      "0 0 0 10px rgba(215, 38, 56, 0)",
      "0 0 0 0 rgba(215, 38, 56, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============================================================================
// ANIMATION CONFIGURATIONS
// ============================================================================

/**
 * Standard animation configurations for consistent timing and easing
 */
export const animationConfig = {
  // Fast animations for micro-interactions
  fast: {
    duration: 0.2,
    ease: "easeOut"
  },
  // Normal animations for standard interactions
  normal: {
    duration: 0.4,
    ease: "easeOut"
  },
  // Slow animations for major transitions
  slow: {
    duration: 0.8,
    ease: "easeOut"
  },
  // Spring animations for bouncy effects
  spring: {
    type: "spring",
    stiffness: 400,
    damping: 17
  },
  // Stagger delays for sequential animations
  stagger: {
    delay: 0.1
  }
};

/**
 * Viewport configurations for scroll-triggered animations
 */
export const viewportConfig = {
  // Standard viewport with once trigger
  once: {
    once: true,
    margin: "-100px"
  },
  // Viewport with custom margin
  custom: (margin: string) => ({
    once: true,
    margin
  }),
  // Viewport that triggers multiple times
  repeat: {
    once: false,
    margin: "-100px"
  }
};

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Creates a staggered animation delay based on index
 * @param index - The index of the element
 * @param baseDelay - Base delay in seconds (default: 0.1)
 * @returns Delay value for the animation
 */
export const createStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay;
};

/**
 * Creates a spring animation configuration
 * @param stiffness - Spring stiffness (default: 400)
 * @param damping - Spring damping (default: 17)
 * @returns Spring configuration object
 */
export const createSpringConfig = (stiffness: number = 400, damping: number = 17) => ({
  type: "spring" as const,
  stiffness,
  damping
});

/**
 * Creates a custom transition configuration
 * @param duration - Animation duration in seconds
 * @param ease - Easing function
 * @param delay - Delay in seconds
 * @returns Transition configuration object
 */
export const createTransition = (
  duration: number = 0.8,
  ease: string = "easeOut",
  delay: number = 0
) => ({
  duration,
  ease,
  delay
});

// ============================================================================
// COMMON ANIMATION PATTERNS
// ============================================================================

/**
 * Standard section header animation pattern
 * Used for section titles, badges, and descriptions
 */
export const sectionHeaderPattern = {
  container: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: viewportConfig.once
  },
  badge: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
    viewport: viewportConfig.once
  },
  title: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.4 },
    viewport: viewportConfig.once
  }
};

/**
 * Standard card animation pattern
 * Used for service cards, testimonial cards, etc.
 */
export const cardPattern = {
  container: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: { y: -10 },
    transition: { duration: 0.8 },
    viewport: viewportConfig.once
  },
  image: {
    whileHover: { scale: 1.1 },
    transition: { duration: 0.5 }
  },
  icon: {
    whileHover: { scale: 1.1, rotate: 10 },
    transition: createSpringConfig()
  }
};

/**
 * Standard button animation pattern
 * Used for CTA buttons and interactive elements
 */
export const buttonPattern = {
  container: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: createSpringConfig()
  },
  icon: {
    whileHover: { x: 5 },
    transition: { duration: 0.3 }
  }
};

// ============================================================================
// PERFORMANCE OPTIMIZATIONS
// ============================================================================

/**
 * Reduced motion configuration for accessibility
 * Respects user's motion preferences
 */
export const reducedMotionConfig = {
  transition: { duration: 0.1 },
  whileHover: {},
  whileTap: {},
  animate: {}
};

/**
 * Check if user prefers reduced motion
 * @returns boolean indicating reduced motion preference
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get appropriate animation configuration based on user preferences
 * @param normalConfig - Normal animation configuration
 * @param reducedConfig - Reduced motion configuration
 * @returns Appropriate configuration
 */
export const getAnimationConfig = (
  normalConfig: any,
  reducedConfig: any = reducedMotionConfig
) => {
  return prefersReducedMotion() ? reducedConfig : normalConfig;
};

// ============================================================================
// EXPORT ALL ANIMATIONS
// ============================================================================

export default {
  variants: {
    fadeIn: fadeInVariants,
    slideUp: slideUpVariants,
    slideDown: slideDownVariants,
    slideLeft: slideLeftVariants,
    slideRight: slideRightVariants,
    scale: scaleVariants,
    staggerContainer: staggerContainerVariants,
    staggerItem: staggerItemVariants,
    cardHover: cardHoverVariants,
    buttonHover: buttonHoverVariants,
    iconRotation: iconRotationVariants,
    floating: floatingVariants,
    pulseGlow: pulseGlowVariants
  },
  config: animationConfig,
  viewport: viewportConfig,
  patterns: {
    sectionHeader: sectionHeaderPattern,
    card: cardPattern,
    button: buttonPattern
  },
  utils: {
    createStaggerDelay,
    createSpringConfig,
    createTransition,
    prefersReducedMotion,
    getAnimationConfig
  }
}; 