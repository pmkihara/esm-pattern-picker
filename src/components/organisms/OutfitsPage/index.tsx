'use client'

import H1 from '@/components/atoms/H1'
import Input from '@/components/atoms/Input'
import TopBar from '@/components/atoms/TopBar'
import { OutfitsMap } from '@/data/outfits'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'
import OutfitsForm from '../OutfitsForm'
import ContentLayout from '../ContentLayout'

interface OutfitsPageProps {
  outfits: OutfitsMap
  spreadsheetId: string
}

const OutfitsPage = ({ outfits, spreadsheetId }: OutfitsPageProps) => {
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
        <OutfitsForm outfits={outfits} spreadsheetId={spreadsheetId} />
      </ContentLayout>
    </div>
  )
}

export default OutfitsPage
