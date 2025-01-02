import OutfitsPage from '@/components/organisms/OutfitsPage'
import { initializeOutfits } from '@/services/outfits_actions'

interface OutfitsProps {
  params: Promise<{ id: string }>
}

export default async function Outfits({ params }: OutfitsProps) {
  const { id: spreadsheetId } = await params

  const outfitsResponse = await initializeOutfits(spreadsheetId)
  if (!outfitsResponse.ok) {
    return <div>An error has occured: {outfitsResponse.error}</div>
  }
  const { outfits } = outfitsResponse

  return <OutfitsPage outfits={outfits} spreadsheetId={spreadsheetId} />
}
