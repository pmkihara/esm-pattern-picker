import { Meta, StoryObj } from '@storybook/react'
import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandMenu,
  CommandSeparator,
} from '.'

const meta: Meta<typeof CommandMenu> = {
  title: 'Atoms/CommandMenu',
  component: CommandMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof CommandMenu>

const suggestions = [
  { children: 'Calendar', value: 'calendar' },
  { children: 'Search Emoji', value: 'emoji' },
  { children: 'Calculator', value: 'calculator' },
]

const settings = [
  { children: 'Profile', value: 'profile' },
  { children: 'Billing', value: 'billing' },
  { children: 'Settings', value: 'settings' },
]

export const GroupedItems: Story = {
  args: {
    input: <CommandInput placeholder='Type a command or search...' />,
    children: (
      <>
        <CommandGroup heading='Suggestions'>
          {suggestions.map((item, index) => (
            <CommandItem key={item.value ?? index} {...item} />
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          {settings.map((item, index) => (
            <CommandItem key={item.value ?? index} {...item} />
          ))}
        </CommandGroup>
      </>
    ),
  },
}

export const GroupsWithoutHeading: Story = {
  args: {
    input: <CommandInput placeholder='Type a command or search...' />,
    children: (
      <>
        <CommandGroup>
          {suggestions.map((item, index) => (
            <CommandItem key={item.value ?? index} {...item} />
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          {settings.map((item, index) => (
            <CommandItem key={item.value ?? index} {...item} />
          ))}
        </CommandGroup>
      </>
    ),
  },
}
