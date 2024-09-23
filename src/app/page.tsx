import Image from 'next/image'
import Typist from '@/components/typist'

export default async function Home() {
  const res = await fetch('https://api.zanedb.com/api/me')
  const me = await res.json()

  return (
    <main className="p-8 md:p-12 max-w-screen-md w-full mx-auto">
      <section className="flex justify-between items-center">
        <div className="text-2xl md:text-3xl">
          <h1>Hey, I’m</h1>
          <h1 className="font-medium">
            <Typist speed={180} />
          </h1>
          <p className="mt-4 max-w-min rounded-full px-2 py-1 text-xs bg-[#d1f0ff] text-[#005dff]">
            he/him
          </p>
        </div>
        <Image
          src="https://github.com/zanedb.png"
          width={136}
          height={136}
          className="rounded-full md:w-44 md:h-44 ease-in-out duration-300 hover:-translate-y-1 hover:shadow-sm hover:-skew-x-2 active:skew-x-2"
          priority={true}
          alt="Me asf"
        />
      </section>
      <section className="mt-6 pt-4 border-t-2">
        <p className="break-words">
          I’m a {me.age}-year-old web designer and musician, studying multimedia
          arts at San Francisco State University.
        </p>
      </section>
      <section className="mt-6">
        <h3 className="text-lg font-bold">Past Work</h3>
      </section>
    </main>
  )
}
