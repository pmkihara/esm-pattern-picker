import { Meta, StoryObj } from '@storybook/react'
import { CommandInput, CommandMenu } from '.'

const meta: Meta<typeof CommandMenu> = {
  title: 'Molecules/CommandMenu',
  component: CommandMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof CommandMenu>

export const GroupedItems: Story = {
  args: {
    input: <CommandInput placeholder='Type a command or search...' />,
    groups: [
      {
        heading: 'Suggestions',
        items: [
          { children: 'Calendar', key: 'calendar', value: 'calendar' },
          {
            children: 'Search Emoji',
            key: 'emoji',
            value: 'emoji',
          },
          { children: 'Calculator', key: 'calculator', value: 'calculator' },
        ],
      },
      {
        heading: 'Settings',
        items: [
          { children: 'Profile', key: 'profile', value: 'profile' },
          { children: 'Billing', key: 'billing', value: 'billing' },
          { children: 'Settings', key: 'settings', value: 'settings' },
        ],
      },
    ],
  },
}

export const GroupsWithoutHeading: Story = {
  args: {
    input: <CommandInput placeholder='Type a command or search...' />,
    groups: [
      {
        items: [
          { children: 'Calendar', key: 'calendar', value: 'calendar' },
          {
            children: 'Search Emoji',
            key: 'emoji',
            value: 'emoji',
          },
          { children: 'Calculator', key: 'calculator', value: 'calculator' },
        ],
      },
      {
        items: [
          { children: 'Profile', key: 'profile', value: 'profile' },
          { children: 'Billing', key: 'billing', value: 'billing' },
          { children: 'Settings', key: 'settings', value: 'settings' },
        ],
      },
    ],
  },
}
