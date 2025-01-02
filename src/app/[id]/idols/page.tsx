import { initializeIdols } from '@/services/idols_actions'
import TopBar from '@/components/atoms/TopBar'
import Input from '@/components/atoms/Input'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'
import H1 from '@/components/atoms/H1'
import IdolsStatsForm from '@/components/organisms/IdolsStatsForm'
import ContentLayout from '@/components/organisms/ContentLayout'

interface IdolsProps {
  params: Promise<{ id: string }>
}

export default async function Idols({ params }: IdolsProps) {
  const { id: spreadsheetId } = await params

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
      <ContentLayout>
        <H1>Idol Stats</H1>
        <IdolsStatsForm idols={allStats} spreadsheetId={spreadsheetId} />
      </ContentLayout>
    </div>
  )
}
