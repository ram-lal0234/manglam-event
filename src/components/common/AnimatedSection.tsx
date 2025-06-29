"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { 
  slideUpVariants, 
  staggerContainerVariants, 
  staggerItemVariants,
  viewportConfig 
} from "@/lib/animations";

/**
 * AnimatedSection Component
 * 
 * A reusable component that provides consistent animation patterns for page sections.
 * Automatically handles scroll-triggered animations and staggered children.
 * 
 * @param children - The content to animate
 * @param className - Additional CSS classes
 * @param delay - Animation delay in seconds
 * @param stagger - Whether to stagger child animations
 * @param variant - Animation variant to use
 */
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
  viewport?: {
    once?: boolean;
    margin?: string;
  };
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  stagger = false,
  variant = 'slideUp',
  viewport = viewportConfig.once
}: AnimatedSectionProps) => {
  // Get the appropriate animation variant
  const getVariant = () => {
    switch (variant) {
      case 'fadeIn':
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      case 'slideUp':
        return slideUpVariants;
      case 'slideDown':
        return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
      case 'slideLeft':
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
      case 'slideRight':
        return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
      case 'scale':
        return { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };
      default:
        return slideUpVariants;
    }
  };

  const animationVariant = getVariant();

  return (
    <motion.section
      className={className}
      variants={stagger ? staggerContainerVariants : animationVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      {stagger ? (
        <motion.div variants={staggerItemVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
};

export default AnimatedSection; 