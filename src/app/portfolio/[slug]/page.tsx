import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getProjects } from '@/app/portfolio/utils'
import { baseUrl } from '@/app/sitemap'

export async function generateStaticParams() {
  let posts = getProjects()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: any) {
  let project = getProjects().find((project) => project.slug === params.slug)
  // @ts-ignore
  if (!project) return

  let { title, summary: description, image } = project.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${baseUrl}/portfolio/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }: { params: { slug: string } }) {
  let project = getProjects().find((project) => project.slug === params.slug)

  if (!project) notFound()

  return (
    <section
      style={{
        // @ts-expect-error custom properties
        '--accent-color': project.metadata.color,
      }}
    >
      <div className="flex flex-row">
        <h1>{project.metadata.title}</h1>
        {project.metadata.link ? (
          <Link
            className={`flex items-center gap-2 rounded-full bg-[var(--accent-color)] px-4 py-2 text-white transition-shadow hover:shadow-[0_0_0_1px_white,0_0_0_3px_var(--accent-color)] dark:hover:shadow-[0_0_0_1px_black,0_0_0_3px_var(--accent-color)]`}
            href={project.metadata.link}
          >
            View site →
          </Link>
        ) : null}
      </div>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm"></div>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}
