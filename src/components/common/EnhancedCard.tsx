"use client";

import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glow?: boolean;
  tilt?: boolean;
  scale?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
}

const EnhancedCard = ({ 
  children, 
  className,
  hover3D = true,
  glow = false,
  tilt = true,
  scale = true,
  magnetic = false,
  onClick 
}: EnhancedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative bg-background/80 backdrop-blur-sm rounded-2xl border border-accent/20 transition-all duration-300 cursor-pointer",
        glow && "hover:shadow-2xl hover:shadow-primary/10",
        className
      )}
      style={tilt && hover3D ? {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={scale ? { 
        scale: 1.02,
        y: -4,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      } : {}}
      whileTap={scale ? { 
        scale: 0.98,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(255,255,255,.1), transparent 40%)`,
        }}
        animate={{
          opacity: hover3D ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow Effect */}
      {glow && (
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 blur-lg"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Magnetic Effect */}
      {magnetic && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10" style={hover3D ? { transform: "translateZ(20px)" } : {}}>
        {children}
      </div>
    </motion.div>
  );
};

export default EnhancedCard; 