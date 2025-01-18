import type { Meta, StoryObj } from '@storybook/react'

import JobForm from '.'
import { emptyJob, primaryJobs } from '@/data/office-jobs'
import { fn } from '@storybook/test'
import { startOutfits, startPatterns } from '@/data/outfits'

const meta = {
  title: 'Organisms/JobForm',
  component: JobForm,
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
} satisfies Meta<typeof JobForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    officeJob: primaryJobs[0],
    onFormSubmit: fn(),
    outfits: [...startOutfits, ...startPatterns],
  },
}

export const CustomJob: Story = {
  args: {
    officeJob: emptyJob,
    onFormSubmit: fn(),
    outfits: [...startOutfits, ...startPatterns],
  },
}
