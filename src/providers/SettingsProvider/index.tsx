'use client'

import { createSheet, getSheetNames } from '@/services/googleapis'
import { useRouter } from 'next/navigation'
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
  sheetNames?: string[]
  setSheetNames: (names: string[]) => void
}

export const SettingsContext = createContext<SettingsContext | undefined>(
  undefined,
)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const router = useRouter()
  const [spreadsheetId, setSpreadsheetId] = useState<string | undefined>()
  const [sheetNames, setSheetNames] = useState<string[] | undefined>()

  const updateSheetNames = useCallback(async (id: string) => {
    if (!id) return
    const namesResponse = await getSheetNames(id)
    const names = namesResponse.sheetNames
    setSheetNames(names || [])
  }, [])

  useEffect(() => {
    if (!spreadsheetId) return

    updateSheetNames(spreadsheetId)
  }, [spreadsheetId, updateSheetNames])

  useEffect(() => {
    if (!spreadsheetId || !sheetNames) return

    if (!sheetNames.includes('idols')) {
      createSheet(spreadsheetId, 'idols')
      router.push(`/idols?id=${spreadsheetId}`)
    } else if (!sheetNames.includes('outfits')) {
      createSheet(spreadsheetId, 'outfits')
      router.push(`/outfits?id=${spreadsheetId}`)
    }
  }, [spreadsheetId, sheetNames, router])

  return (
    <SettingsContext.Provider
      value={{ spreadsheetId, setSpreadsheetId, sheetNames, setSheetNames }}
    >
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
