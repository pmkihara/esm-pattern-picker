import { Stat } from '@/data/stats'
import StatTag, { statBgColors, statColors } from '../StatTag'
import { twMerge } from 'tailwind-merge'

interface JobStatBarProps {
  stat: Stat
  targetValue: number
  outfitValue: number
  maxStat?: number
  showTarget?: boolean
}

const JobStatBar = ({
  stat,
  targetValue,
  outfitValue,
  maxStat = 2000,
  showTarget = true,
}: JobStatBarProps) => {
  const outfitPercentage = Math.min(
    100,
    Math.round((outfitValue / maxStat) * 100),
  )
  const targetPercentage = Math.min(
    100,
    Math.round((targetValue / maxStat) * 100),
  )

  return (
    <div className='flex items-center gap-2 h-2.5 md:h-3.5'>
      <StatTag type={stat} responsive={false} />
      <div className='text-sm font-bold grow-0 shrink-0 w-9 text-right'>
        {outfitValue}
      </div>
      <div
        className={twMerge(
          'grow shrink h-full rounded-full relative overflow-hidden',
          statBgColors[stat],
        )}
      >
        <div
          className='absolute left-0 top-0 border-r-4 z-10 border-black h-full'
          style={{ width: `${targetPercentage}%` }}
        />
        <div
          className={twMerge('h-full', statColors[stat])}
          style={{ width: `${outfitPercentage}%` }}
        />
      </div>
      {showTarget && (
        <div className='bg-sky-100 text-sky-800 text-xs font-semibold rounded text-center w-9 h-full flex items-center justify-center md:text-sm md:w-12'>
          {targetValue}
        </div>
      )}
    </div>
  )
}

export default JobStatBar
