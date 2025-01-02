import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import ChevronDownIcon from '@@/public/assets/icons/chevron-down.svg'

interface CollapseButtonProps {
  title: string
  isOpen: boolean
  onClick: () => void
  iconSrc?: string
  className?: string
}

const CollapseButton = ({
  title,
  isOpen,
  onClick,
  iconSrc,
  className,
}: CollapseButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-between w-full p-2 py-1 gap-4 hover:bg-sky-50 rounded',
        className,
      )}
      onClick={onClick}
      type='button'
    >
      <div className='flex gap-2 items-center'>
        {iconSrc && (
          <SvgImage
            src={iconSrc}
            className='w-4 h-4 fill-sky-950'
            width='16'
            height='16'
          />
        )}
        <span className='text-sm'>{title}</span>
      </div>
      <SvgImage
        src={ChevronDownIcon.src}
        className={twMerge(
          'fill-black w-4 h-4 transition-transform duration-500',
          isOpen ? 'transform rotate-180' : '',
        )}
        width='16'
        height='16'
      />
    </button>
  )
}

export default CollapseButton
