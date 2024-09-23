import { getProjects } from '@/app/portfolio/utils'

export const baseUrl = 'https://zanedb.com'

export default async function sitemap() {
  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects]
}
