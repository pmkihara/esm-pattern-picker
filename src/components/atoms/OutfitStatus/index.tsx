import OutfitIcon from '@@/public/assets/icons/outfit.svg'
import ThreadIcon from '@@/public/assets/icons/thread.svg'
import TshirtCrossedIcon from '@@/public/assets/icons/tshirt-crossed.svg'
import Image from 'next/image'

interface OutfitStatusProps {
  status: 'crafted' | 'owned' | 'not owned'
}

const OutfitStatus = ({ status }: OutfitStatusProps) => {
  const statusIcon = {
    crafted: OutfitIcon,
    owned: ThreadIcon,
    'not owned': TshirtCrossedIcon,
  }

  const statusText = {
    crafted: 'Crafted',
    owned: 'Owned',
    'not owned': 'Not Owned',
  }

  return (
    <div className='flex items-center justify-center gap-2'>
      <Image src={statusIcon[status]} alt={status} width={16} height={16} />
      <span className='hidden md:inline'>{statusText[status]}</span>
    </div>
  )
}

export default OutfitStatus
