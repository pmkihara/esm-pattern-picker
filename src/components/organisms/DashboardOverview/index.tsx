import RadioTag from '@/components/atoms/RadioTag'
import JobStats from '@/components/molecules/JobStats'
import OutfitOverview from '@/components/molecules/OutfitOverview'
import { Idol } from '@/data/idols'
import { OfficeJob } from '@/data/office-jobs'
import { UserOutfit } from '@/data/outfits'
import { StatsMap } from '@/data/stats'
import { autoSelect } from '@/lib/autoSelect'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import ContentLayout from '../ContentLayout'
import {
  getOutfitsContribution,
  isValidOutfit,
  OutfitContribution,
} from '@/lib/outfitStat'

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
  const [selectedOutfits, setSelectedOutfits] = useState<OutfitContribution[]>(
    [],
  )
  const [onlyCrafted, setOnlyCrafted] = useState(true)

  const outfitsContribution = useMemo(() => {
    return getOutfitsContribution(outfits, officeJob, idolStats)
  }, [outfits, officeJob, idolStats])

  const visibleContributions = useMemo(() => {
    return outfitsContribution.filter((contribution) =>
      isValidOutfit(contribution.outfit, onlyCrafted),
    )
  }, [outfitsContribution, onlyCrafted])

  useEffect(() => {
    const selectedOutfits = autoSelect(visibleContributions, officeJob)
    setSelectedOutfits(selectedOutfits)
  }, [officeJob, visibleContributions])

  const onRadioChange = (e: FormEvent<HTMLFieldSetElement>) => {
    const input = e.target as HTMLInputElement
    setOnlyCrafted(input.value === 'crafted')
  }

  return (
    <>
      <JobStats selectedJob={officeJob} selectedOutfits={selectedOutfits} />
      <ContentLayout>
        <fieldset
          className='grid grid-cols-2 gap-4 p-4 pb-0'
          onChange={onRadioChange}
        >
          <RadioTag name='patterns' value='owned'>
            Owned
          </RadioTag>
          <RadioTag
            name='patterns'
            value='crafted'
            defaultChecked={onlyCrafted}
          >
            Crafted
          </RadioTag>
        </fieldset>
        <div className='grid divide-y divide-grey-100 p-4 pt-0'>
          {selectedOutfits.map(({ outfit, statContributions }) => (
            <OutfitOverview
              key={outfit.fullName}
              outfit={outfit}
              idolStats={idolStats[outfit.idol as Idol]}
              statContributions={statContributions}
            />
          ))}
        </div>
      </ContentLayout>
    </>
  )
}

export default DashboardOverview
