import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        background: Math.random() > 0.5 ? "#1e72b8" : "#62b12f",
        ...style,
      }}
      animate={{
        y: [0, -Math.random() * 200 - 100],
        x: [0, (Math.random() - 0.5) * 100],
        opacity: [0.8, 0],
        scale: [1, 0.3],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeOut",
      }}
    />
  );
}

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  style: {
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 40}%`,
    opacity: 0,
  },
}));

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950" />

      {/* Radial glow - blue center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "80vw",
          height: "80vh",
          background: "radial-gradient(ellipse, rgba(30,114,184,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,114,184,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,114,184,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: 400,
          height: 400,
          top: "10%",
          left: "10%",
          background: "rgba(30,114,184,0.25)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: 350,
          height: 350,
          bottom: "10%",
          right: "10%",
          background: "rgba(98,177,47,0.2)",
        }}
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 20, -15, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute rounded-full blur-[80px]"
        style={{
          width: 250,
          height: 250,
          top: "30%",
          right: "20%",
          background: "rgba(30,114,184,0.2)",
        }}
        animate={{
          x: [0, 15, -25, 0],
          y: [0, -25, 10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Lightning bolt SVG animations */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M 200 0 L 180 200 L 220 200 L 150 450 L 200 300 L 170 300 L 250 100 L 215 100 Z"
          fill="none"
          stroke="#1e72b8"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          style={{ transform: "translateX(10%)" }}
        />
        <motion.path
          d="M 0 50 L -15 200 L 10 200 L -50 400 L 0 250 L -20 250 L 40 80 L 5 80 Z"
          fill="none"
          stroke="#62b12f"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 6, delay: 2, ease: "easeInOut" }}
          style={{ transform: "translateX(80%)" }}
        />
      </svg>

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950" />
    </div>
  );
}
