import type { Meta, StoryObj } from '@storybook/react'

import StatusIcon from './index'

export default {
  title: 'Atoms/StatusIcon',
  component: StatusIcon,
  tags: ['autodocs'],
} as Meta<typeof StatusIcon>

type StatusIconStory = StoryObj<typeof StatusIcon>

export const Completed: StatusIconStory = {
  args: {
    completed: true,
  },
}

export const NotCompleted: StatusIconStory = {
  args: {
    completed: false,
  },
}
