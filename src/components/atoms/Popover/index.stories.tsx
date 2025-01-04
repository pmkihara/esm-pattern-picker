import { Meta, StoryObj } from '@storybook/react'
import Button from '../Button'
import Popover from '.'

const meta: Meta<typeof Popover> = {
  title: 'Atoms/Popover',
  component: Popover,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Base: Story = {
  args: {
    trigger: <Button>Open</Button>,
    children: 'Place content for the popover here',
  },
}
