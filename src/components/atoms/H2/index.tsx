import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

const H2 = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      {...props}
      className={twMerge(
        'font-header text-xl font-bold text-sky-600',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export default H2
