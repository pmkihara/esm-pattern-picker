import type { Meta, StoryObj } from '@storybook/react'
import JobStatBar from '.'
import { Stat } from '@/data/stats'

const meta: Meta<typeof JobStatBar> = {
  title: 'Atoms/JobStatBar',
  component: JobStatBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    stat: Stat.Active,
    maxStat: 500,
    targetValue: 120,
    outfitValue: 120,
  },
}

export default meta
type Story = StoryObj<typeof JobStatBar>

export const Active: Story = {}

export const Passion: Story = {
  args: {
    stat: Stat.Passion,
  },
}

export const Unique: Story = {
  args: {
    stat: Stat.Unique,
  },
}

export const Smart: Story = {
  args: {
    stat: Stat.Smart,
  },
}

export const Technique: Story = {
  args: {
    stat: Stat.Technique,
  },
}

export const Charisma: Story = {
  args: {
    stat: Stat.Charisma,
  },
}

export const UnderTarget: Story = {
  args: {
    outfitValue: 80,
  },
}

export const AboveTarget: Story = {
  args: {
    outfitValue: 200,
  },
}

export const AboveMax: Story = {
  args: {
    outfitValue: 2000,
  },
}

export const HideTarget: Story = {
  args: {
    showTarget: false,
  },
}
