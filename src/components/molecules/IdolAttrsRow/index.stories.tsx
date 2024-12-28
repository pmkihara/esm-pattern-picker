import type { Meta, StoryObj } from '@storybook/react'

import IdolAttrsRow from '.'
import { Idol } from '@/data/idols'
import { emptyAttrs } from '@/data/attributes'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/IdolAttrsRow',
  component: IdolAttrsRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IdolAttrsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    attrClassName: 'w-48 md:w-[32rem]',
    idol: Idol.Subaru,
    attributes: emptyAttrs,
    register: fn(),
  },
}
