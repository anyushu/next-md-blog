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
        <a className="inline-block border border-pink py-3 px-8 leading-4 text-pink transition-all hover:bg-pink hover:text-slate-50">
          {children}
        </a>
      </Link>
    )
  } else {
    return (
      <button
        type="button"
        className="inline-block border border-pink py-3 px-8 leading-4 text-pink transition-all hover:bg-pink hover:text-slate-50"
      >
        {children}
      </button>
    )
  }
}

export default Button
