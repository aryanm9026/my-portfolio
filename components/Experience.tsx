"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t hairline">
      <div className="container-page">
        <p className="num-tag mb-10">Experience</p>

        <div className="border-t hairline">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`grid md:grid-cols-12 gap-4 md:gap-6 py-8 border-b hairline ${
                item.placeholder ? "opacity-60" : ""
              }`}
            >
              <div className="md:col-span-3">
                <p className="text-graphite text-sm font-mono">{item.period}</p>
                <p className="text-graphite text-sm mt-1">{item.location}</p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h4 className="text-paper text-lg font-medium">{item.role}</h4>
                  <span className="text-bone text-sm">— {item.org}</span>
                  {item.placeholder && (
                    <span className="text-xs font-mono text-graphite border hairline rounded-full px-2 py-0.5">
                      placeholder — edit me
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5 mb-3">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm text-bone">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono text-graphite border hairline rounded-full px-2.5 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
