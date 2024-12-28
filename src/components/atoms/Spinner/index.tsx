import SpinnerWhiteIcon from '@@/public/assets/icons/spinner-white.svg'
import SpinnerGreyIcon from '@@/public/assets/icons/spinner-grey.svg'
import SpinnerSkyIcon from '@@/public/assets/icons/spinner-sky.svg'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export interface SpinnerProps {
  color?: 'white' | 'grey' | 'sky'
  size?: number
  className?: string
}

const Spinner = ({ color = 'white', size = 24, className }: SpinnerProps) => {
  const spinnerIcons = {
    white: SpinnerWhiteIcon,
    grey: SpinnerGreyIcon,
    sky: SpinnerSkyIcon,
  }
  return (
    <Image
      src={spinnerIcons[color].src}
      height={size}
      width={size}
      alt='spinner'
      className={twMerge('animate-spin fill-white/50', className)}
    />
  )
}

export default Spinner
