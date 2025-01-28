'use client'

import { useSettings } from '@/providers/SettingsProvider'
import { FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SwitchToggle from '@/components/atoms/SwitchToggle'
import OutfitOverview from '@/components/molecules/OutfitOverview'
import { Idol } from '@/data/idols'
import SaveButton from '@/components/atoms/SaveButton'
import Link from 'next/link'
import ContentLayout from '@/components/organisms/ContentLayout'
import JobStats from '@/components/molecules/JobStats'

interface DashboardPageProps {
  spreadsheetId: string
}

const DashboardPage = ({ spreadsheetId }: DashboardPageProps) => {
  const router = useRouter()
  const {
    setSpreadsheetId,
    idolStats,
    officeJob,
    selectedOutfits,
    maxValue,
    updateAutoSelectOutfits,
  } = useSettings()

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  useEffect(() => {
    if (!(idolStats && officeJob && selectedOutfits)) {
      router.push(`/steps?id=${spreadsheetId}`)
    }
  }, [idolStats, officeJob, router, selectedOutfits, spreadsheetId])

  const onToggleChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    updateAutoSelectOutfits(input.checked)
  }

  if (!(idolStats && officeJob && selectedOutfits)) return

  return (
    <div className='h-full flex flex-col max-h-full'>
      <JobStats
        selectedJob={officeJob}
        selectedOutfits={selectedOutfits}
        maxValue={maxValue}
      />
      <ContentLayout>
        <div className='grow mb-12 md:mb-6'>
          <SwitchToggle onChange={onToggleChange} defaultChecked={false}>
            <span className='text-sm font-bold'>Only crafted outfits</span>
          </SwitchToggle>
          <div className='grid gap-4 mt-4'>
            {selectedOutfits.map(({ outfit, statContributions }) => (
              <OutfitOverview
                key={outfit.fullName}
                outfit={outfit}
                idolStats={idolStats[outfit.idol as Idol]}
                statContributions={statContributions}
                maxValue={maxValue}
                selectedJob={officeJob}
              />
            ))}
          </div>
        </div>
        <Link href={`/dashboard/edit?id=${spreadsheetId}`}>
          <SaveButton type='button' icon='edit' />
        </Link>
      </ContentLayout>
    </div>
  )
}

export default DashboardPage
