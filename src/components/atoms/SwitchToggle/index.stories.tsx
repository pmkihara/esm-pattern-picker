import type { Meta, StoryObj } from '@storybook/react'

import SwitchToggle from './index'

export default {
  title: 'Atoms/SwitchToggle',
  component: SwitchToggle,
  tags: ['autodocs'],
} as Meta<typeof SwitchToggle>

type SwitchToggleStory = StoryObj<typeof SwitchToggle>

export const Default: SwitchToggleStory = {}

export const WithLabel: SwitchToggleStory = {
  args: {
    children: 'Toggle',
  },
}
