'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './masonry.css';

interface MasonryProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

const Masonry: React.FC<MasonryProps> = ({ 
  children, 
  columns = 4, 
  gap = 16, 
  className = '' 
}) => {
  const [responsiveColumns, setResponsiveColumns] = useState(columns);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate responsive columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setResponsiveColumns(1);
      else if (width < 768) setResponsiveColumns(2);
      else if (width < 1024) setResponsiveColumns(3);
      else setResponsiveColumns(columns);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  // Convert children to array for better manipulation
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <div
        ref={containerRef}
        className="masonry-grid"
        style={{
          columnCount: responsiveColumns,
          columnGap: `${gap}px`,
        }}
      >
        <AnimatePresence>
          {childrenArray.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="masonry-item"
            >
              {child}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Masonry; 