import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={`container px-3 md:px-0 mx-auto ${className}`}>{children}</div>
}

export default Container
