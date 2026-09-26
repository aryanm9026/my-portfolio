"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section className="py-16 md:py-20 border-t hairline">
      <div className="container-page grid md:grid-cols-12 gap-10 md:gap-6">
        <div className="md:col-span-4">
          <p className="num-tag">Stack</p>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <p className="text-sm text-graphite mb-3">{group.title}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-mono text-paper border hairline rounded-full px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
