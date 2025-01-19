'use client'

import H1 from '@/components/atoms/H1'
import TopBar from '@/components/atoms/TopBar'
import ContentLayout from '../../organisms/ContentLayout'
import { useSettings } from '@/providers/SettingsProvider'
import { useEffect } from 'react'
import JobSearch from '@/components/molecules/JobSearch'
import JobForm from '@/components/organisms/JobForm'
import { initializeOutfits } from '@/services/outfits_actions'
import { OfficeJob } from '@/data/office-jobs'
import { useRouter } from 'next/navigation'

interface WorkPageProps {
  spreadsheetId: string
}

const WorkPage = ({ spreadsheetId }: WorkPageProps) => {
  const { setSpreadsheetId, officeJob, setOfficeJob, outfits, setOutfits } =
    useSettings()
  const router = useRouter()

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  useEffect(() => {
    if (outfits) return

    const initialize = async () => {
      const outfitsResponse = await initializeOutfits(spreadsheetId)
      if (!outfitsResponse.ok) {
        return
      }
      const { outfits: data } = outfitsResponse
      setOutfits(data)
    }
    initialize()
  }, [outfits, setOutfits, spreadsheetId])

  const onFormSubmit = (job: OfficeJob) => {
    setOfficeJob(job)
    router.push(`/dashboard?id=${spreadsheetId}`)
  }

  return (
    <div className='h-full flex flex-col max-h-full'>
      <TopBar className='flex items-center justify-between px-4 grow-0 shrink-0'>
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
