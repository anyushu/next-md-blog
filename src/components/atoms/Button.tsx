import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  href?: string
  children: ReactNode
}

const Button = ({ href, children }: Props) => {
  if (href) {
    return (
      <Link
        href={href}
        className="border-pink text-pink hover:bg-pink inline-block border py-3 px-8 leading-4 transition-all hover:text-slate-50"
      >
        {children}
      </Link>
    )
  } else {
    return (
      <button
        type="button"
        className="border-pink text-pink hover:bg-pink inline-block border py-3 px-8 leading-4 transition-all hover:text-slate-50"
      >
        {children}
      </button>
    )
  }
}

export default Button
