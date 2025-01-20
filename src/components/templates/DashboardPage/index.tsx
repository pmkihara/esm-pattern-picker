'use client'

import { useSettings } from '@/providers/SettingsProvider'
import SetupSteps from '../../organisms/SetupSteps'
import { useEffect } from 'react'
import DashboardOverview from '@/components/organisms/DashboardOverview'

interface DashboardPageProps {
  spreadsheetId: string
}

const DashboardPage = ({ spreadsheetId }: DashboardPageProps) => {
  const {
    spreadsheetIsSetup,
    idolsAreSetup,
    outfitsAreSetup,
    setSpreadsheetId,
    officeJobIsSetup,
    idolStats,
    outfits,
    officeJob,
  } = useSettings()

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  return (
    <div className='h-full flex flex-col max-h-full'>
      {spreadsheetIsSetup && idolStats && outfits && officeJob ? (
        <DashboardOverview
          idolStats={idolStats}
          outfits={outfits}
          officeJob={officeJob}
        />
      ) : (
        <SetupSteps
          spreadsheetIsSetup={spreadsheetIsSetup}
          StatsAreSetup={idolsAreSetup}
          outfitsAreSetup={outfitsAreSetup}
          spreadsheetId={spreadsheetId}
          officeJobIsSetup={officeJobIsSetup}
        />
      )}
    </div>
  )
}

export default DashboardPage
