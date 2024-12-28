import type { Meta, StoryObj } from '@storybook/react'

import Spinner from './index'

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} as Meta<typeof Spinner>

type SpinnerStory = StoryObj<typeof Spinner>

export const Default: SpinnerStory = {
  parameters: {
    backgrounds: { default: 'sky-300' },
  },
}

export const Grey: SpinnerStory = {
  args: {
    color: 'grey',
    size: 48,
  },
}
