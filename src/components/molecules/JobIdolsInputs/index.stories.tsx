import type { Meta, StoryObj } from '@storybook/react'

import JobIdolsInputs from '.'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/JobIdolsInputs',
  component: JobIdolsInputs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px] md:w-[560px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JobIdolsInputs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    register: fn(),
    fields: [
      { id: '1', name: undefined },
      { id: '2', name: undefined },
    ],
    append: fn(),
    remove: fn(),
    update: fn(),
  },
}
