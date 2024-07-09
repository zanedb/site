import Projects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-12 max-w-screen-lg w-full mx-auto max-sm:p-8 max-sm:pt-10">
      <h1 className="text-4xl max-sm:text-3xl mb-2">
        Hi, I’m{' '}
        <Image
          src="https://github.com/zanedb.png"
          width={32}
          height={32}
          alt="Profile picture"
          className="inline-flex relative bottom-0.5 mr-1 rounded-full"
        />
        <span className="text-blue-500">Zane</span>.
      </h1>
      <p className="text-2xl">
        I’ve worn many hats. And done a lot of things too.
      </p>
      <Projects />
    </main>
  )
}
