import type { Meta, StoryObj } from '@storybook/react'

import JobSearch from '.'

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
} satisfies Meta<typeof JobSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
