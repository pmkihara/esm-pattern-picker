import type { Meta, StoryObj } from '@storybook/react'

import DashboardOverview from '.'
import { primaryJobs } from '@/data/office-jobs'
import { startOutfits, startPatterns } from '@/data/outfits'
import { allIdols } from '@/data/idols'
import { emptyStats, StatsMap } from '@/data/stats'

const meta = {
  title: 'Organisms/DashboardOverview',
  component: DashboardOverview,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px] md:w-[560px]'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DashboardOverview>

export default meta
type Story = StoryObj<typeof meta>

const outfits = startOutfits.map((outfit) => ({ ...outfit, crafted: true }))
const patterns = startPatterns.map((pattern) => ({
  ...pattern,
  crafted: false,
}))
const idolStats = allIdols.reduce((acc, idol) => {
  acc[idol] = emptyStats
  return acc
}, {} as StatsMap)

export const Default: Story = {
  args: {
    idolStats: idolStats,
    outfits: [...outfits, ...patterns],
    officeJob: primaryJobs[0],
  },
}
