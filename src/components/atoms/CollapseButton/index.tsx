import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import ChevronDownIcon from '@@/public/assets/icons/chevron-down.svg'
import CaretSquareDownIcon from '@@/public/assets/icons/caret-square-down.svg'
import { ReactNode } from 'react'

export interface CollapseButtonProps {
  children: ReactNode
  isOpen: boolean
  onClick: () => void
  className?: string
  arrowPosition?: 'left' | 'right'
}

const CollapseButton = ({
  children,
  isOpen,
  onClick,
  className,
  arrowPosition = 'left',
}: CollapseButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center w-full p-2 py-1 gap-2 hover:bg-sky-50 rounded text-left',
        arrowPosition === 'left'
          ? 'flex-row justify-start'
          : 'flex-row-reverse justify-between',
        className,
      )}
      onClick={onClick}
      type='button'
    >
      <SvgImage
        src={
          arrowPosition === 'left'
            ? CaretSquareDownIcon.src
            : ChevronDownIcon.src
        }
        className={twMerge(
          'fill-grey-500 w-4 h-4 shrink-0 grow-0',
          isOpen ? '' : 'transform -rotate-90',
        )}
        width='16'
        height='16'
      />
      {children}
    </button>
  )
}

export default CollapseButton
