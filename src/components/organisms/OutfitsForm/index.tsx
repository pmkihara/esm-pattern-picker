'use client'

import Button from '@/components/atoms/Button'
import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import SaveButton from '@/components/atoms/SaveButton'
import IdolOutfits from '@/components/molecules/IdolOutfits'
import { allIdols, Idol } from '@/data/idols'
import { UserOutfit } from '@/data/outfits'
import { FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form'
import { useMemo } from 'react'
import { updateOutfits } from '@/services/outfits_actions'
import { useRouter } from 'next/navigation'
import { useSettings } from '@/providers/SettingsProvider'

export type OutfitField = FieldArrayWithId<
  {
    outfits: (UserOutfit & { index: number })[]
  },
  'outfits',
  'id'
>

const OutfitsForm = () => {
  const router = useRouter()
  const { spreadsheetId, outfits, setOutfits } = useSettings()

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<{ outfits: UserOutfit[] }>({
    values: { outfits: outfits || [] },
  })
  const { fields } = useFieldArray({
    control,
    name: 'outfits',
  })

  const fieldsByIdolAndGroup = useMemo(() => {
    return fields.reduce(
      (acc, field, index) => {
        const idol = field.idol as Idol
        const group = field.group
        if (!acc[idol]) {
          acc[idol] = {}
        }
        if (!acc[idol][group]) {
          acc[idol][group] = []
        }
        acc[idol][group].push({ ...field, index })
        return acc
      },
      {} as Record<Idol, Record<string, OutfitField[]>>,
    )
  }, [fields])

  if (!outfits || !spreadsheetId) {
    return null
  }

  const onSubmit = async (data: { outfits: UserOutfit[] }) => {
    const response = await updateOutfits(spreadsheetId, data.outfits)
    if (response.ok) {
      setOutfits(data.outfits)
      router.push(`/dashboard?id=${spreadsheetId}`)
    } else {
      console.error(response.error)
    }
  }

  return (
    <>
      <Button variant='outline'>+ Add Patterns</Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-screen-lg pb-8'>
          {allIdols.map((idol) => (
            <IdolOutfits
              key={idol}
              fields={fieldsByIdolAndGroup[idol]}
              idol={idol}
              register={register}
            />
          ))}
        </div>
        <SaveButton />
      </form>
      <LoadingOverlay isLoading={isSubmitting} />
    </>
  )
}

export default OutfitsForm
