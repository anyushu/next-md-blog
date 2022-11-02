import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  href?: string
  children: ReactNode
}

const Button = ({ href, children }: Props) => {
  if (href) {
    return (
      <Link href={href} className="btn btn-primary">
        {children}
      </Link>
    )
  } else {
    return (
      <button type="button" className="btn btn-primary">
        {children}
      </button>
    )
  }
}

export default Button
