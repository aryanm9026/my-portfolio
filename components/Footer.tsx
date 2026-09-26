import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t hairline py-8">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-graphite font-mono">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js, Tailwind CSS &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
