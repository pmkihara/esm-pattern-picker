import { OfficeJob } from '@/data/office-jobs'
import { Stat } from '@/data/stats'
import {
  getJobStats,
  getValidIdols,
  OutfitContribution,
  TargetStats,
} from '@/lib/outfitStat'

const selectByBalance = (
  outfitsContribution: OutfitContribution[],
  slots: number,
  targetStats: TargetStats,
  stats: Stat[],
) => {
  // Initialize an empty array to store the selected outfits
  const selectedOutfits: OutfitContribution[] = []

  // Initialize an object to keep track of the cumulative stats of the selected outfits
  const currentStats = stats.reduce((acc, stat) => {
    acc[stat] = 0
    return acc
  }, {} as TargetStats)

  // While the number of selected outfits is less than the specified slots
  while (selectedOutfits.length < slots) {
    let bestOutfit: OutfitContribution | null = null
    let bestBalance = Infinity

    // For each outfit, calculate the balance of the selected stats
    for (const contribution of outfitsContribution) {
      // Skip the outfit if it has already been selected
      if (selectedOutfits.includes(contribution)) continue

      // Calculate the new stats if the outfit is selected
      const newStats = stats.reduce((acc, stat) => {
        return {
          ...acc,
          [stat]: currentStats[stat] + contribution.statContributions[stat],
        }
      }, {} as TargetStats)

      // Calculate the balance of the selected stats
      // Balance means the difference between the target stats and the new stats
      const balance = stats.reduce((acc, stat) => {
        return acc + Math.abs(targetStats[stat] - newStats[stat])
        // return acc + Math.abs(targetStats[stat] - newStats[stat])
      }, 0)

      // If the balance is lower than the best balance so far, update the best outfit
      if (balance < bestBalance) {
        bestBalance = balance
        bestOutfit = contribution
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

// const selectByTotal =  (
//   outfitsContribution: OutfitWithStats[],
//   slots: number,
// ) => {
//   const sortedOutfits = outfitsContribution.sort(
//     (a, b) => b.totalContribution - a.totalContribution,
//   )
//   const selectedOutfits = sortedOutfits.reduce(
//     (acc, { outfit }) => {
//       if (acc.length >= slots) {
//         return acc
//       }
//       if (
//         !acc.some(
//           ({ outfit: selectedOutfit }) => selectedOutfit.idol === outfit.idol,
//         )
//       ) {
//         return [...acc, { outfit }]
//       }
//       return acc
//     },
//     [] as { outfit: Outfit | UserOutfit }[],
//   )
//   return selectedOutfits.map(({ outfit }) => outfit)
// }

export const autoSelectByBalance = (
  outfitsContribution: OutfitContribution[],
  selectedJob: OfficeJob,
) => {
  const slots = getValidIdols(selectedJob).length
  const { targetStats, stats } = getJobStats(selectedJob)
  return selectByBalance(outfitsContribution, slots, targetStats, stats)
}
