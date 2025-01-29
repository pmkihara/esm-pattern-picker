'use client'

import { useSettings } from '@/providers/SettingsProvider'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import SaveButton from '@/components/atoms/SaveButton'
import IdolTab from '@/components/atoms/IdolTab'
import { Idol } from '@/data/idols'
import ContentLayout from '@/components/organisms/ContentLayout'
import JobStats from '@/components/molecules/JobStats'
import OutfitsTable, {
  outfitsTableData,
} from '@/components/organisms/OutfitsTable'

interface EditPageProps {
  spreadsheetId: string
}

const EditPage = ({ spreadsheetId }: EditPageProps) => {
  const router = useRouter()
  const {
    setSpreadsheetId,
    selectedOutfits,
    setSelectedOutfits,
    officeJob,
    maxValue,
    outfitsContribution,
  } = useSettings()

  const tableData = useMemo(
    () => outfitsTableData(outfitsContribution),
    [outfitsContribution],
  )
  const [tab, setTab] = useState(0)
  const [activeOutfit, setActiveOutfit] = useState(selectedOutfits[tab])

  useEffect(() => {
    setSpreadsheetId(spreadsheetId)
  }, [setSpreadsheetId, spreadsheetId])

  useEffect(() => {
    if (selectedOutfits.length === 0) {
      router.push(`/dashboard?id=${spreadsheetId}`)
    }
  }, [router, selectedOutfits, spreadsheetId])

  const onSave = () => {
    const newOutfits = [...selectedOutfits]
    newOutfits[tab] = activeOutfit
    setSelectedOutfits(newOutfits)
  }

  const onClick = (outfitName: string) => {
    const outfit = outfitsContribution.find(
      (outfit) => outfit.outfit.fullName === outfitName,
    )
    if (outfit) {
      setActiveOutfit(outfit)
    }
  }

  const onTabChange = (index: number) => {
    setTab(index)
    setActiveOutfit(selectedOutfits[index])
  }

  if (!(selectedOutfits && officeJob)) return

  return (
    <div className='h-full flex flex-col max-h-full'>
      <JobStats
        selectedJob={officeJob}
        selectedOutfits={selectedOutfits}
        maxValue={maxValue}
        activeOutfit={activeOutfit}
        activeOutfitIndex={
          selectedOutfits[tab] !== activeOutfit ? tab : undefined
        }
      />
      <ContentLayout>
        <div className='grow flex flex-col mb-8 md:mb-6 overflow-y-hidden -mx-4 md:-mx-10 lg:mx-0'>
          <div className='relative shrink-0 grow-0 mb-2'>
            <div className='grid grid-cols-5 gap-2 w-fit px-4 lg:px-0'>
              {selectedOutfits.map((outfitContribution, index) => (
                <IdolTab
                  key={outfitContribution.outfit.idol}
                  idol={outfitContribution.outfit.idol as Idol}
                  onClick={() => onTabChange(index)}
                  active={tab === index}
                />
              ))}
            </div>
            <div className='absolute h-2 bg-sky-300 inset-x-0 -bottom-2 ' />
          </div>
          <OutfitsTable
            data={tableData}
            stats={Object.keys(outfitsContribution[0].statContributions)}
            activeOutfit={activeOutfit}
            originalOutfit={selectedOutfits[tab]}
            onClick={onClick}
            selectedOutfits={selectedOutfits}
          />
        </div>
        <SaveButton type='button' icon='save' onClick={onSave} />
      </ContentLayout>
    </div>
  )
}

export default EditPage
