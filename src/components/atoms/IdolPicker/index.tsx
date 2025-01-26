import { allIdols, Idol } from '@/data/idols'
import IdolImage from '../IdolImage'
import { twMerge } from 'tailwind-merge'

interface IdolPickerProps {
  onSelect: (idol: Idol | undefined) => void
  id?: string
}

const IdolPicker = ({ onSelect, id }: IdolPickerProps) => {
  const buttonCls = twMerge(
    'overflow-hidden rounded-tl-lg rounded-br-lg',
    'bg-grey-50 ring-2 cursor-pointer ring-grey-200',
    'hover:ring-sky-300 hover:bg-sky-100',
    'group max-w-14 w-full',
    'focus:outline-sky-300',
  )

  const containerCls = 'flex align-center aspect-square'

  return (
    <div className='flex flex-wrap gap-2 sm:gap-4'>
      {[undefined, ...allIdols].map((idol) => (
        <button
          className={buttonCls}
          key={`${id}-${idol}`}
          onClick={() => onSelect(idol)}
        >
          <div className={containerCls}>
            <IdolImage idol={idol} />
          </div>
        </button>
      ))}
    </div>
  )
}

export default IdolPicker
