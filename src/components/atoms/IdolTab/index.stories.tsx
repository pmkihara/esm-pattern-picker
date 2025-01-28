import type { Meta, StoryObj } from '@storybook/react'
import IdolTab from '.'
import { Idol } from '@/data/idols'
import { fn } from '@storybook/test'

const meta: Meta<typeof IdolTab> = {
  title: 'Atoms/IdolTab',
  component: IdolTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof IdolTab>

export const Default: Story = {
  args: {
    idol: Idol.Subaru,
    onClick: fn(),
  },
}

export const Active: Story = {
  args: {
    idol: Idol.Subaru,
    onClick: fn(),
    active: true,
  },
}
