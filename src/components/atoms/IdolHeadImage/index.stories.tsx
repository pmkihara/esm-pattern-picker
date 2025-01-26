import type { Meta, StoryObj } from '@storybook/react'
import IdolHeadImage from '.'
import { Idol } from '@/data/idols'

const meta: Meta<typeof IdolHeadImage> = {
  title: 'Atoms/IdolHeadImage',
  component: IdolHeadImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof IdolHeadImage>

export const Default: Story = {
  args: {
    idol: Idol.Hokuto,
  },
}
