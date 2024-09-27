import { ImageResponse } from 'next/og'
import { getProjects } from '../portfolio/utils'

export async function GET(request: Request) {
  let url = new URL(request.url)
  let slug = url.searchParams.get('project') || ''

  let project = getProjects().find((project) => project.slug === slug)
  if (!project) {
    return new Response('Not found', { status: 404 })
  }

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        {/*<div tw="flex flex-col w-full py-12 px-4 p-8">
          <h2 tw="flex flex-col text-4xl md:text-5xl font-bold tracking-tight text-left">
            {project.metadata.title}
          </h2>
          <p tw="text-lg text-gray-600 mt-4 md:mt-0">
            {project.metadata.summary}
          </p>
        </div>*/}
        {project.metadata.previewImage && (
          <img
            src={`http://zanedb.com${project.metadata.previewImage}`}
            alt="Project icon"
            tw="w-64 h-64 shadow-sm rounded-lg"
          />
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
