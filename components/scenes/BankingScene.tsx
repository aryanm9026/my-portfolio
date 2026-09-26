"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const rows = [
  { label: "DR", acct: "4471-0091", amt: "-2,400.00" },
  { label: "CR", acct: "4471-0044", amt: "+2,400.00" },
  { label: "DR", acct: "4471-0091", amt: "-118.50" },
  { label: "CR", acct: "4471-0212", amt: "+118.50" },
];

export default function BankingScene() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <motion.rect
          x="20"
          y="20"
          width="360"
          height="360"
          rx="4"
          stroke="#f2f1ec"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        {rows.map((row, i) => {
          const y = 90 + i * 62;
          return (
            <g key={i}>
              <motion.line
                x1="44"
                y1={y}
                x2="356"
                y2={y}
                stroke="#3a3a35"
                strokeWidth="1"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                style={{ transformOrigin: "44px center" }}
              />
              <motion.text
                x="44"
                y={y - 12}
                fill="#8a8a84"
                fontSize="11"
                fontFamily="var(--font-mono)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
              >
                {row.label} · {row.acct}
              </motion.text>
              <motion.text
                x="356"
                y={y - 12}
                fill={row.amt.startsWith("-") ? "#c9c7bd" : "#e7e2c9"}
                fontSize="11"
                fontFamily="var(--font-mono)"
                textAnchor="end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.15 }}
              >
                {row.amt}
              </motion.text>
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="num-tag mb-1">Ledger balance derived live</p>
        <AnimatedCounter
          to={128430.5}
          decimals={2}
          prefix="₹"
          duration={1.6}
          className="font-mono text-2xl text-paper"
        />
      </div>
    </div>
  );
}
