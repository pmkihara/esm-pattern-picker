'use client'

import Button from '@/components/atoms/Button'
import H1 from '@/components/atoms/H1'
import Input from '@/components/atoms/Input'
import TopBar from '@/components/atoms/TopBar'
import { OutfitsByIdol } from '@/data/outfits'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'

interface OutfitsPageProps {
  outfits: OutfitsByIdol
}

const OutfitsPage = ({ outfits }: OutfitsPageProps) => {
  return (
    <div className='h-full flex flex-col max-h-full'>
      <TopBar className='flex items-center justify-between px-4 grow-0 shrink-0'>
        <Input
          placeholder='Search by name...'
          wrapperClassName='w-full max-w-screen-lg'
          iconSrc={MagnifierIcon.src}
        />
      </TopBar>
      <div className='p-4 pb-12 md:py-6 md:px-10 flex-grow h-full max-h-full overflow-auto'>
        <H1>Outfits & Patterns</H1>
        <Button variant='outline'>+ Add Outfits & Patterns</Button>
        {JSON.stringify(outfits)}
        {/* <IdolsStatsForm idols={idolStats} spreadsheetId={spreadsheetId} /> */}
      </div>
    </div>
  )
}

export default OutfitsPage
