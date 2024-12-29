import type { Meta, StoryObj } from '@storybook/react'

import IdolAttrsTable from '.'
import { allIdols } from '@/data/idols'
import { emptyAttrs, IdolAttributesMap } from '@/data/attributes'

const meta = {
  title: 'Organisms/IdolAttrsTable',
  component: IdolAttrsTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IdolAttrsTable>

export default meta
type Story = StoryObj<typeof meta>

const idols = allIdols.reduce((acc, idol) => {
  acc[idol] = emptyAttrs
  return acc
}, {} as IdolAttributesMap)

export const Default: Story = {
  args: {
    idols: idols,
    spreadsheetId: '1',
  },
}
