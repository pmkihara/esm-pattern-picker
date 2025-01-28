'use client'

import { useSettings } from '@/providers/SettingsProvider'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SaveButton from '@/components/atoms/SaveButton'
import IdolTab from '@/components/atoms/IdolTab'
import { Idol } from '@/data/idols'
import ContentLayout from '@/components/organisms/ContentLayout'
import JobStats from '@/components/molecules/JobStats'

interface EditPageProps {
  spreadsheetId: string
}

const EditPage = ({ spreadsheetId }: EditPageProps) => {
  const router = useRouter()
  const { setSpreadsheetId, selectedOutfits, officeJob, maxValue } =
    useSettings()

  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  useEffect(() => {
    if (selectedOutfits.length === 0) {
      router.push(`/dashboard?id=${spreadsheetId}`)
    }
  }, [router, selectedOutfits, spreadsheetId])

  const onSave = () => {
    console.log('Save')
  }

  if (!(selectedOutfits && officeJob)) return

  return (
    <div className='h-full flex flex-col max-h-full'>
      <JobStats
        selectedJob={officeJob}
        selectedOutfits={selectedOutfits}
        maxValue={maxValue}
        activeOutfit={selectedOutfits[activeTab]}
      />
      <ContentLayout>
        <div className='grow'>
          <div className='relative'>
            <div className='grid grid-cols-5 gap-2 w-fit'>
              {selectedOutfits.map(({ outfit }, index) => (
                <IdolTab
                  key={outfit.idol}
                  idol={outfit.idol as Idol}
                  onClick={() => setActiveTab(index)}
                  active={index === activeTab}
                />
              ))}
            </div>
            <div className='absolute h-2 bg-sky-300 inset-x-0 -bottom-2 -mx-4 ' />
          </div>
        </div>
        <SaveButton type='button' icon='save' onClick={onSave} />
      </ContentLayout>
    </div>
  )
}

export default EditPage
