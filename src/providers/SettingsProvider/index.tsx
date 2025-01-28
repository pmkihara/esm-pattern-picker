'use client'

import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import { OfficeJob } from '@/data/office-jobs'
import { UserOutfit } from '@/data/outfits'
import { allStats, StatsMap } from '@/data/stats'
import { autoSelect } from '@/lib/autoSelect'
import {
  getOutfitsContribution,
  isValidOutfit,
  OutfitContribution,
} from '@/lib/outfitStat'
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
  useMemo,
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
  selectedOutfits: OutfitContribution[]
  setSelectedOutfits: (outfits: OutfitContribution[]) => void
  onlyCrafted: boolean
  setOnlyCrafted: (onlyCrafted: boolean) => void
  maxValue: number
  visibleContributions: OutfitContribution[]
  autoSelectedOutfits: OutfitContribution[]
}

export const SettingsContext = createContext<SettingsContext | undefined>(
  undefined,
)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  // --------------------------------- States ---------------------------------
  const [spreadsheetId, setSpreadsheetId] = useState<string>()
  const [idolStats, setIdolStats] = useState<StatsMap>()
  const [outfits, setOutfits] = useState<UserOutfit[]>()
  const [officeJob, setOfficeJob] = useState<OfficeJob>()
  const [spreadsheetIsSetup, setSpreadsheetIsSetup] = useState(false)
  const [idolsAreSetup, setIdolsAreSetup] = useState(false)
  const [outfitsAreSetup, setOutfitsAreSetup] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [onlyCrafted, setOnlyCrafted] = useState(true)
  const [selectedOutfits, setSelectedOutfits] = useState<OutfitContribution[]>(
    [],
  )

  // ----------------------------- Memoized values -----------------------------
  // The outfitsContribution represents the contribution of each outfit to the
  // office job stats. It is calculated based on the idol stats and the outfits
  // stats.
  const outfitsContribution = useMemo(() => {
    if (!(outfits && officeJob && idolStats)) return []

    return getOutfitsContribution(outfits, officeJob, idolStats)
  }, [outfits, officeJob, idolStats])

  // The visibleContributions represents the outfits that are currently visible,
  // based on the onlyCrafted filter.
  const visibleContributions = useMemo(() => {
    return outfitsContribution.filter((contribution) =>
      isValidOutfit(contribution.outfit, onlyCrafted),
    )
  }, [outfitsContribution, onlyCrafted])

  // The statValues represents the values of each stat for the office job.
  const statValues = useMemo(() => {
    if (!officeJob) return []

    return allStats.map((stat) => officeJob[stat])
  }, [officeJob])

  // The maxValue represents the maximum value of the stats for the office job.
  const maxValue = useMemo(
    () => (officeJob !== undefined ? Math.max(...statValues) + 500 : 0),
    [statValues, officeJob],
  )

  // The autoSelectedOutfits represents the outfits that are automatically
  // selected when the office job is set.
  const autoSelectedOutfits = useMemo(() => {
    if (!officeJob) return []

    return autoSelect(visibleContributions, officeJob)
  }, [officeJob, visibleContributions])

  // ----------------------- Effects to check the setup -----------------------
  // Update the spreadSheetIsSetup state based on the access to the spreadsheet.
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

  // Update the idolsAreSetup state based on the idols sheet.
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

  // Update the outfitsAreSetup state based on the outfits sheet.
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

  // ------------ Effects to initialize the idol stats and outfits ------------
  // Initialize the idol stats
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

  // Initialize the outfits
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

  // Set the auto selected outfits when there are no selected outfits yet
  useEffect(() => {
    if (selectedOutfits.length > 0 || autoSelectedOutfits.length === 0) return

    setSelectedOutfits(autoSelectedOutfits)
  }, [selectedOutfits.length, autoSelectedOutfits])

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
        selectedOutfits,
        setSelectedOutfits,
        onlyCrafted,
        setOnlyCrafted,
        maxValue,
        visibleContributions,
        autoSelectedOutfits,
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
