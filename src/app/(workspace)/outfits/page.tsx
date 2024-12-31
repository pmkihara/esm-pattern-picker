import OutfitsPage from '@/components/organisms/OutfitsPage'
import { SearchParams } from '../dashboard/page'
import { redirect } from 'next/navigation'
import { groupByIdol, initializeOutfits } from '@/services/outfits_actions'

interface OutfitsProps {
  searchParams: SearchParams
}

export default async function Outfits({ searchParams }: OutfitsProps) {
  const queryParams = await searchParams
  const spreadsheetId = queryParams.id as string

  if (!spreadsheetId) {
    redirect('/dashboard')
  }

  const outfitsResponse = await initializeOutfits(spreadsheetId)
  if (!outfitsResponse.ok) {
    return <div>An error has occured: {outfitsResponse.error}</div>
  }
  const { outfits } = outfitsResponse
  const groupedOutfits = await groupByIdol(outfits)

  return <OutfitsPage outfits={groupedOutfits} />
}
