import type { Meta, StoryObj } from '@storybook/react'

import UserOutfitInput from '.'
import { startOutfits } from '@/data/outfits'
import { fn } from '@storybook/test'

const meta = {
  title: 'Atoms/UserOutfitInput',
  component: UserOutfitInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UserOutfitInput>

export default meta
type Story = StoryObj<typeof meta>

export const Crafted: Story = {
  args: {
    outfit: { ...startOutfits[0], crafted: true, index: 0, id: '1' },
    register: fn(),
    removeField: fn(),
  },
}

export const NotCrafted: Story = {
  args: {
    outfit: { ...startOutfits[0], crafted: false, index: 0, id: '1' },
    register: fn(),
    removeField: fn(),
  },
}
