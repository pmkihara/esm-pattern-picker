import { Idol } from '@/data/idols'
import { Outfit, UserOutfit } from '@/data/outfits'
import { Stat, Stats } from '@/data/stats'
import OutfitIcon from '@@/public/assets/icons/outfit.svg'
import OutfitSlashIcon from '@@/public/assets/icons/outfit-slash.svg'
import ThreadIcon from '@@/public/assets/icons/thread.svg'
import SvgImage from '@/components/atoms/SvgImage'
import StatTag from '@/components/atoms/StatTag'
import { TargetStats } from '@/lib/outfitStat'
import Avatar from '@/components/atoms/Avatar'
import { useBreakpoint } from '@/hooks/tailwind'
import JobStatBar from '@/components/atoms/JobStatBar'
import { OfficeJob } from '@/data/office-jobs'

interface OutfitOverviewProps {
  outfit: UserOutfit | Outfit
  idolStats: Stats
  statContributions: Partial<TargetStats>
  maxValue: number
  selectedJob: OfficeJob
}

const OutfitOverview = ({
  outfit,
  idolStats,
  statContributions,
  maxValue,
  selectedJob,
}: OutfitOverviewProps) => {
  const isTablet = useBreakpoint('md')

  const outfitStateIcon = () => {
    if ('crafted' in outfit) {
      return outfit.crafted ? OutfitIcon : ThreadIcon
    } else {
      return OutfitSlashIcon
    }
  }

  const stats = Object.keys(statContributions) as Stat[]

  const mobileStat = (stat: Stat) => (
    <div className='flex gap-1 items-center' key={stat}>
      <StatTag type={stat} />
      <span className='text-xs md:text-base'>
        <strong className='font-bold'>{statContributions[stat]} </strong>
        <span className='font-normal text-grey-500'>({idolStats[stat]})</span>
      </span>
    </div>
  )

  const desktopStat = (stat: Stat) => (
    <JobStatBar
      key={stat}
      stat={stat}
      targetValue={selectedJob[stat]}
      outfitValue={statContributions[stat] || 0}
      maxStat={maxValue}
      showTarget={false}
      additionalOutfitValue={idolStats[stat]}
    />
  )

  return (
    <div className='flex gap-4 items-center py-3 px-4 shadow-md bg-white border border-grey-100 rounded-lg'>
      <Avatar
        idol={outfit.idol as Idol}
        type='chibi'
        size='md'
        className='ring-2 ring-grey-200 bg-grey-50'
      />
      <div className='shrink grow'>
        <div className='flex gap-2 items-center mb-2'>
          <SvgImage
            src={outfitStateIcon().src}
            width='16'
            height='16'
            className='fill-black'
          />
          <span className='font-bold'>{outfit.name}</span>
        </div>
        <div className='grid grid-cols-3 gap-2 xl:gap-12 md:grid-cols-1 xl:grid-cols-3 items-center'>
          {stats.map((stat) =>
            isTablet ? desktopStat(stat) : mobileStat(stat),
          )}
        </div>
      </div>
    </div>
  )
}

export default OutfitOverview
