import type { Meta, StoryObj } from '@storybook/react'

import OutfitsTable, { outfitsTableData } from '.'
import { esJobs } from '@/data/office-jobs'
import { startOutfits, startPatterns } from '@/data/outfits'
import { getOutfitsContribution } from '@/lib/outfitStat'
import { allIdols } from '@/data/idols'
import { emptyIdolRow, StatsMap } from '@/data/stats'

const meta = {
  title: 'Organisms/OutfitsTable',
  component: OutfitsTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof OutfitsTable>

export default meta
type Story = StoryObj<typeof meta>

const outfits = [
  ...startPatterns.map((outfit) => ({ ...outfit, crafted: false })),
  ...startOutfits.map((outfit) => ({ ...outfit, crafted: true })),
]
const selectedJob = esJobs[0]
const idolStats = allIdols.reduce((acc, idol) => {
  const { name, ...stats } = emptyIdolRow(idol)
  acc[name] = stats
  return acc
}, {} as StatsMap)
const outfitContributions = getOutfitsContribution(
  outfits,
  selectedJob,
  idolStats,
)

export const Default: Story = {
  args: {
    data: outfitsTableData(outfitContributions),
    stats: Object.keys(outfitContributions[0].statContributions),
    activeOutfit: outfitContributions[0],
    originalOutfit: outfitContributions[0],
    onClick: (outfitName) => console.log(outfitName),
    selectedOutfits: outfitContributions.slice(0, 3),
  },
}
