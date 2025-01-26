import JobStats from '@/components/molecules/JobStats'
import OutfitOverview from '@/components/molecules/OutfitOverview'
import { Idol } from '@/data/idols'
import { OfficeJob } from '@/data/office-jobs'
import { UserOutfit } from '@/data/outfits'
import { allStats, StatsMap } from '@/data/stats'
import { autoSelect } from '@/lib/autoSelect'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import ContentLayout from '../ContentLayout'
import {
  getOutfitsContribution,
  isValidOutfit,
  OutfitContribution,
} from '@/lib/outfitStat'
import SwitchToggle from '@/components/atoms/SwitchToggle'
import SaveButton from '@/components/atoms/SaveButton'

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
  const statValues = allStats.map((stat) => officeJob[stat])
  const maxValue = Math.max(...statValues) + 500

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

  const onToggleChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    setOnlyCrafted(input.checked)
  }

  return (
    <>
      <JobStats
        selectedJob={officeJob}
        selectedOutfits={selectedOutfits}
        maxValue={maxValue}
      />
      <ContentLayout>
        <div className='grow'>
          <SwitchToggle onChange={onToggleChange} defaultChecked={onlyCrafted}>
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
        <SaveButton type='button' icon='edit' />
      </ContentLayout>
    </>
  )
}

export default DashboardOverview
