import type { Meta, StoryObj } from '@storybook/react'

import CollapseButton from '.'
import { fn } from '@storybook/test'

const meta = {
  title: 'Atoms/CollapseButton',
  component: CollapseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CollapseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Close: Story = {
  args: {
    children: <span className='text-sm'>Collapse Button</span>,
    isOpen: false,
    onClick: fn(),
  },
}

export const Open: Story = {
  args: {
    children: 'Collapse Button',
    isOpen: true,
    onClick: fn(),
  },
}

export const WithClassName: Story = {
  args: {
    children: 'Collapse Button',
    isOpen: false,
    onClick: fn(),
    className: 'w-80 font-bold',
  },
}

export const ArrowRight: Story = {
  args: {
    children: 'Collapse Button',
    isOpen: false,
    onClick: fn(),
    arrowPosition: 'right',
  },
}
