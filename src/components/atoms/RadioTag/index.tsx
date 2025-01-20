import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RadioTagProps extends HTMLProps<HTMLInputElement> {
  children: ReactNode
}

const RadioTag = ({ children, className, ...props }: RadioTagProps) => {
  return (
    <label
      className={twMerge(
        'text-base rounded-full border border-grey-300 text-grey-300 py-0.5 px-4 text-center cursor-pointer',
        'has-[:checked]:border-sky-400 has-[:checked]:bg-sky-400 has-[:checked]:text-white',
        className,
      )}
    >
      <input type='radio' className='hidden' {...props} />
      <span>{children}</span>
    </label>
  )
}

export default RadioTag
