'use client'

import { useSettings } from '@/providers/SettingsProvider'
import LoadingOverlay from '../LoadingOverlay'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const SettingsLoading = () => {
  const searchParams = useSearchParams()
  const initialId = searchParams.get('id') || undefined
  const router = useRouter()
  const { spreadsheetId, setSpreadsheetId } = useSettings()

  useEffect(() => {
    if (!spreadsheetId && !initialId) {
      router.push('/')
      return
    }
    if (spreadsheetId || !initialId) return
    setSpreadsheetId(initialId)
  }, [spreadsheetId, initialId, setSpreadsheetId, router])

  return <LoadingOverlay isLoading={!spreadsheetId} />
}

export default SettingsLoading
