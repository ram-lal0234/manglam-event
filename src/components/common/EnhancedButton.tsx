"use client";

import { forwardRef, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  ripple?: boolean;
  glow?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
}

const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
  tap: { 
    scale: 0.98,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 20
    }
  },
  loading: {
    scale: 1,
    opacity: 0.7,
  }
};

const rippleVariants: Variants = {
  initial: { scale: 0, opacity: 0.6 },
  animate: { 
    scale: 4, 
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const glowVariants: Variants = {
  initial: { boxShadow: "0 0 0 rgba(215, 38, 56, 0)" },
  hover: { 
    boxShadow: "0 0 30px rgba(215, 38, 56, 0.4)",
    transition: {
      duration: 0.3
    }
  }
};

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className,
    disabled = false,
    loading = false,
    ripple = true,
    glow = false,
    magnetic = false,
    onClick,
    ...props 
  }, ref) => {
    
    const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed";
    
    const variantClasses = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl",
      secondary: "bg-secondary text-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-primary hover:bg-primary/10"
    };
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base", 
      lg: "px-8 py-4 text-lg"
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          magnetic && "cursor-pointer",
          disabled && "opacity-50",
          className
        )}
        variants={glow ? glowVariants : buttonVariants}
        initial="initial"
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "tap" : undefined}
        animate={loading ? "loading" : "initial"}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {/* Ripple effect */}
        {ripple && (
          <motion.span
            className="absolute inset-0 bg-white/20 rounded-lg"
            variants={rippleVariants}
            initial="initial"
            whileTap="animate"
          />
        )}
        
        {/* Magnetic effect */}
        {magnetic && (
          <motion.div
            className="absolute inset-0 rounded-lg"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          />
        )}
        
        {/* Loading spinner */}
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
        
        {/* Content */}
        <motion.span
          className={cn("relative z-10", loading && "opacity-0")}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </motion.button>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export default EnhancedButton; 