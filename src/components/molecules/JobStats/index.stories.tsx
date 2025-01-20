import type { Meta, StoryObj } from '@storybook/react'

import JobStats from '.'
import { primaryJobs } from '@/data/office-jobs'
import { startPatterns } from '@/data/outfits'
import { emptyStats, StatsMap } from '@/data/stats'
import { allIdols } from '@/data/idols'

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

export const Default: Story = {
  args: {
    selectedJob: primaryJobs[0],
    selectedOutfits: startPatterns.slice(0, 5),
    idolStats,
  },
}

export const OtherJob: Story = {
  args: {
    selectedJob: primaryJobs[1],
    selectedOutfits: startPatterns.slice(0, 5),
    idolStats,
  },
}
