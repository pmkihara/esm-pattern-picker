import DashboardPage from '@/components/templates/DashboardPage'
import { redirect } from 'next/navigation'

interface DashboardProps {
  searchParams: Promise<{ id: string }>
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const { id: spreadsheetId } = await searchParams

  if (!spreadsheetId) {
    redirect('/')
  }

  return <DashboardPage spreadsheetId={spreadsheetId} />
}
