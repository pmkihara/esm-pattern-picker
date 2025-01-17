import type { Meta, StoryObj } from '@storybook/react'

import Input from '.'
import SpreadsheetIcon from '@@/public/assets/icons/spreadsheet.svg'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    iconSrc: SpreadsheetIcon.src,
  },
}

export const WithError: Story = {
  args: {
    placeholder: 'Placeholder',
    iconSrc: SpreadsheetIcon.src,
    errorMsg: 'Error message',
  },
}
