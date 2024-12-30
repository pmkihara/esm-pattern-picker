import StatTag from '@/components/atoms/StatTag'
import { Stat } from '@/data/stats'
import { twMerge } from 'tailwind-merge'

interface IdolStatsHeaderProps {
  gridClassName?: string
}

const IdolStatsHeader = ({ gridClassName }: IdolStatsHeaderProps) => {
  return (
    <div className='flex border-b border-grey-100 px-1 sticky -top-4 md:-top-6 bg-white'>
      <div className='grow shrink' />
      <div
        className={twMerge(
          'grid grid-cols-6 h-6 content-center justify-items-center',
          gridClassName,
        )}
      >
        <StatTag type={Stat.Active} />
        <StatTag type={Stat.Passion} />
        <StatTag type={Stat.Unique} />
        <StatTag type={Stat.Smart} />
        <StatTag type={Stat.Technique} />
        <StatTag type={Stat.Charisma} />
      </div>
    </div>
  )
}

export default IdolStatsHeader
