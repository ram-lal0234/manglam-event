import Lenis from 'lenis';

let lenis: Lenis;

export const initSmoothScroll = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

export const getSmoothScroll = () => lenis;

export const destroySmoothScroll = () => {
  if (lenis) {
    lenis.destroy();
  }
}; 