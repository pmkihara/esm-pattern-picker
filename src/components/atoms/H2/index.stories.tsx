import type { Meta, StoryObj } from '@storybook/react'
import H2 from '.'

const meta: Meta<typeof H2> = {
  title: 'Atoms/H2',
  component: H2,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof H2>

export const Default: Story = {
  args: {
    children: 'This is a header',
  },
}
