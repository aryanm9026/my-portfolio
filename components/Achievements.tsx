"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import AnimatedCounter from "./scenes/AnimatedCounter";

export default function Achievements() {
  return (
    <section className="py-24 border-t hairline">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <p className="num-tag">Track record</p>
          <div className="flex items-baseline gap-2">
            <AnimatedCounter to={4} className="font-display text-4xl text-paper" />
            <span className="text-graphite text-sm">national / global recognitions</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t hairline pt-5"
            >
              <p className="text-paper font-medium mb-2 leading-snug">{a.title}</p>
              <p className="text-sm text-graphite leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
