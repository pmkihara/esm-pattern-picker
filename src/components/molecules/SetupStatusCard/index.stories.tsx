import type { Meta, StoryObj } from '@storybook/react'

import SetupStatusCard from '.'

const meta = {
  title: 'Molecules/SetupStatusCard',
  component: SetupStatusCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-96'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SetupStatusCard>

export default meta
type Story = StoryObj<typeof meta>

export const Completed: Story = {
  args: {
    completed: true,
    title: 'Google Sheets',
    text: 'Spreadsheet ID is set up',
  },
}

export const NotCompleted: Story = {
  args: {
    completed: false,
    title: 'Google Sheets',
    text: 'Set up your spreadsheet ID',
  },
}
