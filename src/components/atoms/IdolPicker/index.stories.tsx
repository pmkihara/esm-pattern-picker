import type { Meta, StoryObj } from '@storybook/react'
import IdolPicker from '.'

const meta: Meta<typeof IdolPicker> = {
  title: 'Atoms/IdolPicker',
  component: IdolPicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof IdolPicker>

export const Default: Story = {
  args: {
    onSelect: (idol) => console.log(idol),
  },
}
