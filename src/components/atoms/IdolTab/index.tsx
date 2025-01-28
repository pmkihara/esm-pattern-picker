import { Idol } from '@/data/idols'
import { twMerge } from 'tailwind-merge'
import IdolImage from '../IdolImage'

interface IdolTabProps {
  idol: Idol
  onClick: () => void
  active?: boolean
}

const IdolTab = ({ idol, onClick, active = false }: IdolTabProps) => {
  return (
    <button
      className={twMerge(
        'rounded-t-full h-14 w-14 overflow-hidden border-4 border-b-0 transition-color',
        'focus-visible:outline-none focus-visible:bg-sky-200 focus-visible:border-sky-200',
        active
          ? 'bg-sky-300 border-sky-300'
          : 'bg-sky-100 border-sky-100 hover:bg-sky-200 hover:border-sky-200',
      )}
      onClick={() => onClick()}
    >
      <IdolImage idol={idol} />
    </button>
  )
}

export default IdolTab
