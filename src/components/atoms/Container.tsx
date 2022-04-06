import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return <div className={`container px-3 md:px-0 mx-auto ${className}`}>{children}</div>
}

export default Container
