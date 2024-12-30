import type { Meta, StoryObj } from '@storybook/react'

import IdolStatsHeader from '.'

const meta = {
  title: 'Molecules/IdolStatsHeader',
  component: IdolStatsHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IdolStatsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    gridClassName:
      'w-[184px] md:w-[454px] h-6 content-center justify-items-center',
  },
}
