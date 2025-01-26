'use client'

import { useSettings } from '@/providers/SettingsProvider'
import SetupSteps from '../../organisms/SetupSteps'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface StepsPageProps {
  spreadsheetId: string
}

const StepsPage = ({ spreadsheetId }: StepsPageProps) => {
  const router = useRouter()
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

  useEffect(() => {
    if (spreadsheetIsSetup && idolStats && outfits && officeJob) {
      router.push(`/dashboard/${spreadsheetId}`)
    }
  }, [idolStats, officeJob, outfits, router, spreadsheetId, spreadsheetIsSetup])

  return (
    <div className='h-full flex flex-col max-h-full'>
      <SetupSteps
        spreadsheetIsSetup={spreadsheetIsSetup}
        StatsAreSetup={idolsAreSetup}
        outfitsAreSetup={outfitsAreSetup}
        spreadsheetId={spreadsheetId}
        officeJobIsSetup={officeJobIsSetup}
      />
    </div>
  )
}

export default StepsPage
