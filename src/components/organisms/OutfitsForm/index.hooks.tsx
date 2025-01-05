import { Idol } from '@/data/idols'
import { allOutfits, UserOutfit } from '@/data/outfits'
import { useSettings } from '@/providers/SettingsProvider'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import {
  FieldArrayWithId,
  useFieldArray,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { updateOutfits } from '@/services/outfits_actions'

interface HookResult {
  outfits: UserOutfit[] | undefined
  spreadsheetId: string | undefined
  register: UseFormRegister<{ outfits: UserOutfit[] }>
  handleSubmit: UseFormHandleSubmit<
    {
      outfits: UserOutfit[]
    },
    undefined
  >
  isSubmitting: boolean
  fieldsByIdolAndGroup: Record<Idol, Record<string, OutfitField[]>>
  onSubmit: (data: { outfits: UserOutfit[] }) => Promise<void>
  addFields: (outfits: Set<string>) => void
}

export type OutfitField = FieldArrayWithId<
  {
    outfits: (UserOutfit & { index: number })[]
  },
  'outfits',
  'id'
>

const useOutfitsForm = (): HookResult => {
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
  const { fields, append } = useFieldArray({
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

  const onSubmit = async (data: { outfits: UserOutfit[] }) => {
    if (!spreadsheetId) return

    const response = await updateOutfits(spreadsheetId, data.outfits)
    if (response.ok) {
      setOutfits(data.outfits)
      router.push(`/dashboard?id=${spreadsheetId}`)
    } else {
      console.error(response.error)
    }
  }

  const addFields = (outfitsFullNames: Set<string>) => {
    outfitsFullNames.forEach((fullName) => {
      const outfit = allOutfits.find((outfit) => outfit.fullName === fullName)
      if (!outfit) return
      append({ ...outfit, crafted: false })
    })
  }

  return {
    outfits,
    spreadsheetId,
    register,
    handleSubmit,
    isSubmitting,
    fieldsByIdolAndGroup,
    onSubmit,
    addFields,
  }
}

export default useOutfitsForm
