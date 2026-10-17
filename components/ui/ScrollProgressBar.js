"use client";
import { useEffect, useRef } from "react";
export default function ScrollProgressBar() {
  const bar = useRef(null);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current)
        bar.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    };
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);
  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}
