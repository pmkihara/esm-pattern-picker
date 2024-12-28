import type { Meta, StoryObj } from '@storybook/react'

import AttributeInput from '.'

const meta = {
  title: 'Atoms/AttributeInput',
  component: AttributeInput,
  tags: ['autodocs'],
} satisfies Meta<typeof AttributeInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '0',
  },
}
