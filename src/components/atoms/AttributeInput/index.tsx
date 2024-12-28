import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface AttributeInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'dangerouslySetInnerHTML' | 'type'
  > {
  isError?: boolean
}

const AttributeInput = ({
  className,
  placeholder = '0',
  isError,
  ...props
}: AttributeInputProps) => {
  return (
    <input
      {...props}
      type='number'
      placeholder={placeholder}
      className={twMerge(
        'w-full md:px-2 py-1 text-xs text-center border-b border-transparent',
        '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
        'hover:border-sky-200',
        'focus:bg-sky-50/50 focus:border-sky-200 focus:outline-none focus-visible:outline-none',
        'placeholder:text-gray-300',
        className,
        isError &&
          'border-red-300 bg-red-50 focus:bg-red-50 focus:border-red-300',
      )}
    />
  )
}

export default AttributeInput
