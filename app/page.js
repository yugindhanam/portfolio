import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import AmbientBackground from "@/components/ui/AmbientBackground";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen">
      <ScrollProgressBar />
      <AmbientBackground />
      <ScrollToTop />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
