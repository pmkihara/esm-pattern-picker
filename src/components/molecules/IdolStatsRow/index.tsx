import StatInput from '@/components/atoms/StatInput'
import Avatar from '@/components/atoms/Avatar'
import { Stat, Stats, StatsMap } from '@/data/stats'
import { Idol } from '@/data/idols'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface IdolStatsRowProps {
  idol: Idol
  stats: Stats
  register: UseFormRegister<StatsMap>
  errors?: FieldErrors<Stats>
  gridClassName?: string
}

const IdolStatsRow = ({
  idol,
  stats,
  register,
  errors,
  gridClassName,
}: IdolStatsRowProps) => {
  return (
    <div
      className='flex border-b border-grey-100 p-1 text-xs pt-7 -mt-6'
      id={idol}
    >
      <div className='grow shrink flex gap-2 items-center max-w-full'>
        <Avatar idol={idol} rounded={false} />
        <span className='font-bold max-w-full overflow-hidden truncate'>
          {idol}
        </span>
      </div>
      <div
        className={twMerge(
          'shrink-0 grow-0 grid grid-cols-6 content-center justify-items-center',
          gridClassName,
        )}
      >
        {Object.entries(stats).map(([stat, value]) => (
          <StatInput
            key={`${idol}.${stat}`}
            defaultValue={value}
            {...register(`${idol}.${stat as Stat}`, {
              valueAsNumber: true,
            })}
            isError={!!errors?.[stat as Stat]}
          />
        ))}
      </div>
    </div>
  )
}

export default IdolStatsRow
