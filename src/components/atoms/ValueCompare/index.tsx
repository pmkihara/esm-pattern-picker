import { twMerge } from 'tailwind-merge'

interface ValueCompareProps {
  value: number
  compare: number
}

const ValueCompare = ({ value, compare }: ValueCompareProps) => {
  const diff = value - compare
  const color = diff > 0 ? 'text-green-500' : diff < 0 ? 'text-red-500' : ''
  return (
    <div className='flex items-center gap-0.5'>
      {value}
      <span className={twMerge('text-xs', color)}>
        ({diff > 0 ? '+' : ''}
        {diff})
      </span>
    </div>
  )
}

export default ValueCompare
