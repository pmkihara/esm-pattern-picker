'use server'

import { Idol, idolsByUnit } from '@/data/idols'
import { OfficeJob } from '@/data/office-jobs'
import { Outfit, UserOutfit } from '@/data/outfits'
import { StatsMap } from '@/data/stats'
import { totalOutfitStat } from '@/lib/outfitStat'

export const autoSelect = async ({
  outfits,
  selectedJob,
  idolsStats,
  onlyCrafted = true,
}: {
  outfits: (Outfit | UserOutfit)[]
  selectedJob: OfficeJob
  idolsStats: StatsMap
  onlyCrafted?: boolean
}) => {
  // Return an array with <slots> number of outfits with the highest total value
  // of the selected job's stats, plus the stats of the outfit's idol
  const validIdols = selectedJob.unit
    ? idolsByUnit[selectedJob.unit]
    : (selectedJob.idols ?? [])

  const totalOutfitsValues = outfits.map((outfit) => {
    const isValidIdol =
      validIdols.includes(undefined) || validIdols.includes(outfit.idol as Idol)
    const isValidOutfit =
      onlyCrafted && 'crafted' in outfit ? outfit.crafted : true

    if (!isValidIdol || !isValidOutfit) {
      return { outfit, totalStat: 0 }
    }
    const idolStats = idolsStats[outfit.idol as Idol]
    const totalStat = totalOutfitStat({ selectedJob, outfit, idolStats })
    return { outfit, totalStat }
  })

  const sortedOutfits = totalOutfitsValues.sort(
    (a, b) => b.totalStat - a.totalStat,
  )

  // set <slots> number of outfits, but don't allow outfits from the same idol
  const selectedOutfits = sortedOutfits.reduce(
    (acc, { outfit }) => {
      if (acc.length >= validIdols.length) {
        return acc
      }

      if (
        !acc.some(
          ({ outfit: selectedOutfit }) => selectedOutfit.idol === outfit.idol,
        )
      ) {
        return [...acc, { outfit }]
      }

      return acc
    },
    [] as { outfit: Outfit | UserOutfit }[],
  )

  return selectedOutfits.map(({ outfit }) => outfit)
}
