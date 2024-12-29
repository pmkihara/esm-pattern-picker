'use client'

import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import { IdolAttributesMap } from '@/data/attributes'
import { initializeIdols } from '@/services/actions'
import { useRouter, useSearchParams } from 'next/navigation'
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
}

export const SettingsContext = createContext<SettingsContext | undefined>(
  undefined,
)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialId = searchParams.get('id') || undefined
  const [spreadsheetId, setSpreadsheetId] = useState<string | undefined>(
    initialId,
  )
  const [idolAttrs, setIdolAttrs] = useState<IdolAttributesMap>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchAttributes = useCallback(async () => {
    if (!spreadsheetId) return

    setIsLoading(true)
    const attrsResponse = await initializeIdols(spreadsheetId)

    if (attrsResponse.ok) {
      setIdolAttrs(attrsResponse.allAttributes)
      if (attrsResponse.newSheet) {
        router.push(`/idols?id=${spreadsheetId}`)
      }
    }
    setIsLoading(false)
  }, [spreadsheetId, router])

  useEffect(() => {
    if (!spreadsheetId || idolAttrs) return
    fetchAttributes()
  }, [spreadsheetId, idolAttrs, router, fetchAttributes])

  return (
    <SettingsContext.Provider
      value={{
        spreadsheetId,
        setSpreadsheetId,
        idolAttrs,
        setIdolAttrs,
        isLoading,
        setIsLoading,
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
