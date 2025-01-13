import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import ChevronDownIcon from '@@/public/assets/icons/chevron-down.svg'
import CaretSquareDownIcon from '@@/public/assets/icons/caret-square-down.svg'
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'
import { Trigger } from '@radix-ui/react-collapsible'

export interface CollapseButtonProps
  extends ComponentPropsWithRef<typeof Trigger> {
  children: ReactNode
  className?: string
  arrowPosition?: 'left' | 'right'
}

const CollapseButton = ({
  children,
  className,
  arrowPosition = 'left',
  ...props
}: CollapseButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center w-full p-2 py-1 gap-2 hover:bg-sky-50 rounded text-left group',
        arrowPosition === 'left'
          ? 'flex-row justify-start'
          : 'flex-row-reverse justify-between',
        className,
      )}
      type='button'
      {...props}
    >
      <SvgImage
        src={
          arrowPosition === 'left'
            ? CaretSquareDownIcon.src
            : ChevronDownIcon.src
        }
        className='fill-grey-500 w-4 h-4 shrink-0 grow-0 group-data-[state="closed"]:-rotate-90 transform'
        width='16'
        height='16'
      />
      {children}
    </button>
  )
}

export default forwardRef(CollapseButton)
