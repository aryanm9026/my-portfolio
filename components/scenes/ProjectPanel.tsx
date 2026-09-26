"use client";

import { motion } from "framer-motion";
import type { FeaturedProject } from "@/lib/data";
import BankingScene from "./BankingScene";
import MapsScene from "./MapsScene";
import LuxenraScene from "./LuxenraScene";
import BlitzschlagScene from "./BlitzschlagScene";

const scenes = {
  banking: BankingScene,
  maps: MapsScene,
  luxenra: LuxenraScene,
  blitzschlag: BlitzschlagScene,
};

export default function ProjectPanel({
  project,
  reversed,
}: {
  project: FeaturedProject;
  reversed?: boolean;
}) {
  const Scene = scenes[project.scene];

  return (
    <div className="py-20 md:py-28 border-t hairline first:border-t-0">
      <div
        className={`container-page grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-baseline gap-3 mb-4">
            <span className="num-tag">{project.index}</span>
            <span className="text-sm text-graphite">{project.role} · {project.period}</span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-paper mb-4">{project.name}</h3>
          <p className="text-bone leading-relaxed mb-6 max-w-md">{project.description}</p>

          <ul className="space-y-2.5 mb-6">
            {project.bullets.map((b, i) => (
              <li key={i} className="text-sm text-bone flex gap-3">
                <span className="text-graphite mt-1.5 h-1 w-1 rounded-full bg-graphite shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs font-mono text-graphite border hairline rounded-full px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-5">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-paper underline decoration-graphite underline-offset-4 hover:decoration-paper transition-colors focus-ring"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Scene />
        </motion.div>
      </div>
    </div>
  );
}
