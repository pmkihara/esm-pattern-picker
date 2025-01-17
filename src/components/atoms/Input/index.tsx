import { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import ErrorMessage from '../ErrorMessage'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  iconSrc?: string
  wrapperClassName?: string
  errorMsg?: string
}

const Input = ({
  iconSrc,
  className,
  wrapperClassName,
  errorMsg,
  ...props
}: InputProps) => {
  return (
    <>
      <div className={twMerge('relative', wrapperClassName)}>
        <input
          {...props}
          className={twMerge(
            'peer w-full px-4 py-2 border border-grey-200 rounded text-sm',
            'hover:border-sky-300',
            'focus:border-sky-300 focus:outline-none focus-visible:outline-none',
            'placeholder:text-grey-300',
            'read-only:hover:border-grey-200 read-only:focus:border-grey-200',
            iconSrc && 'pl-9',
            errorMsg &&
              'border-red-300 focus:border-red-500 hover:border-red-500',
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
      <ErrorMessage message={errorMsg} />
    </>
  )
}

export default Input
