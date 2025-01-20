import { Outfit, allOutfits } from '@/data/outfits'
import { useState, useRef, ChangeEvent } from 'react'
import {
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

interface HookResult {
  visibleOutfits: Outfit[]
  isLoading: boolean
  query: string
  inputRef: React.RefObject<HTMLInputElement | null>
  isDisabled: (outfit: Outfit) => boolean
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onOpenChange: (open: boolean) => void
  onSubmit: (data: FieldValues) => void
  onSelectAll: (e: ChangeEvent<HTMLInputElement>) => void
  register: UseFormRegister<FieldValues>
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
}

const useOutfitSearch = (
  addFields: (outfits: Set<string>) => void,
  groupedFields: Record<string, Record<string, Outfit[]>>,
): HookResult => {
  const [visibleOutfits, setVisibleOutfits] = useState<Outfit[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('uniform')

  const inputRef = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, reset, setValue } = useForm()

  const isDisabled = (outfit: Outfit) => {
    return groupedFields[outfit.idol]?.[outfit.group]?.some(
      (field: Outfit) => field.fullName === outfit.fullName,
    )
  }

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    if (value.length < 3) {
      setVisibleOutfits([])
      return
    }

    setIsLoading(true)
    const filteredOutfits = allOutfits.filter((outfit) =>
      outfit.fullName.toLowerCase().includes(value.toLowerCase()),
    )
    setVisibleOutfits(
      filteredOutfits.sort((a, b) => a.fullName.localeCompare(b.fullName)),
    )
    setIsLoading(false)
  }

  const onOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  const onClose = () => {
    setQuery('')
    setVisibleOutfits([])
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    reset()
  }

  const onSubmit = (data: FieldValues) => {
    const outfits = new Set(Object.keys(data).filter((key) => data[key]))
    addFields(outfits)
    onClose()
  }

  const onSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    visibleOutfits.forEach((outfit) => {
      if (!isDisabled(outfit)) {
        setValue(outfit.fullName, e.target.checked)
      }
    })
  }

  return {
    visibleOutfits,
    isLoading,
    query,
    inputRef,
    isDisabled,
    onQueryChange,
    onOpenChange,
    onClose,
    onSubmit,
    onSelectAll,
    register,
    handleSubmit,
  }
}

export default useOutfitSearch
