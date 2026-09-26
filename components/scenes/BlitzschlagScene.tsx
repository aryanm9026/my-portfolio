"use client";

import { motion } from "framer-motion";

export default function BlitzschlagScene() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const r1 = 60;
          const r2 = i % 2 === 0 ? 130 : 100;
          return (
            <motion.line
              key={i}
              x1={150 + r1 * Math.cos(angle)}
              y1={150 + r1 * Math.sin(angle)}
              x2={150 + r2 * Math.cos(angle)}
              y2={150 + r2 * Math.sin(angle)}
              stroke="#3a3a35"
              strokeWidth="1"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.02 }}
            />
          );
        })}

        <motion.circle
          cx="150"
          cy="150"
          r="60"
          fill="#f2f1ec"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.18, 0.06] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.45 }}
        />

        <motion.path
          d="M162 40 L118 158 H150 L138 260 L192 132 H158 Z"
          fill="none"
          stroke="#f2f1ec"
          strokeWidth="1.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.path
          d="M162 40 L118 158 H150 L138 260 L192 132 H158 Z"
          fill="#e7e2c9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.9, 0] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </svg>
      <p className="absolute bottom-0 text-center num-tag w-full">3,000+ concurrent users, zero downtime</p>
    </div>
  );
}
