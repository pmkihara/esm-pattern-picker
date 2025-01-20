import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import RadioTag from '@/components/atoms/RadioTag'
import JobStats from '@/components/molecules/JobStats'
import OutfitOverview from '@/components/molecules/OutfitOverview'
import { Idol } from '@/data/idols'
import { OfficeJob } from '@/data/office-jobs'
import { Outfit, UserOutfit } from '@/data/outfits'
import { StatsMap } from '@/data/stats'
import { autoSelect } from '@/services/autoSelect'
import { FormEvent, useEffect, useState } from 'react'
import ContentLayout from '../ContentLayout'

interface DashboardOverviewProps {
  idolStats: StatsMap
  outfits: UserOutfit[]
  officeJob: OfficeJob
}

const DashboardOverview = ({
  idolStats,
  outfits,
  officeJob,
}: DashboardOverviewProps) => {
  const [selectedOutfits, setSelectedOutfits] = useState<
    (Outfit | UserOutfit)[]
  >([])
  const [onlyCrafted, setOnlyCrafted] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getAutoSelectedOutfits = async () => {
      setIsLoading(true)
      const autoSelectedOutfits = await autoSelect({
        outfits,
        selectedJob: officeJob,
        idolsStats: idolStats,
        onlyCrafted,
      })
      setSelectedOutfits(autoSelectedOutfits)
      setIsLoading(false)
    }

    getAutoSelectedOutfits()
  }, [idolStats, officeJob, outfits, onlyCrafted])

  const onRadioChange = (e: FormEvent<HTMLFieldSetElement>) => {
    const input = e.target as HTMLInputElement
    setOnlyCrafted(input.value === 'true')
  }

  return isLoading ? (
    <LoadingOverlay isLoading={isLoading} />
  ) : (
    <>
      <JobStats
        selectedJob={officeJob}
        selectedOutfits={selectedOutfits}
        idolStats={idolStats}
      />
      <ContentLayout>
        <fieldset
          className='grid grid-cols-2 gap-4 p-4 pb-0'
          onChange={onRadioChange}
        >
          <RadioTag
            name='only-checked'
            value='false'
            defaultChecked={!onlyCrafted}
          >
            All Patterns
          </RadioTag>
          <RadioTag
            name='only-checked'
            value='true'
            defaultChecked={onlyCrafted}
          >
            Only Crafted
          </RadioTag>
        </fieldset>
        <div className='grid divide-y divide-grey-100 p-4 pt-0'>
          {selectedOutfits.map((outfit) => (
            <OutfitOverview
              key={outfit.fullName}
              outfit={outfit}
              idolStats={idolStats[outfit.idol as Idol]}
              selectedJob={officeJob}
            />
          ))}
        </div>
      </ContentLayout>
    </>
  )
}

export default DashboardOverview
