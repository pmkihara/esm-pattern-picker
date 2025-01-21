import JobStatBar from '@/components/atoms/JobStatBar'
import SvgImage from '@/components/atoms/SvgImage'
import TopBar from '@/components/atoms/TopBar'
import { OfficeJob } from '@/data/office-jobs'
import { allStats, Stat } from '@/data/stats'
import { useJobGroupImages } from '@/hooks/useJobGroupImages'
import { OutfitContribution } from '@/lib/outfitStat'
import { twMerge } from 'tailwind-merge'

interface JobStatsProps {
  selectedJob: OfficeJob
  selectedOutfits: OutfitContribution[]
}

const JobStats = ({ selectedJob, selectedOutfits }: JobStatsProps) => {
  const groupIcons = useJobGroupImages()
  const statValues = allStats.map((stat) => selectedJob[stat])
  const maxValue = Math.max(...statValues) + 500

  const totalOutfitValue = (stat: Stat) => {
    return selectedOutfits.reduce((acc, outfitContribution) => {
      return acc + outfitContribution.statContributions[stat]
    }, 0)
  }

  return (
    <TopBar className='rounded-b-2xl md:rounded-none px-4 py-3 h-fit'>
      <div className='flex gap-2 items-center mb-4'>
        <SvgImage
          src={groupIcons[selectedJob?.group ?? 'none'].src}
          width='16'
          height='16'
          className={'group-focus:fill-sky-400 fill-grey-300 -ml-px'}
        />
        <span
          className={twMerge('ml-px', selectedJob && 'text-sky-900 font-bold')}
        >
          {selectedJob.name}
        </span>
      </div>
      <div className='bg-white p-4 md:p-6 rounded grid gap-2 md:gap-3'>
        {allStats.map((stat) => {
          return (
            selectedJob[stat] > 0 && (
              <JobStatBar
                key={stat}
                stat={stat}
                targetValue={selectedJob[stat]}
                outfitValue={totalOutfitValue(stat)}
                maxStat={maxValue}
              />
            )
          )
        })}
      </div>
    </TopBar>
  )
}

export default JobStats
