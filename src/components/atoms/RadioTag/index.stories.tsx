import { Meta, StoryObj } from '@storybook/react'
import RadioTag from '.'

const meta: Meta<typeof RadioTag> = {
  title: 'Atoms/RadioTag',
  component: RadioTag,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioTag>

export const Base: Story = {
  args: {
    children: 'Radio button',
  },
}
