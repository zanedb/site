'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function Banner() {
  const searchParams = useSearchParams()
  const enabled = searchParams.get('banner')

  return (
    <Suspense>
      {enabled !== null ? (
        <div className="py-1 border-y-2 border-gray-800 text-black bg-[#89CC04] uppercase text-sm tracking-widest whitespace-nowrap overflow-hidden">
          HIRE ME &middot; hire me &middot; hire me &middot; hire me &middot;
          hire me &middot; hire me &middot; hire me &middot; hire me &middot;
          hire me &middot; hire me &middot; hire me &middot; hire me &middot;
          hire me &middot; hire me &middot; hire me &middot; hire me &middot;
          hire me &middot; hire me &middot; hire me &middot; hire me &middot;
          hire me &middot; hire me &middot; hire me &middot; hire me
        </div>
      ) : (
        <></>
      )}
    </Suspense>
  )
}
