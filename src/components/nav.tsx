'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavigationItem = {
  href: string
  //icon: React.ComponentType
  name: string
}

const navigation: NavigationItem[] = [
  { href: '/', name: 'Home' },
  { href: '/notes', name: 'Notes' },
  { href: '/contact', name: 'Contact' },
]

function useActivePath(): (path: string) => boolean {
  const pathname = usePathname()

  const checkActivePath = (path: string) => {
    return path === pathname
  }

  return checkActivePath
}

export default function Nav() {
  const checkActivePath = useActivePath()

  return (
    <nav className="flex justify-end text-md p-8 md:p-12 max-w-screen-lg w-full mx-auto">
      <ul className="flex flex-row items-center underline-offset-4 *:ml-3 max-sm:*:ml-2">
        {navigation.map(({ href, name }) => (
          <li key={href}>
            <Link
              href={href}
              className={checkActivePath(href) ? 'active underline' : ''}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
