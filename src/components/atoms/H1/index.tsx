import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

const H1 = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      {...props}
      className={twMerge(
        'font-header text-2xl font-bold text-sky-600',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export default H1
