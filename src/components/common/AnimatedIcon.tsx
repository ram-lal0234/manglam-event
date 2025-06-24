"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  animation?: "pulse" | "bounce" | "rotate" | "scale" | "float";
  className?: string;
  onClick?: () => void;
  delay?: number;
}

const AnimatedIcon = ({
  children,
  animation = "pulse",
  className = "",
  onClick,
  delay = 0,
}: AnimatedIconProps) => {
  const animations = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        delay,
      },
    },
    scale: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    float: {
      y: [0, -15, 0],
      x: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${onClick ? "cursor-pointer" : ""} ${className}`}
      animate={animations[animation]}
      whileHover={onClick ? { scale: 1.1 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIcon;