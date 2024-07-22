import Projects from '@/components/projects'
import Image from 'next/image'

export default async function Home() {
  const age = await getAge()

  return (
    <main className="p-8 pt-0 md:p-12 max-w-screen-lg w-full mx-auto">
      <div className="grid gap-8 md:gap-16 md:grid-cols-2">
        <Image
          src="/hero.png"
          width={2260}
          height={3014}
          className="rounded-lg max-w-full"
          priority={true}
          alt="Me at the palace"
        />
        <div className="">
          <h1 className="text-6xl max-sm:text-5xl font-bold">Hi, I’m Zane.</h1>
          <p className="text-xl md:text-2xl pt-4">
            I’m a {age}-year-old web designer and musician, studying multimedia
            arts.
          </p>
        </div>
      </div>
      {/*
      <h1 className="text-4xl max-sm:text-3xl mb-2 font-semibold">
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
      <Projects />*/}
    </main>
  )
}

async function getAge() {
  const res = await fetch('https://api.zanedb.com/api/age')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()
  return json.age
}
