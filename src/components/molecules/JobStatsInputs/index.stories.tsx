import type { Meta, StoryObj } from '@storybook/react'

import JobStatsInputs from '.'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/JobStatsInputs',
  component: JobStatsInputs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px] md:w-[560px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JobStatsInputs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    register: fn(),
  },
}
