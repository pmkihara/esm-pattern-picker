'use client'

import SaveButton from '@/components/atoms/SaveButton'
import IdolStatsHeader from '@/components/molecules/IdolStatsHeader'
import IdolStatsRow from '@/components/molecules/IdolStatsRow'
import { Stat, StatsMap } from '@/data/stats'
import { idolsByUnit } from '@/data/idols'
import { updateIdolsStats } from '@/services/idols_actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import { useSettings } from '@/providers/SettingsProvider'

const StatsSchema = z.record(z.nativeEnum(Stat), z.number().min(0).max(100))
const IdolsStatsFormSchema = z.record(z.string(), StatsSchema)

const IdolsStatsForm = () => {
  const router = useRouter()
  const { spreadsheetId, idolStats, setIdolStats } = useSettings()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StatsMap>({
    resolver: zodResolver(IdolsStatsFormSchema),
    values: idolStats,
  })

  if (!idolStats || !spreadsheetId) {
    return null
  }

  const gridClassName = 'w-48 sm:w-72 md:w-[32rem]'

  const onSubmit = async (data: StatsMap) => {
    const response = await updateIdolsStats(spreadsheetId, data)
    if (response.ok) {
      setIdolStats(data)
      router.push(`/dashboard?id=${spreadsheetId}`)
    } else {
      console.error(response.error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-screen-lg pb-8'>
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
                  stats={idolStats[idol]}
                  register={register}
                  errors={errors[idol]}
                />
              ))}
            </Fragment>
          ))}
        </div>
        <SaveButton />
      </form>
      <LoadingOverlay isLoading={isSubmitting} />
    </>
  )
}

export default IdolsStatsForm
