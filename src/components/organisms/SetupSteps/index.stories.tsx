import type { Meta, StoryObj } from '@storybook/react'

import SetupSteps from '.'

const meta = {
  title: 'Organisms/SetupSteps',
  component: SetupSteps,
  tags: ['autodocs'],
} satisfies Meta<typeof SetupSteps>

export default meta
type Story = StoryObj<typeof meta>

export const AllCompleted: Story = {
  args: {
    spreadsheetIsSetup: true,
    StatsAreSetup: true,
    outfitsAreSetup: true,
  },
}

export const AllNotCompleted: Story = {
  args: {
    spreadsheetIsSetup: false,
    StatsAreSetup: false,
    outfitsAreSetup: false,
  },
}
