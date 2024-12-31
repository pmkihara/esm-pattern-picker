import DashboardPage from '@/components/organisms/DashboardPage'
import SetupSteps from '@/components/organisms/SetupSteps'
import { checkSpreadsheetAccess } from '@/services/access_actions'
import { checkIdolsSheet } from '@/services/idols_actions'
import { checkOutfitsSheet } from '@/services/outfits_actions'

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined
}>
interface DashboardProps {
  searchParams: SearchParams
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const queryParams = await searchParams
  const spreadsheetId = queryParams.id as string

  const { ok: spreadsheetIsSetup } = await checkSpreadsheetAccess(spreadsheetId)
  const { ok: idolsAreSetup } = await checkIdolsSheet(spreadsheetId)
  const { ok: outfitsAreSetup } = await checkOutfitsSheet(spreadsheetId)

  const setupIsComplete = spreadsheetIsSetup && idolsAreSetup && outfitsAreSetup

  return (
    <div className='h-full flex flex-col max-h-full'>
      {setupIsComplete ? (
        <DashboardPage />
      ) : (
        <SetupSteps
          spreadsheetIsSetup={spreadsheetIsSetup}
          StatsAreSetup={idolsAreSetup}
          outfitsAreSetup={outfitsAreSetup}
          spreadsheetId={spreadsheetId}
        />
      )}
    </div>
  )
}
