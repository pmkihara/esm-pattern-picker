import StepsPage from '@/components/templates/StepsPage'
import { redirect } from 'next/navigation'

interface StepsProps {
  searchParams: Promise<{ id: string }>
}

export default async function Steps({ searchParams }: StepsProps) {
  const { id: spreadsheetId } = await searchParams

  if (!spreadsheetId) {
    redirect('/')
  }

  return <StepsPage spreadsheetId={spreadsheetId} />
}
