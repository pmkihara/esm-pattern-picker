import type { Meta, StoryObj } from '@storybook/react'
import StatTag from '.'
import { Stat } from '@/data/stats'

const meta: Meta<typeof StatTag> = {
  title: 'Atoms/StatTag',
  component: StatTag,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StatTag>

export const Active: Story = {
  args: {
    type: Stat.Active,
  },
}

export const Passion: Story = {
  args: {
    type: Stat.Passion,
  },
}

export const Unique: Story = {
  args: {
    type: Stat.Unique,
  },
}

export const Smart: Story = {
  args: {
    type: Stat.Smart,
  },
}

export const Technique: Story = {
  args: {
    type: Stat.Technique,
  },
}

export const Charisma: Story = {
  args: {
    type: Stat.Charisma,
  },
}
