import { OfficeJob } from '@/data/office-jobs'
import { Stat } from '@/data/stats'
import {
  getJobStats,
  getValidIdols,
  OutfitContribution,
  TargetStats,
} from '@/lib/outfitStat'

interface SelectAlgorithm {
  (
    outfitsContribution: OutfitContribution[],
    slots: number,
    targetStats: TargetStats,
    stats: Stat[],
  ): OutfitContribution[]
}

const selectByContribution: SelectAlgorithm = (
  outfitsContribution,
  slots,
  targetStats,
  stats,
) => {
  // Initialize an empty array to store the selected outfits
  const selectedOutfits: OutfitContribution[] = []

  // Initialize an object to keep track of the cumulative stats of the selected outfits
  const currentStats = stats.reduce((acc, stat) => {
    acc[stat] = 0
    return acc
  }, {} as TargetStats)

  // While the number of selected outfits is less than the specified slots, loop
  // over all the outfits and select the best outfit
  while (selectedOutfits.length < slots) {
    let bestOutfit: OutfitContribution | null = null
    let bestContribution = 0
    let bestBalance = Infinity

    for (const outfitContribution of outfitsContribution) {
      const { outfit, totalContribution, statContributions } =
        outfitContribution

      // Skip the outfit if it is already selected or if the another outfit of
      // the same idol is already selected
      if (
        selectedOutfits.includes(outfitContribution) ||
        selectedOutfits.some(
          ({ outfit: selectedOutfit }) => selectedOutfit.idol === outfit.idol,
        )
      ) {
        continue
      }

      // Calculate the new stats if the outfit is selected
      const newStats = stats.reduce((acc, stat) => {
        acc[stat] = currentStats[stat] + statContributions[stat]
        return acc
      }, {} as TargetStats)

      if (stats.every((stat) => newStats[stat] >= targetStats[stat])) {
        // If the target stats are already met, select the outfit with the highest
        // total contribution, but do not select the outfit if it lowers one of
        // the target stats below the required value
        const isBetter = stats.every(
          (stat) =>
            newStats[stat] >= currentStats[stat] ||
            newStats[stat] >= targetStats[stat],
        )
        if (isBetter && totalContribution > bestContribution) {
          bestOutfit = outfitContribution
          bestContribution = totalContribution
        }
      } else {
        // If the target stats are not met yet, select the outfit with the lowest
        // balance of the selected stats

        // Calculate the balance of the selected stats
        const balance = stats.reduce((acc, stat) => {
          return acc + Math.abs(targetStats[stat] - newStats[stat])
        }, 0)

        // If the balance is lower than the best balance so far, update the best outfit
        if (balance < bestBalance) {
          bestBalance = balance
          bestOutfit = outfitContribution
          bestContribution = totalContribution
        }
      }
    }
    // If a best outfit was found, add it to the selected outfits
    if (bestOutfit) {
      selectedOutfits.push(bestOutfit)
      stats.forEach((stat) => {
        currentStats[stat] += bestOutfit.statContributions[stat]
      })
    } else {
      break
    }
  }
  return selectedOutfits
}

export const autoSelect = (
  outfitsContribution: OutfitContribution[],
  selectedJob: OfficeJob,
) => {
  const slots = getValidIdols(selectedJob).length
  const { targetStats, stats } = getJobStats(selectedJob)
  return selectByContribution(outfitsContribution, slots, targetStats, stats)
}
