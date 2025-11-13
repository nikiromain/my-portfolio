import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectsHero from '@/components/ProjectsHero'
import About from '@/components/About'
import VideoExpand from '@/components/VideoExpand'
import Skills from '@/components/Skills'
import Cards3D from '@/components/Cards3D'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsHero />
      <About />
      <VideoExpand />
      <Skills />
      <Cards3D />
      <Contact />
    </main>
  )
}
