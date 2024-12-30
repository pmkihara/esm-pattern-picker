'use client'

import { useSettings } from '@/providers/SettingsProvider'
import SetupSteps from '../SetupSteps'

const DashboardPage = () => {
  // TODO: If the setup is complete, show the dashboard
  const { spreadsheetIsSetup, idolsAreSetup, outfitsAreSetup } = useSettings()

  return (
    <div className='h-full flex flex-col max-h-full'>
      <SetupSteps
        spreadsheetIsSetup={spreadsheetIsSetup}
        StatsAreSetup={idolsAreSetup}
        outfitsAreSetup={outfitsAreSetup}
      />
    </div>
  )
}

export default DashboardPage
