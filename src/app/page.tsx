import Image from 'next/image'
import Typist from '@/components/typist'
import Projects from '@/components/projects'
import { domaineText } from '@/lib/fonts'

export default async function Home() {
  const res = await fetch('https://api.zanedb.com/api/me')
  const me = await res.json()

  return (
    <>
      <div className="bg-accent dark:bg-accentDark absolute -z-10 h-32 md:h-40 rounded-full min-w-full -translate-x-1/2 md:-translate-x-3/4"></div>
      <section className="flex justify-between items-center bg-accent dark:bg-accentDark rounded-full">
        <div className="text-2xl md:text-3xl">
          <h1>Hey, I’m</h1>
          <h1 className="font-medium">
            <Typist speed={180} />
          </h1>
          <p className="mt-4 max-w-min rounded-full px-2 py-1 text-xs bg-motif dark:bg-motifDark dark:text-motifText">
            he/him
          </p>
        </div>
        <Image
          src="https://github.com/zanedb.png"
          width={124}
          height={124}
          className="rounded-full border-4 border-transparent h-32 w-32 md:w-40 md:h-40"
          priority={true}
          alt="Me asf"
        />
      </section>
      <section className="mt-6">
        <p className={`break-words ${domaineText.className} text-lg`}>
          I’m a {me.age}-year-old designer and developer, currently studying
          multimedia arts in BECA at San Francisco State University. I‘m
          currently looking for new projects.
        </p>
      </section>
      <section className="mt-6">
        <h3 className="text-lg font-bold">My Work</h3>
        <Projects />
      </section>
    </>
  )
}
