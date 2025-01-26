'use client'

import { useSettings } from '@/providers/SettingsProvider'
import { useEffect } from 'react'
import DashboardOverview from '@/components/organisms/DashboardOverview'
import { useRouter } from 'next/navigation'

interface DashboardPageProps {
  spreadsheetId: string
}

const DashboardPage = ({ spreadsheetId }: DashboardPageProps) => {
  const router = useRouter()
  const {
    spreadsheetIsSetup,
    setSpreadsheetId,
    idolStats,
    outfits,
    officeJob,
  } = useSettings()

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  useEffect(() => {
    if (!(spreadsheetIsSetup && idolStats && outfits && officeJob)) {
      router.push(`/steps?id=${spreadsheetId}`)
    }
  }, [idolStats, officeJob, outfits, router, spreadsheetId, spreadsheetIsSetup])

  return (
    <div className='h-full flex flex-col max-h-full'>
      {idolStats && outfits && officeJob && (
        <DashboardOverview
          idolStats={idolStats}
          outfits={outfits}
          officeJob={officeJob}
        />
      )}
    </div>
  )
}

export default DashboardPage
