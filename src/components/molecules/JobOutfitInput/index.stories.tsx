import type { Meta, StoryObj } from '@storybook/react'
import JobOutfitInput from '.'
import { startOutfits, startPatterns } from '@/data/outfits'

const meta = {
  title: 'Molecules/JobOutfitInput',
  component: JobOutfitInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px] md:w-[560px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JobOutfitInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userOutfits: [...startOutfits, ...startPatterns],
    onValueChange: (value: string) => console.log(value),
  },
}

export const Disabled: Story = {
  args: {
    userOutfits: [...startOutfits, ...startPatterns],
    onValueChange: (value: string) => console.log(value),
    defaultValue: null,
    disabled: true,
  },
}
