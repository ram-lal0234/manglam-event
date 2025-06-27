'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PreloaderContextType {
  isPreloaderComplete: boolean;
  setIsPreloaderComplete: (complete: boolean) => void;
  isHeroReady: boolean;
  setIsHeroReady: (ready: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);

  return (
    <PreloaderContext.Provider value={{ 
      isPreloaderComplete, 
      setIsPreloaderComplete,
      isHeroReady,
      setIsHeroReady
    }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
} 