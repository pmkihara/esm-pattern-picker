import type { Meta, StoryObj } from '@storybook/react'

import SpreadsheetForm from '.'

const meta = {
  title: 'Organisms/SpreadsheetForm',
  component: SpreadsheetForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpreadsheetForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
