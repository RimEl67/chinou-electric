import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 22 });
  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      isHovering.current = !!(t.closest("a,button,[data-hover]"));
      if (dotRef.current) {
        dotRef.current.style.transform = isHovering.current ? "translate(-50%,-50%) scale(2.5)" : "translate(-50%,-50%) scale(1)";
        dotRef.current.style.opacity = isHovering.current ? "0.5" : "1";
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);

  // Only show on desktop
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{ left: trailX, top: trailY, x: "-50%", y: "-50%" }}
        className="fixed z-[9999] pointer-events-none rounded-full"
        animate={{}}
        transition={{}}
        initial={{}}
      >
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          border: "1.5px solid rgba(56,189,248,0.55)",
          background: "transparent",
          transition: "all 0.15s ease",
        }} />
      </motion.div>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        style={{ left: cursorX, top: cursorY, x: "-50%", y: "-50%", transition: "transform 0.15s, opacity 0.15s" }}
        className="fixed z-[9999] pointer-events-none rounded-full"
      >
        <div style={{
          width: "6px", height: "6px", borderRadius: "50%",
          background: "linear-gradient(135deg, #38bdf8, #34d399)",
          boxShadow: "0 0 8px rgba(56,189,248,0.8)",
        }} />
      </motion.div>
    </>
  );
}