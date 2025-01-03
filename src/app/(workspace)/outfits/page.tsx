import OutfitsPage from '@/components/templates/OutfitsPage'
import { redirect } from 'next/navigation'

interface OutfitsProps {
  searchParams: Promise<{ id: string }>
}

export default async function Outfits({ searchParams }: OutfitsProps) {
  const { id: spreadsheetId } = await searchParams

  if (!spreadsheetId) {
    redirect('/')
  }

  return <OutfitsPage spreadsheetId={spreadsheetId} />
}
