import type { Meta, StoryObj } from '@storybook/react'

import SaveButton from '.'

const meta = {
  title: 'Atoms/SaveButton',
  component: SaveButton,
  tags: ['autodocs'],
} satisfies Meta<typeof SaveButton>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const MobileDisabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    layout: 'padded',
  },
}

export const TabletDisabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    layout: 'padded',
  },
}
