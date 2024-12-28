import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '.'
import { Idol } from '@/data/idols'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Active: Story = {
  args: {
    idol: Idol.Hokuto,
  },
}
