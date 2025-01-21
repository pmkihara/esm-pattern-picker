import { Idol, idolsByUnit } from '@/data/idols'
import { OfficeJob } from '@/data/office-jobs'
import { Outfit, UserOutfit } from '@/data/outfits'
import { allStats, Stat, Stats, StatsMap } from '@/data/stats'

export type TargetStats = Record<Stat, number>

export interface OutfitContribution {
  outfit: UserOutfit | Outfit
  totalContribution: number
  statContributions: TargetStats
}

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

export const getJobStats = (officeJob: OfficeJob) => {
  // Return the stats of the selected job that are greater than 0
  const targetStats = allStats.reduce((acc, stat) => {
    if (officeJob[stat] > 0) {
      acc[stat] = officeJob[stat]
    }
    return acc
  }, {} as TargetStats)
  const stats = Object.keys(targetStats) as Stat[]
  return { targetStats, stats }
}

export const getTotalContribution = (
  stats: Stat[],
  outfit: Outfit | UserOutfit,
  idolStats: Stats,
) => {
  return stats.reduce((acc, stat) => {
    return acc + outfit[stat] + idolStats[stat]
  }, 0)
}

export const getStatsContribution = (
  stats: Stat[],
  outfit: Outfit | UserOutfit,
  idolStats: Stats,
) => {
  return stats.reduce((acc, stat) => {
    acc[stat] = outfit[stat] + idolStats[stat]
    return acc
  }, {} as TargetStats)
}

export const outfitContribution = (
  outfit: UserOutfit | Outfit,
  stats: Stat[],
  idolsStats: StatsMap,
): OutfitContribution => {
  const idolStats = idolsStats[outfit.idol as Idol]
  const totalContribution = getTotalContribution(stats, outfit, idolStats)
  const statContributions = getStatsContribution(stats, outfit, idolStats)
  return { outfit, totalContribution, statContributions }
}

export const isValidIdol = (idol: Idol, validIdols: (string | undefined)[]) => {
  // Idol is valid when:
  // - validIdols includes undefined (all idols)
  // - validIdols includes the idol
  return validIdols.includes(undefined) || validIdols.includes(idol)
}

export const isValidOutfit = (
  outfit: Outfit | UserOutfit,
  onlyCrafted: boolean,
) => {
  // Outfit is valid when:
  // - onlyCrafted is false
  // - onlyCrafted is true and the outfit is crafted
  return !onlyCrafted || ('crafted' in outfit && outfit.crafted)
}

export const getValidIdols = (selectedJob: OfficeJob) => {
  return selectedJob.unit
    ? idolsByUnit[selectedJob.unit]
    : (selectedJob.idols ?? [])
}

export const getOutfitsContribution = (
  outfits: (Outfit | UserOutfit)[],
  selectedJob: OfficeJob,
  idolsStats: StatsMap,
): OutfitContribution[] => {
  const validIdols = getValidIdols(selectedJob)

  const validOutfits = outfits.filter((outfit) =>
    isValidIdol(outfit.idol as Idol, validIdols),
  )
  const { stats } = getJobStats(selectedJob)
  return validOutfits.map((outfit) =>
    outfitContribution(outfit, stats, idolsStats),
  )
}
