import type { Meta, StoryObj } from '@storybook/react'

import JobStats from '.'
import { primaryJobs } from '@/data/office-jobs'
import { startPatterns } from '@/data/outfits'
import { emptyStats, StatsMap } from '@/data/stats'
import { allIdols } from '@/data/idols'
import { getOutfitsContribution } from '@/lib/outfitStat'

const meta = {
  title: 'Molecules/JobStats',
  component: JobStats,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof JobStats>

export default meta
type Story = StoryObj<typeof meta>

const idolStats = allIdols.reduce((acc, idol) => {
  acc[idol] = emptyStats
  return acc
}, {} as StatsMap)

const outfitsContributions = getOutfitsContribution(
  startPatterns.slice(0, 5),
  primaryJobs[0],
  idolStats,
)

export const Default: Story = {
  args: {
    selectedJob: primaryJobs[0],
    selectedOutfits: outfitsContributions,
    maxValue: 500,
  },
}

export const WithActiveOutfit: Story = {
  args: {
    ...Default.args,
    activeOutfit: outfitsContributions[0],
  },
}
