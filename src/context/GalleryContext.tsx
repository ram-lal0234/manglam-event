'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface GalleryContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <GalleryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
} 