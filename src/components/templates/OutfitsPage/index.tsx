'use client'

import H1 from '@/components/atoms/H1'
import Input from '@/components/atoms/Input'
import TopBar from '@/components/atoms/TopBar'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'
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
      <TopBar className='flex items-center justify-between px-4 grow-0 shrink-0'>
        <Input
          placeholder='Search by name...'
          wrapperClassName='w-full max-w-screen-lg'
          iconSrc={MagnifierIcon.src}
        />
      </TopBar>
      <ContentLayout>
        <H1>Outfits & Patterns</H1>
        <OutfitsForm />
      </ContentLayout>
    </div>
  )
}

export default OutfitsPage
