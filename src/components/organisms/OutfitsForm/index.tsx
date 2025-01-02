'use client'

import Button from '@/components/atoms/Button'
import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import SaveButton from '@/components/atoms/SaveButton'
import IdolOutfits from '@/components/molecules/IdolOutfits'
import { allIdols, Idol } from '@/data/idols'
import { OutfitsMap, UserOutfit } from '@/data/outfits'
import { FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form'
import { useMemo } from 'react'
import { updateOutfits } from '@/services/outfits_actions'
import { useRouter } from 'next/navigation'

interface OutfitsFormProps {
  spreadsheetId: string
  outfits: OutfitsMap
}

export type OutfitField = FieldArrayWithId<
  {
    outfits: (UserOutfit & { index: number })[]
  },
  'outfits',
  'id'
>

const OutfitsForm = ({ outfits, spreadsheetId }: OutfitsFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<{ outfits: UserOutfit[] }>({
    values: { outfits: Object.values(outfits) },
  })
  const { fields } = useFieldArray({
    control,
    name: 'outfits',
  })
  const router = useRouter()

  const onSubmit = async (data: { outfits: UserOutfit[] }) => {
    const response = await updateOutfits(spreadsheetId, data.outfits)
    if (response.ok) {
      router.push(`/${spreadsheetId}/dashboard`)
    } else {
      console.error(response.error)
    }
  }

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
