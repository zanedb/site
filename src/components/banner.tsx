'use client'

import { useSearchParams } from 'next/navigation'

export default function Banner() {
  const searchParams = useSearchParams()
  const enabled = searchParams.get('banner')

  return enabled !== null ? (
    <marquee className="py-1 border-y-2 border-gray-800 text-black bg-[#89CC04] uppercase text-sm tracking-widest">
      HIRE ME &middot; hire me &middot; hire me &middot; hire me &middot; hire
      me &middot; hire me &middot; hire me &middot; hire me &middot; hire me
      &middot; hire me &middot; hire me &middot; hire me &middot; hire me
      &middot; hire me &middot; hire me &middot; hire me &middot; hire me
      &middot; hire me &middot; hire me &middot; hire me &middot; hire me
      &middot; hire me &middot; hire me &middot; hire me
    </marquee>
  ) : (
    <></>
  )
}
