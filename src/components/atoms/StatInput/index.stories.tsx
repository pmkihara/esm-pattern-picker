import type { Meta, StoryObj } from '@storybook/react'

import StatInput from '.'

const meta = {
  title: 'Atoms/StatInput',
  component: StatInput,
  tags: ['autodocs'],
} satisfies Meta<typeof StatInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '0',
  },
}
