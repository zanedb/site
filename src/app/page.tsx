import Section from '@/components/section'
import Image from 'next/image'
import { haffer } from '@/lib/fonts'
import { getAge } from '@/lib/util'

export default async function Home() {
  const age = await getAge()

  return (
    <main className="p-8 md:p-12 md:pt-16 max-w-screen-lg w-full mx-auto">
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
          <p className="text-xl md:text-2xl pt-4">
            In the past, I’ve run hackathons, done other stuff, and yeah. This
            is going to be completely different text soon.
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-8 max-w-full">
        <Section title="Projects">
          <div className="flex flex-col items-center mb-4 -mt-12">
            <Image
              src="/assets/spotifriend-icon.png"
              width={128}
              height={128}
              alt="Spotifriend icon"
              className="rounded-3xl mb-4"
            />
            <h3 className="text-3xl font-medium mb-2">Spotifriend</h3>
          </div>
          <p className="text-lg md:text-xl mb-2">
            An iOS app that brings the “Friend Activity” section of the Spotify
            desktop app to your phone.
          </p>
          <p className="text-lg md:text-xl mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            elementum scelerisque elit in convallis. In ut urna in libero
            venenatis facilisis ut sit amet velit. Nunc tempor arcu id orci
            mollis, eget ornare nisl pellentesque.
          </p>
          <p className="text-lg md:text-xl mb-2">
            Vestibulum ut pellentesque dolor. In volutpat ultrices magna a
            lacinia. Nunc at leo eros. Pellentesque imperdiet, lectus vitae
            commodo feugiat, neque nibh iaculis risus, a eleifend neque dolor a
            mauris.
          </p>
          <p className="text-lg md:text-xl">
            Ut mattis nunc id sem fermentum tincidunt. Nam consequat augue
            justo. Mauris ut magna mattis, ullamcorper massa vitae, lacinia
            nisl. Donec pretium non massa et tincidunt. Donec sed laoreet metus.
            Aliquam tincidunt ultrices libero pretium dictum. Praesent nec
            consequat turpis. Praesent placerat nec justo at eleifend.
          </p>
        </Section>
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
