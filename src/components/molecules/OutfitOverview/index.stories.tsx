import type { Meta, StoryObj } from '@storybook/react'

import OutfitOverview from '.'
import { startPatterns } from '@/data/outfits'
import { emptyStats } from '@/data/stats'
import { primaryJobs } from '@/data/office-jobs'

const meta = {
  title: 'Molecules/OutfitOverview',
  component: OutfitOverview,
  tags: ['autodocs'],
} satisfies Meta<typeof OutfitOverview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    outfit: { ...startPatterns[0], crafted: true },
    idolStats: emptyStats,
    selectedJob: primaryJobs[0],
  },
}

export const Pattern: Story = {
  args: {
    outfit: { ...startPatterns[0], crafted: false },
    idolStats: emptyStats,
    selectedJob: primaryJobs[0],
  },
}

export const NotOwned: Story = {
  args: {
    outfit: { ...startPatterns[0] },
    idolStats: emptyStats,
    selectedJob: primaryJobs[0],
  },
}
