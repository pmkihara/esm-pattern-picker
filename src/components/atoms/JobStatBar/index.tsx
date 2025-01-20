import { Stat } from '@/data/stats'
import StatTag, { statColors } from '../StatTag'
import { twMerge } from 'tailwind-merge'

interface JobStatBarProps {
  stat: Stat
  targetValue: number
  outfitValue: number
  maxStat?: number
}

const JobStatBar = ({
  stat,
  targetValue,
  outfitValue,
  maxStat = 2000,
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
    <div className='flex items-center gap-2 h-3 md:h-5'>
      <StatTag type={stat} />
      <div className='text-sm font-bold grow-0 shrink-0 w-9 text-right'>
        {outfitValue}
      </div>
      <div className='grow shrink bg-grey-300 border border-black h-full rounded-full relative overflow-hidden'>
        <div
          className='absolute left-0 border-r-4 border-black h-full'
          style={{ width: `${targetPercentage}%` }}
        ></div>
        <div
          className={twMerge('h-full', statColors[stat])}
          style={{ width: `${outfitPercentage}%` }}
        />
      </div>
      <div className='bg-sky-100 text-sky-800 text-xs font-semibold rounded text-center w-9 h-full flex items-center justify-center md:text-sm md:w-12'>
        {targetValue}
      </div>
    </div>
  )
}

export default JobStatBar
