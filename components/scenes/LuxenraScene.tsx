"use client";

import { motion } from "framer-motion";

export default function LuxenraScene() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden">
      <svg viewBox="0 0 300 360" className="w-full h-full">
        <defs>
          <clipPath id="bottleClip">
            <path d="M120 40 H180 V80 C205 95 220 120 220 160 V300 C220 320 205 335 185 335 H115 C95 335 80 320 80 300 V160 C80 120 95 95 120 80 Z" />
          </clipPath>
        </defs>

        <motion.path
          d="M120 40 H180 V80 C205 95 220 120 220 160 V300 C220 320 205 335 185 335 H115 C95 335 80 320 80 300 V160 C80 120 95 95 120 80 Z"
          fill="none"
          stroke="#f2f1ec"
          strokeWidth="1.25"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <motion.rect
          x="128"
          y="15"
          width="44"
          height="28"
          rx="2"
          fill="none"
          stroke="#f2f1ec"
          strokeWidth="1.25"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 15 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 1 }}
        />

        <g clipPath="url(#bottleClip)">
          <motion.rect
            x="-40"
            y="0"
            width="60"
            height="360"
            fill="#e7e2c9"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 320, opacity: [0, 0.5, 0] }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.6, delay: 1.3, ease: "easeInOut" }}
            style={{ mixBlendMode: "overlay" }}
          />
        </g>

        <motion.line
          x1="80"
          y1="180"
          x2="220"
          y2="180"
          stroke="#3a3a35"
          strokeWidth="0.75"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </svg>
      <p className="text-center num-tag mt-2">7s → 200–400ms response times</p>
    </div>
  );
}
