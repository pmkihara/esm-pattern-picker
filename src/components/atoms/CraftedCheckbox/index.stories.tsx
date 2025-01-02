import type { Meta, StoryObj } from '@storybook/react'

import CraftedCheckbox from '.'

const meta = {
  title: 'Atoms/CraftedCheckbox',
  component: CraftedCheckbox,
  tags: ['autodocs'],
} satisfies Meta<typeof CraftedCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {},
}
