import type { Meta, StoryObj } from '@storybook/react'

import TopBar from '.'

const meta = {
  title: 'Atoms/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div>TopBar content</div>,
  },
}
