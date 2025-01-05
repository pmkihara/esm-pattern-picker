import { Meta, StoryObj } from '@storybook/react'
import Combobox from '.'
import { CommandInput } from 'cmdk'
import Button from '../Button'

const meta: Meta<typeof Combobox> = {
  title: 'Atoms/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  args: {
    trigger: <Button className='w-full'>Open</Button>,
    input: <CommandInput placeholder='Type a command or search...' />,
    groups: [
      {
        heading: 'Suggestions',
        items: [
          { children: 'Calendar', value: 'calendar' },
          {
            children: 'Search Emoji',
            value: 'emoji',
          },
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
