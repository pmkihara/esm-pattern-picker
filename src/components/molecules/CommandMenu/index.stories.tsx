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
          { children: 'Calendar', value: 'calendar' },
          { children: 'Search Emoji', value: 'emoji' },
          { children: 'Calculator', value: 'calculator' },
        ],
      },
      {
        heading: 'Settings',
        items: [
          { children: 'Profile', value: 'profile' },
          { children: 'Billing', value: 'billing' },
          { children: 'Settings', value: 'settings' },
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
          { children: 'Calendar', value: 'calendar' },
          { children: 'Search Emoji', value: 'emoji' },
          { children: 'Calculator', value: 'calculator' },
        ],
      },
      {
        items: [
          { children: 'Profile', value: 'profile' },
          { children: 'Billing', value: 'billing' },
          { children: 'Settings', value: 'settings' },
        ],
      },
    ],
  },
}
