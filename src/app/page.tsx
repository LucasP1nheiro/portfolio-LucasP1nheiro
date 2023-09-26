import getMyAge from './utils/getMyAge'

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <div className="mx-auto flex h-screen w-3/4 flex-col items-start justify-center gap-4 p-36">
        <h1 className="text-bold bg-gradient-to-r from-[#B993D6] to-[#8CA6DB] bg-clip-text text-5xl font-semibold text-transparent">
          Hi, my name is Lucas Pinheiro
        </h1>
        <h3 className="text-3xl text-secondary">
          I&apos;m a {getMyAge()} y/o developer from 🇧🇷 Brazil.
        </h3>
      </div>
    </main>
  )
}
