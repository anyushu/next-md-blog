import type { FC, ReactNode } from 'react'

interface Props {
  h: number
  className?: string
  children: ReactNode
}

const Heading: FC<Props> = ({ h, className, children }) => {
  switch (h) {
    case 1:
      return <h1 className={`text-4xl md:text-5xl ${className || ''}`}>{children}</h1>
    case 2:
      return <h2 className={`text-2xl md:text-3xl ${className || ''}`}>{children}</h2>
    case 3:
      return <h3 className={`text-xl md:text-2xl ${className || ''}`}>{children}</h3>
    case 4:
      return <h4 className={`text-lg md:text-xl ${className || ''}`}>{children}</h4>
    case 5:
      return <h5 className={`text-base md:text-base ${className || ''}`}>{children}</h5>
    default:
      return <p className={`text-base ${className || ''}`}>{children}</p>
  }
}

export default Heading
