import { Outfit, allOutfits } from '@/data/outfits'
import { useState, useRef, ChangeEvent } from 'react'

interface HookResult {
  visibleOutfits: Outfit[]
  isOpen: boolean
  isLoading: boolean
  query: string
  selectedOutfits: Set<string>
  inputRef: React.RefObject<HTMLInputElement | null>
  isDisabled: (outfit: Outfit) => boolean
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onOpenChange: (open: boolean) => void
  onSubmit: () => void
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSelectAll: (e: ChangeEvent<HTMLInputElement>) => void
}

const useOutfitSearch = (
  addFields: (outfits: Set<string>) => void,
  groupedFields: Record<string, Record<string, Outfit[]>>,
): HookResult => {
  const [visibleOutfits, setVisibleOutfits] = useState<Outfit[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('uniform')
  const [selectedOutfits, setSelectedOutfits] = useState<Set<string>>(new Set())

  const inputRef = useRef<HTMLInputElement>(null)

  const addSelectedOutfit = (outfitFullName: string) => {
    setSelectedOutfits((prev) => {
      const newSelectedOutfits = new Set(prev)
      newSelectedOutfits.add(outfitFullName)
      return newSelectedOutfits
    })
  }

  const removeSelectedOutfit = (outfitFullName: string) => {
    setSelectedOutfits((prev) => {
      const newSelectedOutfits = new Set(prev)
      newSelectedOutfits.delete(outfitFullName)
      return newSelectedOutfits
    })
  }

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
    setIsOpen(open)

    if (!open) {
      setQuery('')
      setVisibleOutfits([])
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  const onClose = () => {
    setIsOpen(false)
    setQuery('')
    setVisibleOutfits([])
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    setSelectedOutfits(new Set())
  }

  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkbox = e.target
    if (checkbox.checked) {
      addSelectedOutfit(checkbox.value)
    } else {
      removeSelectedOutfit(checkbox.value)
    }
  }

  const onSubmit = () => {
    addFields(selectedOutfits)
    onClose()
  }

  const onSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedOutfits((prev) => {
        const newSelectedOutfits = new Set(prev)
        visibleOutfits.forEach((outfit) => {
          if (!isDisabled(outfit)) {
            newSelectedOutfits.add(outfit.fullName)
          }
        })
        return newSelectedOutfits
      })
    } else {
      setSelectedOutfits((prev) => {
        const newSelectedOutfits = new Set(prev)
        visibleOutfits.forEach((outfit) => {
          newSelectedOutfits.delete(outfit.fullName)
        })
        return newSelectedOutfits
      })
    }
  }

  return {
    visibleOutfits,
    isOpen,
    isLoading,
    query,
    selectedOutfits,
    inputRef,
    isDisabled,
    onQueryChange,
    onOpenChange,
    onClose,
    onSubmit,
    onCheckboxChange,
    onSelectAll,
  }
}

export default useOutfitSearch
