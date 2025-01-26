'use client'

import TopBar from '@/components/atoms/TopBar'
import OutfitsForm from '../../organisms/OutfitsForm'
import ContentLayout from '../../organisms/ContentLayout'
import { useSettings } from '@/providers/SettingsProvider'
import { useEffect } from 'react'

interface OutfitsPageProps {
  spreadsheetId: string
}

const OutfitsPage = ({ spreadsheetId }: OutfitsPageProps) => {
  const { spreadsheetIsSetup, setSpreadsheetId } = useSettings()

  useEffect(() => {
    if (spreadsheetIsSetup) return
    setSpreadsheetId(spreadsheetId)
  }, [spreadsheetIsSetup, setSpreadsheetId, spreadsheetId])

  return (
    <div className='h-full flex flex-col max-h-full'>
      <TopBar>
        <h1 className='font-bold text-sky-700 text-lg'>Outfits & Patterns</h1>
      </TopBar>
      <ContentLayout>
        <OutfitsForm />
      </ContentLayout>
    </div>
  )
}

export default OutfitsPage
