import { Stat } from '@/data/stats'
import { useBreakpoint } from '@/hooks/tailwind'
import { twMerge } from 'tailwind-merge'

interface StatTagProps {
  type: Stat
}

const StatTag = ({ type }: StatTagProps) => {
  const isTablet = useBreakpoint('md')
  const statColors = {
    [Stat.Active]: 'bg-active',
    [Stat.Passion]: 'bg-passion',
    [Stat.Unique]: 'bg-unique',
    [Stat.Smart]: 'bg-smart',
    [Stat.Technique]: 'bg-technique',
    [Stat.Charisma]: 'bg-charisma',
  }

  return (
    <div
      className={twMerge(
        'text-2xs font-bold text-white rounded-sm w-5 text-center capitalize',
        'md:text-sm md:w-20',
        statColors[type],
      )}
    >
      {isTablet ? type : type.substring(0, 2)}
    </div>
  )
}

export default StatTag
