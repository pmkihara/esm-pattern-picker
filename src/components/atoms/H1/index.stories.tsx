import type { Meta, StoryObj } from '@storybook/react'
import H1 from '.'

const meta: Meta<typeof H1> = {
  title: 'Atoms/H1',
  component: H1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof H1>

export const Default: Story = {
  args: {
    children: 'This is a header',
  },
}
