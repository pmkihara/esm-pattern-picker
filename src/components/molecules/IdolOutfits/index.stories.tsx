import type { Meta, StoryObj } from '@storybook/react'

import IdolOutfits from '.'
import { startOutfits, startPatterns } from '@/data/outfits'
import { Idol } from '@/data/idols'
import { fn } from '@storybook/test'
import { OutfitField } from '@/components/organisms/OutfitsForm/index.hooks'

const meta = {
  title: 'Molecules/IdolOutfits',
  component: IdolOutfits,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IdolOutfits>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fields: {
      general: [
        { ...startOutfits[0], crafted: true },
        { ...startPatterns[0], crafted: false },
      ] as OutfitField[],
      event: [] as OutfitField[],
      private: [] as OutfitField[],
      collab: [] as OutfitField[],
    },
    idol: Idol.Eichi,
    register: fn(),
  },
}
