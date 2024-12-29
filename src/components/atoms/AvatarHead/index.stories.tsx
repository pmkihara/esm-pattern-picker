import type { Meta, StoryObj } from '@storybook/react'
import AvatarHead from '.'
import { Idol } from '@/data/idols'

const meta: Meta<typeof AvatarHead> = {
  title: 'Atoms/AvatarHead',
  component: AvatarHead,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof AvatarHead>

export const Active: Story = {
  args: {
    idol: Idol.Hokuto,
  },
}
