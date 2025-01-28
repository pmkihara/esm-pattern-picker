import type { Meta, StoryObj } from '@storybook/react'

import ValueCompare from '.'

const meta = {
  title: 'Atoms/ValueCompare',
  component: ValueCompare,
  tags: ['autodocs'],
} satisfies Meta<typeof ValueCompare>

export default meta
type Story = StoryObj<typeof meta>

export const Increase: Story = {
  args: {
    value: 50,
    compare: 30,
  },
}

export const Decrease: Story = {
  args: {
    value: 30,
    compare: 50,
  },
}

export const Equal: Story = {
  args: {
    value: 50,
    compare: 50,
  },
}
