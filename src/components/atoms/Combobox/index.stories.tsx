import { Meta, StoryObj } from '@storybook/react'
import Combobox from '.'
import { CommandInput } from 'cmdk'
import Button from '../Button'
import { GroupedItems } from '@/components/atoms/CommandMenu/index.stories'

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
    children: GroupedItems.args?.children,
  },
}
