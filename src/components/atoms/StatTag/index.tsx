import { longStats, Stat } from '@/data/stats'
import { useBreakpoint } from '@/hooks/tailwind'
import { twMerge } from 'tailwind-merge'

interface StatTagProps {
  type: Stat
  responsive?: boolean
}

export const statColors = {
  [Stat.Active]: 'bg-active',
  [Stat.Passion]: 'bg-passion',
  [Stat.Unique]: 'bg-unique',
  [Stat.Smart]: 'bg-smart',
  [Stat.Technique]: 'bg-technique',
  [Stat.Charisma]: 'bg-charisma',
}

export const statBgColors = {
  [Stat.Active]: 'bg-active/15',
  [Stat.Passion]: 'bg-passion/15',
  [Stat.Unique]: 'bg-unique/15',
  [Stat.Smart]: 'bg-smart/15',
  [Stat.Technique]: 'bg-technique/15',
  [Stat.Charisma]: 'bg-charisma/15',
}

const StatTag = ({ type, responsive = true }: StatTagProps) => {
  const isTablet = useBreakpoint('md')

  return (
    <div
      className={twMerge(
        'text-2xs font-bold text-white rounded-sm w-5 text-center capitalize',
        'grow-0 shrink-0',
        responsive && 'md:text-sm md:w-20',
        statColors[type],
      )}
    >
      {responsive && isTablet ? longStats[type] : type}
    </div>
  )
}

export default StatTag
