import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink text-paper">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <OtherProjects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
