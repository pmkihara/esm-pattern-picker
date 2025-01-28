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
  maxValue: number
  activeOutfit?: OutfitContribution
}

const JobStats = ({
  selectedJob,
  selectedOutfits,
  maxValue,
  activeOutfit,
}: JobStatsProps) => {
  const groupIcons = useJobGroupImages()

  const totalOutfitValue = (stat: Stat) => {
    return selectedOutfits.reduce((acc, outfitContribution) => {
      return acc + outfitContribution.statContributions[stat]
    }, 0)
  }

  return (
    <TopBar className='rounded-b-2xl md:rounded-none pt-3 pb-4 h-fit block'>
      <div className='flex gap-2 items-center mb-2'>
        <SvgImage
          src={groupIcons[selectedJob?.group ?? 'none'].src}
          width='16'
          height='16'
          className={'group-focus:fill-sky-400 fill-grey-300 -ml-px'}
        />
        <span
          className={twMerge('ml-px', selectedJob && 'text-sky-950 font-bold')}
        >
          {selectedJob.name}
        </span>
      </div>
      <div className='bg-white p-4 rounded-lg grid xl:grid-cols-3 gap-2 xl:gap-6 shadow-md lg:py-6'>
        {allStats.map((stat) => {
          return (
            selectedJob[stat] > 0 && (
              <JobStatBar
                key={stat}
                stat={stat}
                targetValue={selectedJob[stat]}
                outfitValue={totalOutfitValue(stat)}
                maxStat={maxValue}
                highlightedValue={activeOutfit?.statContributions[stat]}
              />
            )
          )
        })}
      </div>
    </TopBar>
  )
}

export default JobStats
