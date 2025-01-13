import type { Meta, StoryObj } from '@storybook/react'

import JobSearch from '.'
import { primaryJobs, unitJobs } from '@/data/office-jobs'

const meta = {
  title: 'Molecules/JobSearch',
  component: JobSearch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px]'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  args: {
    setOfficeJob: (job) => console.log(job),
  },
} satisfies Meta<typeof JobSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSelectedJob: Story = {
  args: {
    selectedJob: primaryJobs[10],
  },
}

export const WithSelectedUnitJob: Story = {
  args: {
    selectedJob: unitJobs[10],
  },
}
