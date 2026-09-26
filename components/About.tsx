"use client";

import { motion } from "framer-motion";
import { education, profile } from "@/lib/data";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t hairline">
      <div className="container-page grid md:grid-cols-12 gap-10 md:gap-6">
        <div className="md:col-span-4">
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="num-tag mb-6"
          >
            About
          </motion.p>
          <motion.img
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            src={profile.avatarPlaceholder}
            alt={profile.name}
            width={120}
            height={120}
            className="rounded-full opacity-80"
          />
        </div>

        <div className="md:col-span-8">
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-2xl md:text-3xl leading-snug text-paper max-w-2xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-14 border-t hairline pt-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"
          >
            <div>
              <p className="text-paper font-medium">{education.school}</p>
              <p className="text-bone text-sm mt-1">{education.degree}</p>
              <p className="text-graphite text-sm mt-1 font-mono">{education.detail}</p>
            </div>
            <p className="text-graphite text-sm font-mono whitespace-nowrap">{education.period}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
