"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { 
  buttonHoverVariants, 
  createSpringConfig,
  viewportConfig 
} from "@/lib/animations";

/**
 * AnimatedButton Component
 * 
 * A reusable component that provides consistent button animation patterns.
 * Includes hover effects, tap animations, and icon animations.
 * 
 * @param children - The button content
 * @param className - Additional CSS classes
 * @param onClick - Click handler
 * @param disabled - Whether the button is disabled
 * @param variant - Animation variant
 * @param delay - Animation delay in seconds
 */
interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  delay?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
  };
}

const AnimatedButton = ({ 
  children, 
  className = "", 
  onClick,
  disabled = false,
  variant = 'primary',
  delay = 0,
  viewport = viewportConfig.once
}: AnimatedButtonProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
          boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)",
          color: "white"
        };
      case 'secondary':
        return {
          background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
          border: "1px solid rgba(215, 38, 56, 0.2)",
          backdropFilter: "blur(10px)",
          color: "var(--foreground)"
        };
      case 'ghost':
        return {
          background: "transparent",
          border: "1px solid rgba(215, 38, 56, 0.2)",
          color: "var(--primary)"
        };
      default:
        return {};
    }
  };

  return (
    <motion.button
      className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-2xl overflow-hidden transition-all duration-400 ${className}`}
      style={getButtonStyles()}
      variants={buttonHoverVariants}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      onClick={onClick}
      disabled={disabled}
      viewport={viewport}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 font-great-vibes">{children}</span>
    </motion.button>
  );
};

/**
 * AnimatedIcon Component
 * 
 * A reusable component for animated icons within buttons
 */
interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedIcon = ({ children, className = "" }: AnimatedIconProps) => {
  return (
    <motion.div
      className={`relative z-10 ml-2 ${className}`}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedButton; 