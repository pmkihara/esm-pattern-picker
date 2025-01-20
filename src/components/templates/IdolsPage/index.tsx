'use client'

import TopBar from '@/components/atoms/TopBar'
import Input from '@/components/atoms/Input'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'
import H1 from '@/components/atoms/H1'
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
      <TopBar className='flex items-center justify-between px-4 grow-0 shrink-0'>
        <Input
          placeholder='Search by name...'
          wrapperClassName='w-full max-w-screen-lg'
          iconSrc={MagnifierIcon.src}
        />
      </TopBar>
      <ContentLayout>
        <H1>Idol Stats</H1>
        <IdolsStatsForm />
      </ContentLayout>
    </div>
  )
}

export default IdolsPage
