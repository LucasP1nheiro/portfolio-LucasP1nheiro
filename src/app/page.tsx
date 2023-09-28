import About from './components/About'
import getMyAge from './utils/getMyAge'

export default function Home() {
  return (
    <main className="min-h-screen w-screen py-12">
      <div className="mx-auto flex h-screen w-3/5 flex-col items-start justify-center gap-8">
        <h1 className="bg-gradient-to-r from-[#B993D6] to-[#8CA6DB] bg-clip-text text-5xl font-bold text-transparent">
          Hi, my name is Lucas Pinheiro
        </h1>
        <h3 className="text-2xl text-secondary">
          I&apos;m a {getMyAge()} y/o developer from 🇧🇷 Brazil.
        </h3>
      </div>
      <About />
    </main>
  )
}
