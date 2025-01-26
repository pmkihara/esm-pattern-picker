'use client'

import H1 from '@/components/atoms/H1'
import TopBar from '@/components/atoms/TopBar'
import ContentLayout from '../../organisms/ContentLayout'
import { useSettings } from '@/providers/SettingsProvider'
import { useEffect } from 'react'
import JobSearch from '@/components/molecules/JobSearch'
import JobForm from '@/components/organisms/JobForm'
import { OfficeJob } from '@/data/office-jobs'
import { useRouter } from 'next/navigation'

interface WorkPageProps {
  spreadsheetId: string
}

const WorkPage = ({ spreadsheetId }: WorkPageProps) => {
  const {
    spreadsheetIsSetup,
    setSpreadsheetId,
    officeJob,
    setOfficeJob,
    outfits,
  } = useSettings()
  const router = useRouter()

  useEffect(() => {
    if (spreadsheetIsSetup) return
    setSpreadsheetId(spreadsheetId)
  }, [spreadsheetIsSetup, setSpreadsheetId, spreadsheetId])

  const onFormSubmit = (job: OfficeJob) => {
    setOfficeJob(job)
    router.push(`/dashboard?id=${spreadsheetId}`)
  }

  return (
    <div className='h-full flex flex-col max-h-full'>
      <TopBar>
        <JobSearch selectedJob={officeJob} setOfficeJob={setOfficeJob} />
      </TopBar>
      <ContentLayout>
        {officeJob ? (
          <>
            <H1>Job settings</H1>
            <JobForm
              officeJob={officeJob}
              onFormSubmit={onFormSubmit}
              outfits={outfits ?? []}
              key={officeJob.name}
            />
          </>
        ) : (
          <div className='h-full flex items-center justify-center text-lg text-sky-300 font-semibold'>
            Select a job
          </div>
        )}
      </ContentLayout>
    </div>
  )
}

export default WorkPage
