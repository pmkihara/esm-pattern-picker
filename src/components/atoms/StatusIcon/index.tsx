import CheckIcon from '@@/public/assets/icons/check.svg'
import AlertIcon from '@@/public/assets/icons/alert.svg'
import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import { useBreakpoint } from '@/hooks/tailwind'

interface StatusIconProps {
  completed: boolean
}

const StatusIcon = ({ completed }: StatusIconProps) => {
  const isBigPhone = useBreakpoint('sm')
  const isTablet = useBreakpoint('md')

  const getIconSize = () => {
    if (isBigPhone) return '24'
    if (isTablet) return '28'
    return '20'
  }

  return (
    <div
      className={twMerge(
        'flex items-center justify-center rounded-full shrink-0 grow-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12',
        completed ? 'bg-sky-400' : 'bg-sun-400',
      )}
    >
      <SvgImage
        src={completed ? CheckIcon.src : AlertIcon.src}
        className='fill-white'
        width={getIconSize()}
        height={getIconSize()}
      />
    </div>
  )
}

export default StatusIcon
