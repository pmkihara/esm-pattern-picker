import type { Meta, StoryObj } from '@storybook/react'

import CheckboxInput from '.'

const meta = {
  title: 'Atoms/CheckboxInput',
  component: CheckboxInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
}
