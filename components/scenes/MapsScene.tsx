"use client";

import { motion } from "framer-motion";

const buildings = [
  { x: 40, y: 60, w: 60, h: 40 },
  { x: 130, y: 40, w: 40, h: 70 },
  { x: 220, y: 70, w: 70, h: 45 },
  { x: 60, y: 220, w: 50, h: 60 },
  { x: 250, y: 240, w: 60, h: 50 },
  { x: 150, y: 280, w: 40, h: 40 },
];

const pins = [
  { x: 70, y: 80 },
  { x: 150, y: 60 },
  { x: 255, y: 90 },
  { x: 85, y: 250 },
  { x: 280, y: 265 },
];

export default function MapsScene() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 360 360" className="w-full h-full">
        {buildings.map((b, i) => (
          <motion.rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            stroke="#3a3a35"
            strokeWidth="1"
            fill="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          />
        ))}

        <motion.path
          d="M 70 80 C 110 40, 130 40, 150 60 S 220 30, 255 90 S 260 200, 280 265 S 150 320, 85 250 C 50 210, 90 130, 70 80"
          fill="none"
          stroke="#e7e2c9"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
        />

        {pins.map((p, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.25, ease: "backOut" }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <circle cx={p.x} cy={p.y} r="5" fill="#0a0a0a" stroke="#f2f1ec" strokeWidth="1.5" />
            <circle cx={p.x} cy={p.y} r="1.6" fill="#f2f1ec" />
          </motion.g>
        ))}
      </svg>
      <p className="text-center num-tag mt-2">300+ acres, one search bar</p>
    </div>
  );
}
