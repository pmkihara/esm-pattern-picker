'use client'

import TopBar from '@/components/atoms/TopBar'
import IdolsStatsForm from '@/components/organisms/IdolsStatsForm'
import ContentLayout from '@/components/organisms/ContentLayout'
import { useSettings } from '@/providers/SettingsProvider'
import { useEffect } from 'react'

interface IdolsPageProps {
  spreadsheetId: string
}

const IdolsPage = ({ spreadsheetId }: IdolsPageProps) => {
  const { spreadsheetIsSetup, setSpreadsheetId } = useSettings()

  useEffect(() => {
    if (spreadsheetIsSetup) return
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId, spreadsheetIsSetup])

  return (
    <div className='h-full flex flex-col max-h-full'>
      <TopBar>
        <h1 className='font-bold text-sky-700 text-lg'>Idol Stats</h1>
      </TopBar>
      <ContentLayout>
        <IdolsStatsForm />
      </ContentLayout>
    </div>
  )
}

export default IdolsPage
