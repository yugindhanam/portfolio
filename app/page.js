import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import CustomCursor from '@/components/ui/CustomCursor'
import AmbientBackground from '@/components/ui/AmbientBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <AmbientBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
