import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        'px-6 py-10 bg-white rounded-2xl shadow-md shadow-sky-950/10',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
