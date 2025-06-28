"use client";

import { forwardRef, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  loading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  multiline?: boolean;
  rows?: number;
}

const EnhancedInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, EnhancedInputProps>(
  ({
    type = "text",
    label,
    placeholder,
    value = "",
    error,
    leftIcon,
    rightIcon,
    className,
    disabled = false,
    required = false,
    autoFocus = false,
    loading = false,
    onChange,
    onFocus,
    onBlur,
    multiline = false,
    rows = 4,
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const hasValue = value.length > 0;
    const isFloating = isFocused || hasValue;

    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    const baseClasses = cn(
      "w-full px-4 py-3 text-base border rounded-lg transition-all duration-300 bg-background/50 backdrop-blur-sm",
      leftIcon && "pl-12",
      rightIcon && "pr-12",
      multiline ? "resize-none min-h-[120px]" : "h-12",
      disabled && "opacity-50 cursor-not-allowed",
      error 
        ? "border-red-500 focus:border-red-500 focus:ring-red-200" 
        : "border-accent/20 focus:border-primary focus:ring-primary/20",
      "focus:outline-none focus:ring-2",
      className
    );

    const Component = multiline ? 'textarea' : 'input';

    return (
      <div className="relative">
        {/* Label */}
        {label && (
          <motion.label
            className={cn(
              "absolute left-4 pointer-events-none transition-all duration-300 origin-left",
              isFloating 
                ? "top-0 text-xs bg-background px-2 text-primary transform -translate-y-1/2" 
                : "top-1/2 text-base text-muted-foreground transform -translate-y-1/2",
              multiline && !isFloating && "top-4 transform-none"
            )}
            animate={{
              scale: isFloating ? 0.85 : 1,
              y: isFloating ? (multiline ? -8 : -6) : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </motion.label>
        )}

        {/* Input Container */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.01 }}
          whileFocus={{ scale: 1.01 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Left Icon */}
          {leftIcon && (
            <motion.div
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              animate={{
                color: isFocused ? "rgb(215, 38, 56)" : "rgb(107, 114, 128)",
                scale: isFocused ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {leftIcon}
            </motion.div>
          )}

          {/* Input Field */}
          <Component
            ref={ref as any}
            type={!multiline ? type : undefined}
            value={value}
            placeholder={isFloating ? placeholder : ""}
            className={baseClasses}
            disabled={disabled || loading}
            autoFocus={autoFocus}
            rows={multiline ? rows : undefined}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              animate={{
                color: isFocused ? "rgb(215, 38, 56)" : "rgb(107, 114, 128)",
                scale: isFocused ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {rightIcon}
            </motion.div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <motion.div
                className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )}

          {/* Focus Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-primary pointer-events-none"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: isFocused ? 0.3 : 0,
              scale: isFocused ? 1.02 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              className="mt-2 text-sm text-red-500 flex items-center space-x-1"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

EnhancedInput.displayName = "EnhancedInput";

export default EnhancedInput; 