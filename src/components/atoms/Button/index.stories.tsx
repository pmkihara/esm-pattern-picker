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

export const FakeInput: Story = {
  args: {
    children: 'Button',
    variant: 'fakeInput',
    size: 'input',
  },
}

export const SkyDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'sky',
    disabled: true,
  },
}

export const SkyLoading: Story = {
  args: {
    children: 'Button',
    variant: 'sky',
    isLoading: true,
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
}
