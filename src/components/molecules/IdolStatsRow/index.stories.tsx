import type { Meta, StoryObj } from '@storybook/react'

import IdolStatsRow from '.'
import { Idol } from '@/data/idols'
import { emptyStats } from '@/data/stats'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/IdolStatsRow',
  component: IdolStatsRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IdolStatsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    gridClassName: 'w-48 md:w-[32rem]',
    idol: Idol.Subaru,
    stats: emptyStats,
    register: fn(),
  },
}
