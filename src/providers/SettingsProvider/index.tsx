'use client'

import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import { StatsMap } from '@/data/stats'
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
  idolStats?: StatsMap
  setIdolStats: (names: StatsMap) => void
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
  const [idolStats, setIdolStats] = useState<StatsMap>()
  const [isLoading, setIsLoading] = useState(false)
  const [idolsAreSetup, setIdolsAreSetup] = useState(false)

  const fetchIdols = useCallback(async () => {
    if (!spreadsheetId) return

    setIsLoading(true)
    const statsResponse = await initializeIdols(spreadsheetId)

    if (statsResponse.ok) {
      setIdolStats(statsResponse.allStats)
      setIdolsAreSetup(!statsResponse.newSheet)
    } else {
      console.error(statsResponse.error)
    }
    setIsLoading(false)
  }, [spreadsheetId])

  // TODO: Implement fetchOutfits

  useEffect(() => {
    if (!spreadsheetId || idolStats) return
    fetchIdols()
  }, [spreadsheetId, idolStats, fetchIdols])

  return (
    <SettingsContext.Provider
      value={{
        spreadsheetId,
        setSpreadsheetId,
        idolStats,
        setIdolStats,
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
