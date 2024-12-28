import type { Meta, StoryObj } from '@storybook/react'
import AttributeTag from '.'
import { IdolAttribute } from '@/data/attributes'

const meta: Meta<typeof AttributeTag> = {
  title: 'Atoms/AttributeTag',
  component: AttributeTag,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AttributeTag>

export const Active: Story = {
  args: {
    type: IdolAttribute.Active,
  },
}

export const Passion: Story = {
  args: {
    type: IdolAttribute.Passion,
  },
}

export const Unique: Story = {
  args: {
    type: IdolAttribute.Unique,
  },
}

export const Smart: Story = {
  args: {
    type: IdolAttribute.Smart,
  },
}

export const Technique: Story = {
  args: {
    type: IdolAttribute.Technique,
  },
}

export const Charisma: Story = {
  args: {
    type: IdolAttribute.Charisma,
  },
}
