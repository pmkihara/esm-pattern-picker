import { OfficeJob } from '@/data/office-jobs'
import { Outfit, UserOutfit } from '@/data/outfits'
import { allStats, Stats } from '@/data/stats'

export const totalOutfitStat = ({
  selectedJob,
  outfit,
  idolStats,
}: {
  selectedJob: OfficeJob
  outfit: Outfit | UserOutfit
  idolStats: Stats
}) => {
  return allStats.reduce((acc, stat) => {
    if (selectedJob[stat] === 0) return acc

    return acc + outfit[stat] + idolStats[stat]
  }, 0)
}
