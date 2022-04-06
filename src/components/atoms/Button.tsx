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
        <a className="inline-block py-3 px-8 leading-4 text-white bg-gray-700 hover:bg-gray-900 dark:bg-black-800 transition-all">
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <button
        type="button"
        className="inline-block py-3 px-8 leading-4 text-white bg-gray-700 hover:bg-gray-900 dark:bg-black-800 transition-all"
      >
        {children}
      </button>
    )
  }
}

export default Button
