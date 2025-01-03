import { redirect } from 'next/navigation'
import IdolsPage from '@/components/templates/IdolsPage'

interface IdolsProps {
  searchParams: Promise<{ id: string }>
}

export default async function Idols({ searchParams }: IdolsProps) {
  const { id: spreadsheetId } = await searchParams

  if (!spreadsheetId) {
    redirect('/')
  }

  return <IdolsPage spreadsheetId={spreadsheetId} />
}
