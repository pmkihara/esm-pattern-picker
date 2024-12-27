import type { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Sky: Story = {
  args: {
    children: 'Button',
  },
}

export const Sun: Story = {
  args: {
    children: 'Button',
    variant: 'sun',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const SkyDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'sky',
    disabled: true,
  },
}
