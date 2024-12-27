import type { Meta, StoryObj } from '@storybook/react'

import SvgImage from '.'
import SpreadsheetIcon from '@@/public/assets/icons/spreadsheet.svg'

const meta = {
  title: 'Atoms/SvgImage',
  component: SvgImage,
  tags: ['autodocs'],
} satisfies Meta<typeof SvgImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: SpreadsheetIcon.src,
    className: 'fill-sky-400',
  },
}
