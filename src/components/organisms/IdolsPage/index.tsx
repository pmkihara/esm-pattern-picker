'use client'

import H1 from '@/components/atoms/H1'
import Input from '@/components/atoms/Input'
import TopBar from '@/components/atoms/TopBar'
import IdolAttrsTable from '@/components/organisms/IdolAttrsTable'
import { useSettings } from '@/providers/SettingsProvider'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'

const IdolsPage = () => {
  const { spreadsheetId, idolAttrs } = useSettings()

  if (spreadsheetId === undefined || idolAttrs === undefined) return null

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
        <H1>Idol Stats</H1>
        <IdolAttrsTable idols={idolAttrs} spreadsheetId={spreadsheetId} />
      </div>
    </div>
  )
}

export default IdolsPage
