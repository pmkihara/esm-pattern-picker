import { Outfit, allOutfits } from '@/data/outfits'
import { useState, useRef, ChangeEvent } from 'react'

interface HookResult {
  visibleOutfits: Outfit[]
  isOpen: boolean
  isLoading: boolean
  query: string
  selectedOutfits: Set<string>
  inputRef: React.RefObject<HTMLInputElement | null>
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onOpenChange: (open: boolean) => void
  onSubmit: () => void
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const useOutfitSearch = (
  addFields: (outfits: Set<string>) => void,
): HookResult => {
  const [visibleOutfits, setVisibleOutfits] = useState<Outfit[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('uniform')
  const selectedOutfitsRef = useRef<Set<string>>(new Set())

  const inputRef = useRef<HTMLInputElement>(null)

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
    selectedOutfitsRef.current.clear()
  }

  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkbox = e.target
    if (checkbox.checked) {
      selectedOutfitsRef.current.add(checkbox.value)
    } else {
      selectedOutfitsRef.current.delete(checkbox.value)
    }
  }

  const onSubmit = () => {
    addFields(selectedOutfitsRef.current)
    onClose()
  }

  return {
    visibleOutfits,
    isOpen,
    isLoading,
    query,
    selectedOutfits: selectedOutfitsRef.current,
    inputRef,
    onQueryChange,
    onOpenChange,
    onClose,
    onSubmit,
    onCheckboxChange,
  }
}

export default useOutfitSearch
