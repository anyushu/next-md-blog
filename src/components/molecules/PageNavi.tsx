import Link from 'next/link'

import { PER_PAGE } from '@/utils/blog-helper'

type props = {
  totalCount: number
  currentPage: number
}

const PageNavi = ({ totalCount, currentPage }: props) => {
  const isPrev = currentPage > 1
  const isNext = Math.ceil(totalCount / PER_PAGE) !== currentPage

  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between">
      {isPrev && (
        <Link href={`/page/${currentPage - 1}`} className="mr-auto underline hover:no-underline">
          Prev Page
        </Link>
      )}
      {isNext && (
        <Link href={`/page/${currentPage + 1}`} className="ml-auto underline hover:no-underline">
          Next Page
        </Link>
      )}
    </div>
  )
}

export default PageNavi
