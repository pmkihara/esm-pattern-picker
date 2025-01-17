import { LabelHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Label = ({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={twMerge('font-bold text-sm', className)} {...props}>
      {children}
    </label>
  )
}

export default Label
