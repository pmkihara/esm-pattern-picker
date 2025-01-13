import type { Meta, StoryObj } from '@storybook/react'

import CollapseButton from '.'

const meta = {
  title: 'Atoms/CollapseButton',
  component: CollapseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CollapseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Close: Story = {
  args: {
    children: <span className='text-sm'>Collapse Button</span>,
  },
  render: (args) => <CollapseButton {...args} data-state='closed' />,
}

export const Open: Story = {
  args: {
    children: 'Collapse Button',
  },
  render: (args) => <CollapseButton {...args} data-state='open' />,
}

export const WithClassName: Story = {
  args: {
    children: 'Collapse Button',
    className: 'w-80 font-bold',
  },
}

export const ArrowRight: Story = {
  args: {
    children: 'Collapse Button',
    arrowPosition: 'right',
  },
}
