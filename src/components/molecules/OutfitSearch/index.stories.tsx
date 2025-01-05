import { Meta, StoryObj } from '@storybook/react'
import OutfitSearch from '.'

const meta: Meta<typeof OutfitSearch> = {
  title: 'Molecules/OutfitSearch',
  component: OutfitSearch,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof OutfitSearch>

export const Default: Story = {
  args: {
    addFields: (data) => console.log(data),
  },
}
