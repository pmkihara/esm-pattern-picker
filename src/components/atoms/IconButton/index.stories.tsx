import type { Meta, StoryObj } from '@storybook/react'

import IconButton from '.'
import SpreadsheetIcon from '@@/public/assets/icons/spreadsheet.svg'

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    iconSrc: SpreadsheetIcon.src,
  },
}

export const WithText: Story = {
  args: {
    iconSrc: SpreadsheetIcon.src,
    text: 'Spreadsheet',
  },
}
