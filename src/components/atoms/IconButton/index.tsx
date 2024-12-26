import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'

export interface IconButtonProps {
  iconSrc: string
  text?: string
  className?: string
}

const IconButton = ({ iconSrc, text, className }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        'group flex items-center border border-grey-200 rounded text-base font-medium',
        'hover:border-sky-300 focus:border-sky-300 focus:outline-none focus-visible:outline-none',
        text ? 'gap-1 px-2.5 py-1.5' : 'p-1.5',
        className,
      )}
    >
      <SvgImage
        src={iconSrc}
        width='24'
        height='24'
        className='fill-grey-400 group-hover:fill-sky-400 group-focus:fill-sky-400'
      />
      {text && (
        <span className='text-grey-400 group-hover:text-sky-400 group-focus:text-sky-400'>
          {text}
        </span>
      )}
    </button>
  )
}

export default IconButton
