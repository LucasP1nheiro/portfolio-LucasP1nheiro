import Skills from '@/components/Skills'
import About from '../components/About'
import Contact from '@/components/Contact'
import MainContent from '@/components/MainContent'

export default function Home() {
  return (
    <main className="min-h-screen w-screen space-y-36 p-6 py-12">
      <MainContent />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
