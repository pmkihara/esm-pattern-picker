import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TopBarProps {
  children: ReactNode
  className?: string
}

const TopBar = ({ children, className }: TopBarProps) => {
  return (
    <div
      className={twMerge(
        'w-full h-15 bg-sky-200 px-4 md:px-10 grow-0 shrink-0 flex items-center justify-between',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default TopBar
