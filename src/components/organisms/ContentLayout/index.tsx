import { ReactNode } from 'react'

interface ContentLayoutProps {
  children: ReactNode
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className='p-4 md:pt-6 md:pb-0 md:px-10 flex-grow h-full max-h-full overflow-auto'>
      {children}
    </div>
  )
}

export default ContentLayout
