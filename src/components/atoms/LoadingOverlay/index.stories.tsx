import type { Meta, StoryObj } from '@storybook/react'
import LoadingOverlay from '.'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof LoadingOverlay> = {
  title: 'Atoms/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'sky-200',
    },
  },
}

export default meta
type Story = StoryObj<typeof LoadingOverlay>

export const Default: Story = {
  args: {
    isLoading: true,
  },
}
