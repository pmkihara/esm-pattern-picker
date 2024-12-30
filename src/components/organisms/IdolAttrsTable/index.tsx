'use client'

import Button from '@/components/atoms/Button'
import SaveButton from '@/components/atoms/SaveButton'
import IdolAttrsHeader from '@/components/molecules/IdolAttrsHeader'
import IdolAttrsRow from '@/components/molecules/IdolAttrsRow'
import { IdolAttribute, IdolAttributesMap } from '@/data/attributes'
import { idolsByGroup } from '@/data/idols'
import { useBreakpoint } from '@/hooks/tailwind'
import { useSettings } from '@/providers/SettingsProvider'
import { updateIdolsAttributes } from '@/services/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

interface IdolAttrsTableProps {
  idols: IdolAttributesMap
  spreadsheetId: string
}

const idolAttributesSchema = z.record(
  z.nativeEnum(IdolAttribute),
  z.number().min(0).max(100),
)
const idolAttrsTableSchema = z.record(z.string(), idolAttributesSchema)

const IdolAttrsTable = ({ spreadsheetId, idols }: IdolAttrsTableProps) => {
  const isLaptop = useBreakpoint('lg')
  const { setIsLoading } = useSettings()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdolAttributesMap>({
    resolver: zodResolver(idolAttrsTableSchema),
    values: idols,
  })

  const attrGridCls = 'w-48 sm:w-72 md:w-[32rem]'

  const onSubmit = async (data: IdolAttributesMap) => {
    setIsLoading(true)
    const response = await updateIdolsAttributes(spreadsheetId, data)
    if (response.ok) {
      router.push(`/dashboard?id=${spreadsheetId}`)
    } else {
      console.error(response.error)
    }
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='max-w-screen-lg'>
        <IdolAttrsHeader attrClassName={attrGridCls} />
        {Object.entries(idolsByGroup).map(([groupName, groupIdols]) => (
          <Fragment key={groupName}>
            <div
              key={groupName}
              className='font-bold text-sky-600 text-sm bg-grey-50 p-1'
            >
              {groupName}
            </div>
            {groupIdols.map((idol) => (
              <IdolAttrsRow
                key={idol}
                attrClassName={attrGridCls}
                idol={idol}
                attributes={idols[idol]}
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

export default IdolAttrsTable
