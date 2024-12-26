import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'dangerouslySetInnerHTML'
  > {
  iconSrc?: string
  wrapperClassName?: string
}

const Input = ({
  iconSrc,
  className,
  wrapperClassName,
  ...props
}: InputProps) => {
  return (
    <div className={twMerge('relative', wrapperClassName)}>
      <input
        {...props}
        className={twMerge(
          'peer w-full px-4 py-2 border border-grey-200 rounded text-sm',
          'hover:border-sky-300',
          'focus:border-sky-300 focus:outline-none focus-visible:outline-none',
          'placeholder:text-gray-300',
          iconSrc && 'pl-9',
          className,
        )}
      />
      {iconSrc && (
        <SvgImage
          src={iconSrc}
          className='absolute inset-y-0 left-0 flex items-center pl-3 fill-grey-300 peer-focus:fill-sky-400'
          width='16'
          height='16'
        />
      )}
    </div>
  )
}

export default Input
