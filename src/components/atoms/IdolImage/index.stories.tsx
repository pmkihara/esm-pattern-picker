import type { Meta, StoryObj } from '@storybook/react'
import IdolImage from '.'
import { Idol } from '@/data/idols'

const meta: Meta<typeof IdolImage> = {
  title: 'Atoms/IdolImage',
  component: IdolImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof IdolImage>

export const Default: Story = {
  args: {
    idol: Idol.Hokuto,
  },
}
