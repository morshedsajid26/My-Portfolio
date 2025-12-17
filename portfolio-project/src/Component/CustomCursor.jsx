import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  useEffect(() => {
    // DOT: instant follow
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = mouseX + "px";
        dotRef.current.style.top = mouseY + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // RING: delayed follow
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }

      requestAnimationFrame(animateRing);
    };

    animateRing();

    // CLICK animation
    const handleClick = () => {
      if (!ringRef.current) return;

      ringRef.current.classList.add("cursor-click");
      setTimeout(() => {
        ringRef.current.classList.remove("cursor-click");
      }, 150);
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // Hover effect (ring only)
  useEffect(() => {
    const grow = () => ringRef.current?.classList.add("cursor-hover");
    const shrink = () => ringRef.current?.classList.remove("cursor-hover");

    const targets = document.querySelectorAll("a, button");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
