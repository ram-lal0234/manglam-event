"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Handle hover states for interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('a, button, [role="button"], .cursor-pointer, input, textarea, select')) {
        setIsHovering(true);
        setCursorVariant('pointer');
      } else if (target.matches('.cursor-text, p, h1, h2, h3, h4, h5, h6, span')) {
        setIsHovering(true);
        setCursorVariant('text');
      } else if (target.matches('.cursor-grab, .swiper-container, .draggable')) {
        setIsHovering(true);
        setCursorVariant('grab');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    const handleElementLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    // Add event listeners for hover detection
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(215, 38, 56, 0.2)',
      border: '2px solid rgba(215, 38, 56, 0.8)',
      backdropFilter: 'blur(8px)',
    },
    pointer: {
      scale: 1.5,
      backgroundColor: 'rgba(215, 38, 56, 0.1)',
      border: '2px solid rgba(215, 38, 56, 1)',
      backdropFilter: 'blur(12px)',
    },
    text: {
      scale: 0.8,
      backgroundColor: 'rgba(215, 38, 56, 0.05)',
      border: '1px solid rgba(215, 38, 56, 0.3)',
      backdropFilter: 'blur(4px)',
    },
    grab: {
      scale: 1.2,
      backgroundColor: 'rgba(215, 38, 56, 0.15)',
      border: '2px solid rgba(215, 38, 56, 0.6)',
      backdropFilter: 'blur(10px)',
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={variants}
        animate={cursorVariant}
        initial="default"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      />
      
      {/* Cursor trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] bg-primary/50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 2 : 1,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
        }}
      />
    </>
  );
};

export default CustomCursor; 