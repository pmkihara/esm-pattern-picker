import type { Meta, StoryObj } from '@storybook/react'

import JobUnitInput from '.'
import { Unit } from '@/data/idols'

const meta = {
  title: 'Molecules/JobUnitInput',
  component: JobUnitInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px] md:w-[560px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JobUnitInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: Unit.Akatsuki,
  },
}

export const WithNullDefaultValue: Story = {
  args: {
    defaultValue: null,
    disabled: true,
  },
}

export const WithValueChange: Story = {
  args: {
    onValueChange: (value: string) => console.log(value),
  },
}
