import EditPage from '@/components/templates/EditPage'
import { redirect } from 'next/navigation'

interface EditProps {
  searchParams: Promise<{ id: string }>
}

export default async function Edit({ searchParams }: EditProps) {
  const { id: spreadsheetId } = await searchParams

  if (!spreadsheetId) {
    redirect('/')
  }

  return <EditPage spreadsheetId={spreadsheetId} />
}
