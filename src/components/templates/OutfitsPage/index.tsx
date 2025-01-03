'use client'

import H1 from '@/components/atoms/H1'
import Input from '@/components/atoms/Input'
import TopBar from '@/components/atoms/TopBar'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'
import OutfitsForm from '../../organisms/OutfitsForm'
import ContentLayout from '../../organisms/ContentLayout'
import { useSettings } from '@/providers/SettingsProvider'
import { useEffect } from 'react'
import { initializeOutfits } from '@/services/outfits_actions'

interface OutfitsPageProps {
  spreadsheetId: string
}

const OutfitsPage = ({ spreadsheetId }: OutfitsPageProps) => {
  const { setSpreadsheetId, outfits, setOutfits } = useSettings()

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  useEffect(() => {
    if (outfits) return

    const initialize = async () => {
      const outfitsResponse = await initializeOutfits(spreadsheetId)
      if (!outfitsResponse.ok) {
        return
      }
      const { outfits: data } = outfitsResponse
      setOutfits(data)
    }
    initialize()
  }, [outfits, setOutfits, spreadsheetId])

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
