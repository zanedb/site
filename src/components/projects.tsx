import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/app/portfolio/utils'

export default function Projects() {
  const projects = getProjects()

  return (
    <section className="my-2">
      {projects
        .sort((a, b) => {
          if (a.metadata.order < b.metadata.order) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="flex gap-4 mb-4 md:gap-16 bg-neutral-100 dark:bg-neutral-800 transition-shadow rounded-xl hover:shadow-[0_0_0_2px_var(--accent-color)]"
            style={{
              // @ts-expect-error custom properties
              '--accent-color': project.metadata.color,
            }}
          >
            <div className="p-4 flex justify-between w-full">
              <div>
                <h3 className="font-medium pb-1">{project.metadata.title}</h3>
                <p className="text-gray-700 dark:text-gray-50 text-sm">
                  {project.metadata.summary}
                </p>
              </div>
              {project.metadata.previewImage && (
                <Image
                  src={project.metadata.previewImage}
                  alt={project.metadata.title}
                  className="h-fit w-fit max-w-16 max-h-16"
                  width={128}
                  height={128}
                />
              )}
            </div>
          </Link>
        ))}
    </section>
  )
}
