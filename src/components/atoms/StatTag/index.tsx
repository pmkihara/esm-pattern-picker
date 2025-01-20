import { longStats, Stat } from '@/data/stats'
import { useBreakpoint } from '@/hooks/tailwind'
import { twMerge } from 'tailwind-merge'

interface StatTagProps {
  type: Stat
}

export const statColors = {
  [Stat.Active]: 'bg-active',
  [Stat.Passion]: 'bg-passion',
  [Stat.Unique]: 'bg-unique',
  [Stat.Smart]: 'bg-smart',
  [Stat.Technique]: 'bg-technique',
  [Stat.Charisma]: 'bg-charisma',
}

const StatTag = ({ type }: StatTagProps) => {
  const isTablet = useBreakpoint('md')

  return (
    <div
      className={twMerge(
        'text-2xs font-bold text-white rounded-sm w-5 text-center capitalize',
        'grow-0 shrink-0',
        'md:text-sm md:w-20',
        statColors[type],
      )}
    >
      {isTablet ? longStats[type] : type}
    </div>
  )
}

export default StatTag
