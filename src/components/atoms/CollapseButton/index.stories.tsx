import type { Meta, StoryObj } from '@storybook/react'

import CollapseButton from '.'
import { fn } from '@storybook/test'
import MagnifierIcon from '@@/public/assets/icons/magnifier.svg'

const meta = {
  title: 'Atoms/CollapseButton',
  component: CollapseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CollapseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Close: Story = {
  args: {
    title: 'Collapse Button',
    isOpen: false,
    onClick: fn(),
  },
}

export const Open: Story = {
  args: {
    title: 'Collapse Button',
    isOpen: true,
    onClick: fn(),
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Collapse Button',
    isOpen: false,
    onClick: fn(),
    iconSrc: MagnifierIcon.src,
  },
}

export const WithClassName: Story = {
  args: {
    title: 'Collapse Button',
    isOpen: false,
    onClick: fn(),
    className: 'font-bold',
  },
}
