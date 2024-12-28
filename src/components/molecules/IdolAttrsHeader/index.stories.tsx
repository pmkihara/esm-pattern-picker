import type { Meta, StoryObj } from '@storybook/react'

import IdolAttrsHeader from '.'

const meta = {
  title: 'Molecules/IdolAttrsHeader',
  component: IdolAttrsHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IdolAttrsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    attrClassName:
      'w-[184px] md:w-[454px] h-6 content-center justify-items-center',
  },
}
