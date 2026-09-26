"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* one quiet abstract mark, not decoration-for-its-own-sake: a slow-turning
          compass ring, echoing the "navigation / infrastructure" thread of the work */}
      <motion.svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[640px] h-[640px] opacity-[0.14] md:opacity-[0.2]"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        <circle cx="300" cy="300" r="280" stroke="#f2f1ec" strokeWidth="0.75" fill="none" />
        <circle cx="300" cy="300" r="200" stroke="#f2f1ec" strokeWidth="0.75" fill="none" />
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i / 48) * Math.PI * 2;
          const long = i % 6 === 0;
          const r1 = 280;
          const r2 = long ? 255 : 268;
          return (
            <line
              key={i}
              x1={300 + r1 * Math.cos(angle)}
              y1={300 + r1 * Math.sin(angle)}
              x2={300 + r2 * Math.cos(angle)}
              y2={300 + r2 * Math.sin(angle)}
              stroke="#f2f1ec"
              strokeWidth={long ? 1.25 : 0.6}
            />
          );
        })}
      </motion.svg>

      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="num-tag mb-6"
        >
          {profile.location} — available for full-time &amp; internship roles
        </motion.p>

        <motion.div variants={container} initial="hidden" animate="show">
          <h1 className="font-display font-medium leading-[0.92] tracking-tightest text-[15vw] md:text-[7.2rem]">
            <span className="block overflow-hidden">
              <motion.span variants={line} className="block">
                Aryan
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="block text-graphite">
                Mishra
              </motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 max-w-xl"
        >
          <p className="text-lg md:text-xl text-bone leading-relaxed">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-flare transition-colors focus-ring"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-sm text-paper hover:bg-white/5 transition-colors focus-ring"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
