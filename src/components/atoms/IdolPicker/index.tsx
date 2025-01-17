import { allIdols, Idol } from '@/data/idols'
import IdolImage from '../IdolImage'
import { twMerge } from 'tailwind-merge'

interface IdolPickerProps {
  onSelect: (idol: Idol | undefined) => void
}

const IdolPicker = ({ onSelect }: IdolPickerProps) => {
  const pickerCls = twMerge(
    'overflow-hidden rounded-tl-lg rounded-br-lg aspect-square',
    'bg-grey-50 ring-2 cursor-pointer ring-grey-200',
    'hover:ring-sky-300 hover:bg-sky-100',
    'group flex justify-center max-w-14 w-full',
    'focus:outline-sky-300',
  )

  return (
    <div className='flex flex-wrap gap-2 sm:gap-4'>
      <button className={pickerCls} onClick={() => onSelect(undefined)}>
        <IdolImage idol={undefined} />
      </button>
      {allIdols.map((idol) => (
        <button className={pickerCls} key={idol} onClick={() => onSelect(idol)}>
          <IdolImage idol={idol} />
        </button>
      ))}
    </div>
  )
}

export default IdolPicker
