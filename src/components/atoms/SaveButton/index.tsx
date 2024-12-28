import SaveIcon from '@@/public/assets/icons/save.svg'
import SvgImage from '../SvgImage'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface SaveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const SaveButton = ({ onClick, className, ...props }: SaveButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'group bg-sun-400 rounded-full flex items-center justify-center w-15 h-15 ring-4 ring-white',
        'disabled:bg-sun-50',
        className,
      )}
      {...props}
    >
      <SvgImage
        src={SaveIcon.src}
        className='fill-white group-disabled:fill-sun-300'
        height='24'
        width='24'
      />
      <span className='text-white sr-only group-disabled:text-sun-300'>
        Save
      </span>
    </button>
  )
}

export default SaveButton
