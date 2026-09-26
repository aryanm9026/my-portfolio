"use client";

import { nav, profile } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b hairline backdrop-blur-md bg-ink/70">
      <div className="container-page flex items-center justify-between h-16">
        <a
          href="#top"
          className="font-display text-sm tracking-tight text-paper focus-ring"
        >
          {profile.name.split(" ")[0]}
          <span className="text-graphite">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-bone hover:text-paper transition-colors focus-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm border hairline rounded-full px-4 py-1.5 text-paper hover:bg-paper hover:text-ink transition-colors focus-ring"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
