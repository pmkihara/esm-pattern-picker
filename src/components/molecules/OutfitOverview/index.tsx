import IdolImage from '@/components/atoms/IdolImage'
import { Idol } from '@/data/idols'
import { Outfit, UserOutfit } from '@/data/outfits'
import { allStats, Stats } from '@/data/stats'
import { twMerge } from 'tailwind-merge'
import OutfitIcon from '@@/public/assets/icons/outfit.svg'
import OutfitSlashIcon from '@@/public/assets/icons/outfit-slash.svg'
import ThreadIcon from '@@/public/assets/icons/thread.svg'
import SvgImage from '@/components/atoms/SvgImage'
import { OfficeJob } from '@/data/office-jobs'
import StatTag from '@/components/atoms/StatTag'

interface OutfitOverviewProps {
  outfit: UserOutfit | Outfit
  idolStats: Stats
  selectedJob: OfficeJob
}

const OutfitOverview = ({
  outfit,
  idolStats,
  selectedJob,
}: OutfitOverviewProps) => {
  const outfitStateIcon = () => {
    if ('crafted' in outfit) {
      return outfit.crafted ? OutfitIcon : ThreadIcon
    } else {
      return OutfitSlashIcon
    }
  }

  return (
    <div className='flex gap-4 items-center py-4'>
      <div className='shrink-0 grow-0'>
        <div
          className={twMerge(
            'overflow-hidden rounded-tl-lg rounded-br-lg aspect-square',
            'bg-grey-50 ring-2 ring-grey-200',
            'group flex justify-center  max-w-14 w-full',
          )}
        >
          <IdolImage idol={outfit.idol as Idol} />
        </div>
      </div>
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
        <div className='grid grid-cols-3 items-center'>
          {allStats.map((stat) => {
            if (selectedJob[stat] > 0) {
              return (
                <div className='flex gap-1 items-center' key={stat}>
                  <StatTag type={stat} />
                  <span className='text-xs md:text-base'>
                    <strong className='font-bold'>
                      {outfit[stat] + idolStats[stat]}{' '}
                    </strong>
                    ({idolStats[stat]})
                  </span>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default OutfitOverview
