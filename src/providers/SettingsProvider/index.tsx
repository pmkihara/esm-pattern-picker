'use client'

import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import { IdolAttributesMap } from '@/data/attributes'
import { initializeIdols } from '@/services/actions'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

interface SettingsProviderProps {
  children: ReactNode
}

interface SettingsContext {
  spreadsheetId: string | undefined
  setSpreadsheetId: (id: string) => void
  idolAttrs?: IdolAttributesMap
  setIdolAttrs: (names: IdolAttributesMap) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  spreadsheetIsSetup: boolean
  idolsAreSetup: boolean
  outfitsAreSetup: boolean
  fetchIdols: () => void
}

export const SettingsContext = createContext<SettingsContext | undefined>(
  undefined,
)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [spreadsheetId, setSpreadsheetId] = useState<string | undefined>()
  const [idolAttrs, setIdolAttrs] = useState<IdolAttributesMap>()
  const [isLoading, setIsLoading] = useState(false)
  const [idolsAreSetup, setIdolsAreSetup] = useState(false)

  const fetchIdols = useCallback(async () => {
    if (!spreadsheetId) return

    setIsLoading(true)
    const attrsResponse = await initializeIdols(spreadsheetId)

    if (attrsResponse.ok) {
      setIdolAttrs(attrsResponse.allAttributes)
      setIdolsAreSetup(!attrsResponse.newSheet)
    } else {
      console.error(attrsResponse.error)
    }
    setIsLoading(false)
  }, [spreadsheetId])

  // TODO: Implement fetchOutfits

  useEffect(() => {
    if (!spreadsheetId || idolAttrs) return
    fetchIdols()
  }, [spreadsheetId, idolAttrs, fetchIdols])

  return (
    <SettingsContext.Provider
      value={{
        spreadsheetId,
        setSpreadsheetId,
        idolAttrs,
        setIdolAttrs,
        isLoading,
        setIsLoading,
        spreadsheetIsSetup: !!spreadsheetId,
        idolsAreSetup,
        outfitsAreSetup: false,
        fetchIdols,
      }}
    >
      <LoadingOverlay isLoading={isLoading} />
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}
