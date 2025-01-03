'use client'

import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import { UserOutfit } from '@/data/outfits'
import { StatsMap } from '@/data/stats'
import { checkSpreadsheetAccess } from '@/services/access_actions'
import { checkIdolsSheet } from '@/services/idols_actions'
import { checkOutfitsSheet } from '@/services/outfits_actions'
import {
  createContext,
  ReactNode,
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
  outfits?: UserOutfit[]
  setOutfits: (outfits: UserOutfit[]) => void
  spreadsheetIsSetup: boolean
  setSpreadsheetIsSetup: (isSetup: boolean) => void
  idolsAreSetup: boolean
  setIdolsAreSetup: (areSetup: boolean) => void
  outfitsAreSetup: boolean
  setOutfitsAreSetup: (areSetup: boolean) => void
}

export const SettingsContext = createContext<SettingsContext | undefined>(
  undefined,
)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [spreadsheetId, setSpreadsheetId] = useState<string>()
  const [idolStats, setIdolStats] = useState<StatsMap>()
  const [outfits, setOutfits] = useState<UserOutfit[]>()
  const [spreadsheetIsSetup, setSpreadsheetIsSetup] = useState(false)
  const [idolsAreSetup, setIdolsAreSetup] = useState(false)
  const [outfitsAreSetup, setOutfitsAreSetup] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!spreadsheetId || spreadsheetIsSetup) return

    const checkSpreadsheet = async () => {
      setIsLoading(true)
      const { ok } = await checkSpreadsheetAccess(spreadsheetId)
      setSpreadsheetIsSetup(ok)
      setIsLoading(false)
    }

    checkSpreadsheet()
  }, [spreadsheetId, spreadsheetIsSetup])

  useEffect(() => {
    if (!spreadsheetId || idolsAreSetup) return

    const checkIdols = async () => {
      setIsLoading(true)
      const { ok } = await checkIdolsSheet(spreadsheetId)
      setIdolsAreSetup(ok)
      setIsLoading(false)
    }

    checkIdols()
  }, [idolsAreSetup, spreadsheetId])

  useEffect(() => {
    if (!spreadsheetId || outfitsAreSetup) return

    const checkOutfits = async () => {
      setIsLoading(true)
      const { ok } = await checkOutfitsSheet(spreadsheetId)
      setOutfitsAreSetup(ok)
      setIsLoading(false)
    }

    checkOutfits()
  }, [outfitsAreSetup, spreadsheetId])

  return (
    <SettingsContext.Provider
      value={{
        spreadsheetId,
        setSpreadsheetId,
        idolStats,
        setIdolStats,
        outfits,
        setOutfits,
        spreadsheetIsSetup,
        setSpreadsheetIsSetup,
        idolsAreSetup,
        setIdolsAreSetup,
        outfitsAreSetup,
        setOutfitsAreSetup,
      }}
    >
      {children}
      <LoadingOverlay isLoading={isLoading} />
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
