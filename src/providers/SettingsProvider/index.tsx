'use client'

import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import { OfficeJob } from '@/data/office-jobs'
import { UserOutfit } from '@/data/outfits'
import { StatsMap } from '@/data/stats'
import { checkSpreadsheetAccess } from '@/services/access_actions'
import { checkIdolsSheet, initializeIdols } from '@/services/idols_actions'
import {
  checkOutfitsSheet,
  initializeOutfits,
} from '@/services/outfits_actions'
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
  officeJob?: OfficeJob
  setOfficeJob: (job: OfficeJob) => void
  spreadsheetIsSetup: boolean
  setSpreadsheetIsSetup: (isSetup: boolean) => void
  idolsAreSetup: boolean
  setIdolsAreSetup: (areSetup: boolean) => void
  outfitsAreSetup: boolean
  setOutfitsAreSetup: (areSetup: boolean) => void
  officeJobIsSetup: boolean
}

export const SettingsContext = createContext<SettingsContext | undefined>(
  undefined,
)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [spreadsheetId, setSpreadsheetId] = useState<string>()
  const [idolStats, setIdolStats] = useState<StatsMap>()
  const [outfits, setOutfits] = useState<UserOutfit[]>()
  const [officeJob, setOfficeJob] = useState<OfficeJob>()
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

  useEffect(() => {
    if (!spreadsheetId || !idolsAreSetup || idolStats) return

    const initialize = async () => {
      setIsLoading(true)
      const statsResponse = await initializeIdols(spreadsheetId)
      if (statsResponse.ok) {
        const { allStats } = statsResponse
        setIdolStats(allStats)
      }
      setIsLoading(false)
    }
    initialize()
  }, [idolStats, idolsAreSetup, spreadsheetId])

  useEffect(() => {
    if (!spreadsheetId || !outfitsAreSetup || outfits) return

    const initialize = async () => {
      setIsLoading(true)
      const outfitsResponse = await initializeOutfits(spreadsheetId)
      if (outfitsResponse.ok) {
        const { outfits: data } = outfitsResponse
        setOutfits(data)
      }
      setIsLoading(false)
    }
    initialize()
  }, [outfits, outfitsAreSetup, spreadsheetId])

  return (
    <SettingsContext.Provider
      value={{
        spreadsheetId,
        setSpreadsheetId,
        idolStats,
        setIdolStats,
        outfits,
        setOutfits,
        officeJob,
        setOfficeJob,
        spreadsheetIsSetup,
        setSpreadsheetIsSetup,
        idolsAreSetup,
        setIdolsAreSetup,
        outfitsAreSetup,
        setOutfitsAreSetup,
        officeJobIsSetup: !!officeJob,
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
