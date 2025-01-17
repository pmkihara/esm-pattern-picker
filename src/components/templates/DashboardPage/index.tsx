'use client'

import { useSettings } from '@/providers/SettingsProvider'
import SetupSteps from '../../organisms/SetupSteps'
import { useEffect } from 'react'

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
  } = useSettings()

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  return (
    <div className='h-full flex flex-col max-h-full'>
      {spreadsheetIsSetup &&
      idolsAreSetup &&
      outfitsAreSetup &&
      officeJobIsSetup ? (
        <div className='h-full flex flex-col max-h-full'>
          Show the dashboard
        </div>
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
