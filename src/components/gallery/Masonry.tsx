import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import Image from "next/image";

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<Array<{ src: string; width: number; height: number }>> => {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise<{ src: string; width: number; height: number }>((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
          img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        })
    )
  );
};

interface MasonryItem {
  id: string;
  img: string;
  url?: string;
  height: number;
  width?: number;
  alt?: string;
  folder?: string;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "top" | "bottom" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  onItemClick?: (item: MasonryItem) => void;
}

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  onItemClick,
}: MasonryProps) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1200px)",
      "(min-width:900px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [6, 5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<Record<string, { width: number; height: number }>>({});
  const [containerHeight, setContainerHeight] = useState(0);

  const getInitialPosition = (item: any) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[
        Math.floor(Math.random() * dirs.length)
      ] as "top" | "bottom" | "left" | "right";
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const dimensions = await preloadImages(items.map((i) => i.img));
        const dimensionMap: Record<string, { width: number; height: number }> = {};
        dimensions.forEach((dim, index) => {
          dimensionMap[items[index].id] = { width: dim.width, height: dim.height };
        });
        setImageDimensions(dimensionMap);
        setImagesReady(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        setImagesReady(true);
      }
    };
    loadImages();
  }, [items]);

  const grid = useMemo(() => {
    if (!width || !imagesReady) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 20; // Increased gap for better spacing
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const gridItems = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      
      // Calculate actual height based on image aspect ratio
      const imgDim = imageDimensions[child.id];
      let height = 300; // Default height
      
      if (imgDim) {
        const aspectRatio = imgDim.height / imgDim.width;
        height = columnWidth * aspectRatio;
        // More dynamic height range for better masonry effect
        height = Math.max(200, Math.min(900, height));
        
        // Add some variation for more natural masonry look
        const variation = 0.1; // 10% variation
        height *= 1 + (Math.random() - 0.5) * variation;
      }
      
      const y = colHeights[col];
      colHeights[col] += height + gap;
      
      return { ...child, x, y, w: columnWidth, h: height };
    });

    // Update container height
    const maxHeight = Math.max(...colHeights);
    setContainerHeight(maxHeight);

    return gridItems;
  }, [columns, items, width, imagesReady, imageDimensions]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  const handleClick = (item: MasonryItem) => {
    if (onItemClick) {
      onItemClick(item);
    } else if (item.url) {
      window.open(item.url, "_blank", "noopener");
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ 
        minHeight: containerHeight > 0 ? containerHeight : '800px',
        height: containerHeight > 0 ? containerHeight : 'auto'
      }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer group"
          style={{ willChange: "transform, width, height, opacity" }}
          onClick={() => handleClick(item)}
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-[0px_20px_60px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0px_30px_80px_-15px_rgba(0,0,0,0.4)] transition-all duration-500">
            <Image
              src={item.img}
              alt={item.alt || `Gallery ${item.id}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Subtle Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />

            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry; 