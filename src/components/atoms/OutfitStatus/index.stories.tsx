import type { Meta, StoryObj } from '@storybook/react'
import OutfitStatus from '.'

const meta: Meta<typeof OutfitStatus> = {
  title: 'Atoms/OutfitStatus',
  component: OutfitStatus,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OutfitStatus>

export const Crafted: Story = {
  args: {
    status: 'crafted',
  },
}

export const Owned: Story = {
  args: {
    status: 'owned',
  },
}

export const NotOwned: Story = {
  args: {
    status: 'not owned',
  },
}
