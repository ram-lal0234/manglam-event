"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { 
  cardHoverVariants, 
  scaleVariants,
  viewportConfig,
  createStaggerDelay 
} from "@/lib/animations";

/**
 * AnimatedCard Component
 * 
 * A reusable component that provides consistent card animation patterns.
 * Includes hover effects, scale animations, and staggered entrance animations.
 * 
 * @param children - The card content
 * @param className - Additional CSS classes
 * @param index - Index for staggered animations
 * @param hover - Whether to enable hover animations
 * @param scale - Whether to enable scale animations
 * @param delay - Animation delay in seconds
 */
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
  scale?: boolean;
  delay?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
  };
}

const AnimatedCard = ({ 
  children, 
  className = "", 
  index = 0,
  hover = true,
  scale = false,
  delay = 0,
  viewport = viewportConfig.once
}: AnimatedCardProps) => {
  const calculatedDelay = delay + createStaggerDelay(index);

  return (
    <motion.div
      className={className}
      variants={hover ? cardHoverVariants : scale ? scaleVariants : undefined}
      initial={hover ? "initial" : scale ? "hidden" : { opacity: 0, y: 30 }}
      whileInView={hover ? undefined : scale ? "visible" : { opacity: 1, y: 0 }}
      whileHover={hover ? "hover" : undefined}
      viewport={viewport}
      transition={{
        duration: 0.8,
        delay: calculatedDelay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 