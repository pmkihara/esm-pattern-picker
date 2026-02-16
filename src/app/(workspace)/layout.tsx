import WorkspaceLayout from '@/components/organisms/WorkspaceLayout'
import { ReactNode } from 'react'

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <WorkspaceLayout>{children}</WorkspaceLayout>
}
