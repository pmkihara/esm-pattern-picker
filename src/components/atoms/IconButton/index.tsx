import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import { ComponentPropsWithRef } from 'react'

export interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  iconSrc: string
  text?: string
  className?: string
  textClassName?: string
  fakeInput?: boolean
}

const IconButton = ({
  iconSrc,
  text,
  className,
  textClassName,
  fakeInput = false,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        'group flex items-center border border-grey-200 rounded',
        'hover:border-sky-300 focus:border-sky-300 focus:outline-none focus-visible:outline-none',
        text ? 'gap-2 px-3 py-1.5' : 'p-1.5',
        fakeInput
          ? 'bg-white text-sm text-grey-300 py-2 h-[38px]'
          : 'text-base font-medium',
        className,
      )}
      {...props}
    >
      <SvgImage
        src={iconSrc}
        width={fakeInput ? '16' : '24'}
        height={fakeInput ? '16' : '24'}
        className={twMerge(
          ' group-focus:fill-sky-400',
          fakeInput
            ? 'fill-grey-300 -ml-px'
            : 'fill-grey-400 group-hover:fill-sky-400',
        )}
      />
      {text && (
        <span
          className={twMerge(
            fakeInput
              ? 'text-grey-300 group-focus:text-black ml-px'
              : 'text-grey-400 group-hover:text-sky-400 group-focus:text-sky-400',
            textClassName,
          )}
        >
          {text}
        </span>
      )}
    </button>
  )
}

export default IconButton
