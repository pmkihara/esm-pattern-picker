'use client'

import Button from '@/components/atoms/Button'
import SaveButton from '@/components/atoms/SaveButton'
import IdolStatsHeader from '@/components/molecules/IdolStatsHeader'
import IdolStatsRow from '@/components/molecules/IdolStatsRow'
import { Stat, StatsMap } from '@/data/stats'
import { idolsByUnit } from '@/data/idols'
import { useBreakpoint } from '@/hooks/tailwind'
import { useSettings } from '@/providers/SettingsProvider'
import { updateIdolsStats } from '@/services/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

interface IdolsStatsFormProps {
  idols: StatsMap
  spreadsheetId: string
}

const StatsSchema = z.record(z.nativeEnum(Stat), z.number().min(0).max(100))
const IdolsStatsFormSchema = z.record(z.string(), StatsSchema)

const IdolsStatsForm = ({ spreadsheetId, idols }: IdolsStatsFormProps) => {
  const isLaptop = useBreakpoint('lg')
  const { setIsLoading, setIdolStats } = useSettings()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StatsMap>({
    resolver: zodResolver(IdolsStatsFormSchema),
    values: idols,
  })

  const gridClassName = 'w-48 sm:w-72 md:w-[32rem]'

  const onSubmit = async (data: StatsMap) => {
    setIsLoading(true)
    const response = await updateIdolsStats(spreadsheetId, data)
    if (response.ok) {
      setIdolStats(data)
      router.push(`/dashboard?id=${spreadsheetId}`)
    } else {
      console.error(response.error)
    }
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='max-w-screen-lg'>
        <IdolStatsHeader gridClassName={gridClassName} />
        {Object.entries(idolsByUnit).map(([groupName, groupIdols]) => (
          <Fragment key={groupName}>
            <div
              key={groupName}
              className='font-bold text-sky-600 text-sm bg-grey-50 p-1'
            >
              {groupName}
            </div>
            {groupIdols.map((idol) => (
              <IdolStatsRow
                key={idol}
                gridClassName={gridClassName}
                idol={idol}
                stats={idols[idol]}
                register={register}
                errors={errors[idol]}
              />
            ))}
          </Fragment>
        ))}
      </div>
      {isLaptop ? (
        <div
          className={twMerge(
            'fixed left-1/2 transform -translate-x-1/2 bottom-8 z-10',
            'md:sticky md:translate-x-0 md:-bottom-6 md:bg-white md:-left-10 md:-mx-10 px-10 py-4 md:shadow-up',
          )}
        >
          <Button type='submit' variant='sun'>
            Save settings
          </Button>
        </div>
      ) : (
        <SaveButton
          type='submit'
          className='fixed left-1/2 transform -translate-x-1/2 bottom-8 z-10'
        />
      )}
    </form>
  )
}

export default IdolsStatsForm
