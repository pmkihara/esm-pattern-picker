import NavBar from '@/components/molecules/NavBar'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface WorkspaceLayoutProps {
  children: ReactNode
}

const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  return (
    <div
      className={twMerge(
        'w-full min-h-dvh h-dvh flex flex-col',
        'lg:flex-row-reverse',
      )}
    >
      <div className='grow max-h-[calc(100dvh-60px)] lg:max-h-dvh'>
        {children}
      </div>
      <NavBar />
    </div>
  )
}

export default WorkspaceLayout
