'use client'

import Spinner from '../Spinner'

export interface LoadingOverlayProps {
  isLoading: boolean
}

const LoadingOverlay = ({ isLoading }: LoadingOverlayProps) => {
  if (!isLoading) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-[1px] lg:left-60 '>
      <Spinner color='grey' size={48} />
    </div>
  )
}

export default LoadingOverlay
