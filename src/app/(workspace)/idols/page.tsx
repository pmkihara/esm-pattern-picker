import H1 from '@/components/atoms/H1'
import Input from '@/components/atoms/Input'
import TopBar from '@/components/atoms/TopBar'
import IdolAttrsTable from '@/components/organisms/IdolAttrsTable'
import { initializeIdols } from '@/services/idols'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'

export default async function Idols() {
  const id = process.env.NEXT_PUBLIC_SPREADSHEET_ID || ''
  const idols = await initializeIdols(id)

  return (
    <div className='h-full flex flex-col max-h-full'>
      <TopBar className='flex items-center justify-between px-4 grow-0 shrink-0'>
        <Input
          placeholder='Search by name...'
          wrapperClassName='w-full'
          iconSrc={MagnifierIcon.src}
        />
      </TopBar>
      <div className='p-4 md:py-6 md:px-10 flex-grow h-full max-h-full overflow-auto'>
        <H1>Idol Settings</H1>
        <IdolAttrsTable idols={idols} />
      </div>
    </div>
  )
}
