'use client'

import JobStats from '@/components/molecules/JobStats'
import { useSettings } from '@/providers/SettingsProvider'
import { ReactNode } from 'react'
import ContentLayout from '../ContentLayout'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const {
    spreadsheetIsSetup,
    idolStats,
    outfits,
    officeJob,
    selectedOutfits,
    maxValue,
  } = useSettings()

  if (!(spreadsheetIsSetup && idolStats && outfits && officeJob))
    return children

  return (
    <div className='h-full flex flex-col max-h-full'>
      <JobStats
        selectedJob={officeJob}
        selectedOutfits={selectedOutfits}
        maxValue={maxValue}
      />
      <ContentLayout>{children}</ContentLayout>
    </div>
  )
}

export default DashboardLayout
