import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getProjects } from '@/app/portfolio/utils'
import { baseUrl } from '@/app/sitemap'
import { domaineText } from '@/lib/fonts'

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }) {
  let project =
    getProjects().find((project) => project.slug === params.slug) ||
    getProjects()[0]

  let { title, summary: description } = project.metadata
  let ogImage = `${baseUrl}/og?project=${project.slug}`

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

export default async function Project({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug)

  if (!project) notFound()

  return (
    <section
      style={{
        // @ts-expect-error custom properties
        '--accent-color': project.metadata.color,
      }}
    >
      <div className="mt-8 flex flex-row justify-between items-baseline">
        <h1 className="text-2xl md:text-3xl font-bold">
          {project.metadata.title}
        </h1>
        {project.metadata.link ? (
          <Link
            className={`rounded-full bg-[var(--accent-color)] dark:opacity-90 w-fit mt-4 md:mt-0 px-4 py-2 text-sm text-white text-center transition-shadow hover:shadow-[0_0_0_1px_white,0_0_0_3px_var(--accent-color)] dark:hover:shadow-[0_0_0_1px_black,0_0_0_3px_var(--accent-color)]`}
            href={project.metadata.link}
          >
            Visit »
          </Link>
        ) : null}
      </div>
      <div className="flex items-center justify-between text-sm"></div>
      <article className={`prose ${domaineText.className}`}>
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}
