import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  href?: string
  children: ReactNode
}

const Button = ({ href, children }: Props) => {
  if (href) {
    return (
      <Link href={href}>
        <a className="inline-block bg-gray-700 py-3 px-8 leading-4 text-white transition-all hover:bg-gray-900">
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <button
        type="button"
        className="inline-block bg-gray-700 py-3 px-8 leading-4 text-white transition-all hover:bg-gray-900"
      >
        {children}
      </button>
    )
  }
}

export default Button
