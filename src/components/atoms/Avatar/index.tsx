import { twMerge } from 'tailwind-merge'
import { Idol } from '@/data/idols'
import IdolImage from '../IdolImage'
import IdolHeadImage from '../IdolHeadImage'

interface AvatarProps {
  idol?: Idol
  className?: string
  size?: 'sm' | 'md'
  type?: 'chibi' | 'head'
  rounded?: boolean
}

const Avatar = ({
  idol,
  className,
  size = 'sm',
  type = 'head',
  rounded = true,
}: AvatarProps) => {
  return (
    <div
      className={twMerge(
        'overflow-clip shrink-0 grow-0 flex',
        size === 'sm' && 'h-8 w-8 sm:h-12 sm:w-12',
        size === 'md' && 'h-12 w-12 sm:h-14 sm:w-14',
        rounded && 'rounded-full',
        className,
      )}
    >
      {type === 'head' && <IdolHeadImage idol={idol} className='h-auto' />}
      {type === 'chibi' && <IdolImage idol={idol} />}
    </div>
  )
}

export default Avatar
