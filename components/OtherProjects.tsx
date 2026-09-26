"use client";

import { motion } from "framer-motion";
import { otherProjects } from "@/lib/data";

export default function OtherProjects() {
  return (
    <section className="py-24 border-t hairline">
      <div className="container-page">
        <p className="num-tag mb-10">Also shipped</p>
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border hairline rounded-2xl p-7"
            >
              <div className="flex items-baseline justify-between mb-3 gap-4">
                <h4 className="text-paper text-lg font-medium">{p.name}</h4>
                <span className="text-xs font-mono text-graphite whitespace-nowrap">{p.period}</span>
              </div>
              <p className="text-sm text-bone leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono text-graphite border hairline rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
