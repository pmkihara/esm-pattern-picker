import type { Meta, StoryObj } from '@storybook/react'

import OutfitOverview from '.'
import { startPatterns } from '@/data/outfits'
import { emptyStats, Stat } from '@/data/stats'

const meta = {
  title: 'Molecules/OutfitOverview',
  component: OutfitOverview,
  tags: ['autodocs'],
} satisfies Meta<typeof OutfitOverview>

export default meta
type Story = StoryObj<typeof meta>

const outfit = startPatterns[0]
const statContributions = {
  [Stat.Passion]: outfit[Stat.Passion],
  [Stat.Smart]: outfit[Stat.Smart],
  [Stat.Technique]: outfit[Stat.Technique],
}

export const Default: Story = {
  args: {
    outfit: { ...outfit, crafted: true },
    idolStats: emptyStats,
    statContributions,
  },
}

export const Pattern: Story = {
  args: {
    outfit: { ...startPatterns[0], crafted: false },
    idolStats: emptyStats,
    statContributions,
  },
}

export const NotOwned: Story = {
  args: {
    outfit: { ...startPatterns[0] },
    idolStats: emptyStats,
    statContributions,
  },
}
