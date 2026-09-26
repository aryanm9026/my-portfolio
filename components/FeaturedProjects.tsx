"use client";

import { featuredProjects } from "@/lib/data";
import ProjectPanel from "./scenes/ProjectPanel";

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-t hairline">
      <div className="container-page pt-24 pb-4">
        <p className="num-tag mb-3">Selected work</p>
        <h2 className="font-display text-4xl md:text-5xl text-paper max-w-2xl">
          Four builds, four different kinds of pressure.
        </h2>
      </div>

      {featuredProjects.map((project, i) => (
        <ProjectPanel key={project.id} project={project} reversed={i % 2 === 1} />
      ))}
    </section>
  );
}
