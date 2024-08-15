import { ReactNode } from 'react'

export default function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col md:flex-row py-12 md:py-24">
      <div>
        <h2 className="sticky top-4 md:ps-24 text-3xl font-semibold md:pr-4 md:text-right">
          {title}
        </h2>
      </div>
      <div className="bg-slate-100 dark:bg-gray-950 rounded-lg p-8 mt-4 md:mt-0">
        {children}
      </div>
    </section>
  )
}
