import type { Meta, StoryObj } from '@storybook/react'

import JobGroup from '.'
import { OfficeJobGroup, primaryJobs, unitJobs } from '@/data/office-jobs'
import { CommandMenu } from '@/components/atoms/CommandMenu'
import { GroupedItems } from '@/components/atoms/CommandMenu/index.stories'

const meta = {
  title: 'Molecules/JobGroup',
  component: JobGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px]'>
        <CommandMenu input={GroupedItems.args?.input}>
          <Story />
        </CommandMenu>
      </div>
    ),
  ],
} satisfies Meta<typeof JobGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    jobs: primaryJobs,
    jobGroup: OfficeJobGroup.Primary,
  },
}

export const GroupedJobs: Story = {
  args: {
    jobs: unitJobs,
    jobGroup: OfficeJobGroup.Unit,
  },
}
