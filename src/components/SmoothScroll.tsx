import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
    });
    window.__lenis = lenis;

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return children;
};

export default SmoothScroll;
