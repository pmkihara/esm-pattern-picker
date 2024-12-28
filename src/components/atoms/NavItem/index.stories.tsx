import type { Meta, StoryObj } from '@storybook/react'
import NavItem from '.'
import HomeIcon from '@@/public/assets/icons/home.svg'

const meta = {
  title: 'Atoms/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'sky-300',
    },
  },
} satisfies Meta<typeof NavItem>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
  args: {
    active: false,
    iconSrc: HomeIcon.src,
    text: 'Home',
    href: '#',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  args: {
    active: false,
    iconSrc: HomeIcon.src,
    text: 'Home',
    href: '#',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    layout: 'padded',
  },
}

export const Active: Story = {
  args: {
    ...Mobile.args,
    active: true,
  },
  parameters: Mobile.parameters,
}
