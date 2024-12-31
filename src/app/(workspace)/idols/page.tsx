import { SearchParams } from '../dashboard/page'
import { redirect } from 'next/navigation'
import { initializeIdols } from '@/services/idols_actions'
import TopBar from '@/components/atoms/TopBar'
import Input from '@/components/atoms/Input'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'
import H1 from '@/components/atoms/H1'
import IdolsStatsForm from '@/components/organisms/IdolsStatsForm'

interface IdolsProps {
  searchParams: SearchParams
}

export default async function Idols({ searchParams }: IdolsProps) {
  const queryParams = await searchParams
  const spreadsheetId = queryParams.id as string

  if (!spreadsheetId) {
    redirect('/dashboard')
  }

  const statsResponse = await initializeIdols(spreadsheetId)
  if (!statsResponse.ok) {
    return <div>An error has occured: {statsResponse.error}</div>
  }
  const { allStats } = statsResponse

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
        <IdolsStatsForm idols={allStats} spreadsheetId={spreadsheetId} />
      </div>
    </div>
  )
}
