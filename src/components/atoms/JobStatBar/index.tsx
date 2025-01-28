import { Stat } from '@/data/stats'
import StatTag, { statBgColors, statColors } from '../StatTag'
import { twMerge } from 'tailwind-merge'

interface JobStatBarProps {
  stat: Stat
  targetValue: number
  outfitValue: number
  maxStat?: number
  showTarget?: boolean
  additionalOutfitValue?: number
  highlightedValue?: number
}

const JobStatBar = ({
  stat,
  targetValue,
  outfitValue,
  maxStat = 2000,
  showTarget = true,
  additionalOutfitValue,
  highlightedValue,
}: JobStatBarProps) => {
  const outfitPercentage = Math.min(
    100,
    Math.round((outfitValue / maxStat) * 100),
  )
  const targetPercentage = Math.min(
    100,
    Math.round((targetValue / maxStat) * 100),
  )
  const highlightedPercentage = Math.min(
    Math.round(((highlightedValue || 0) / outfitValue) * 100),
  )

  return (
    <div className='flex items-center gap-2 h-2.5 md:h-3.5'>
      <StatTag type={stat} responsive={false} />
      <JobStatBarTotalValue
        additionalOutfitValue={additionalOutfitValue}
        outfitValue={outfitValue}
      />
      <div
        className={twMerge(
          'grow shrink h-full rounded-full relative overflow-hidden',
          statBgColors[stat],
        )}
      >
        {/* target line */}
        <div
          className='absolute left-0 top-0 border-r-4 z-10 border-black h-full'
          style={{ width: `${targetPercentage}%` }}
        />
        {/* progress bar */}
        <div
          className={twMerge(
            'h-full relative flex justify-end',
            statColors[stat],
          )}
          style={{ width: `${outfitPercentage}%` }}
        >
          {highlightedValue !== undefined && (
            <div
              className='h-full animate-highlight bg-white mix-blend-screen'
              style={{ width: `${highlightedPercentage}%` }}
            />
          )}
        </div>
      </div>
      {showTarget && <JobStatbarTargetValue targetValue={targetValue} />}
    </div>
  )
}

const JobStatBarTotalValue = ({
  additionalOutfitValue,
  outfitValue,
}: Partial<JobStatBarProps>) => (
  <div
    className={twMerge(
      'text-sm font-bold grow-0 shrink-0 text-right overflow-hidden truncate',
      additionalOutfitValue !== undefined ? 'w-20' : 'w-9',
    )}
  >
    {outfitValue}
    {additionalOutfitValue !== undefined && (
      <span className='font-normal text-grey-500'>{` (${additionalOutfitValue})`}</span>
    )}
  </div>
)

const JobStatbarTargetValue = ({ targetValue }: Partial<JobStatBarProps>) => (
  <div className='bg-sky-100 text-sky-800 text-xs font-semibold rounded text-center w-9 h-full flex items-center justify-center md:text-sm md:w-12'>
    {targetValue}
  </div>
)

export default JobStatBar
