'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className,
  particleColor = "#FFFFFF",
}: SparklesProps) => {
  const containerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    const ctx = container.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      container.width = container.offsetWidth;
      container.height = container.offsetHeight;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleDensity; i++) {
        particles.push({
          x: Math.random() * container.width,
          y: Math.random() * container.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, container.width, container.height);
      ctx.fillStyle = particleColor;

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = container.width;
        if (particle.x > container.width) particle.x = 0;
        if (particle.y < 0) particle.y = container.height;
        if (particle.y > container.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [maxSize, minSize, particleColor, particleDensity]);

  return (
    <div className={cn('absolute inset-0', className)}>
      <canvas
        ref={containerRef}
        id={id}
        className="w-full h-full"
        style={{ background }}
      />
    </div>
  );
}; 