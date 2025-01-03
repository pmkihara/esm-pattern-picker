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
        items: ['Calendar', 'Search Emoji', 'Calculator'],
      },
      {
        heading: 'Settings',
        items: ['Profile', 'Billing', 'Settings'],
      },
    ],
  },
}

export const GroupsWithoutHeading: Story = {
  args: {
    input: <CommandInput placeholder='Type a command or search...' />,
    groups: [
      {
        items: ['Calendar', 'Search Emoji', 'Calculator'],
      },
      {
        items: ['Profile', 'Billing', 'Settings'],
      },
    ],
  },
}
