import Link from 'next/link'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Link
        href="/"
        className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 inline-block transition-transform hover:-translate-x-2 duration-300"
      >
        ← @zanedb
      </Link>
      {children}
    </>
  )
}
