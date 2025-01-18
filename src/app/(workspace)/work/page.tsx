import WorkPage from '@/components/templates/WorkPage'
import { redirect } from 'next/navigation'

interface OutfitsProps {
  searchParams: Promise<{ id: string }>
}

export default async function Work({ searchParams }: OutfitsProps) {
  const { id: spreadsheetId } = await searchParams

  if (!spreadsheetId) {
    redirect('/')
  }

  return <WorkPage spreadsheetId={spreadsheetId} />
}
