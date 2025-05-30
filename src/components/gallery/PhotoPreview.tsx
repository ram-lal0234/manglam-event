'use client';

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Download, 
  Share2, 
  Info,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface PhotoPreviewProps {
  photo: GalleryPhoto;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalPhotos: number;
}

export default function PhotoPreview({ 
  photo, 
  onClose, 
  onNext, 
  onPrev, 
  currentIndex,
  totalPhotos
}: PhotoPreviewProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoom = useCallback((direction: 'in' | 'out') => {
    setScale(prev => {
      const newScale = direction === 'in' ? prev * 1.2 : prev / 1.2;
      return Math.min(Math.max(newScale, 0.5), 3);
    });
  }, []);

  const handleRotate = useCallback(() => {
    setRotation(prev => (prev + 90) % 360);
  }, []);

  const handleReset = useCallback(() => {
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
      <motion.img
        src={photo.url}
        alt={photo.title}
        className="max-h-full max-w-full object-contain rounded-md shadow-xl"
        style={{
          scale,
          rotate: rotation,
          x: position.x,
          y: position.y,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        whileDrag={{ cursor: 'grabbing' }}
      />
      
      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent z-10">
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="icon-button">
            <X className="icon" />
          </button>
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {totalPhotos}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowInfo(!showInfo)} className="icon-button">
            <Info className="icon" />
          </button>
          <button className="icon-button">
            <Maximize2 className="icon" />
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <button onClick={onPrev} className="nav-button left-2 sm:left-4">
        <ChevronLeft className="icon-large" />
      </button>
      <button onClick={onNext} className="nav-button right-2 sm:right-4">
        <ChevronRight className="icon-large" />
      </button>

      {/* Image Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full p-2">
        <button onClick={() => handleZoom('out')} className="icon-button">
          <ZoomOut className="icon" />
        </button>
        <button onClick={handleReset} className="icon-button">
          <RotateCcw className="icon" />
        </button>
        <button onClick={handleRotate} className="icon-button">
          <RotateCcw className="icon" />
        </button>
        <button onClick={() => handleZoom('in')} className="icon-button">
          <ZoomIn className="icon" />
        </button>
      </div>

      {/* Bottom Info Panel */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent z-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{photo.title}</h3>
                {photo.description && <p className="text-white/90 text-sm">{photo.description}</p>}
              </div>
              <div className="flex items-center gap-3">
                <button className="icon-button">
                  <Download className="icon" />
                </button>
                <button className="icon-button">
                  <Share2 className="icon" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 