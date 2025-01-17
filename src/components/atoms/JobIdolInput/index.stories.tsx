import type { Meta, StoryObj } from '@storybook/react'
import JobIdolInput from '.'
import { Idol } from '@/data/idols'

const meta: Meta<typeof JobIdolInput> = {
  title: 'Atoms/JobIdolInput',
  component: JobIdolInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof JobIdolInput>

export const Default: Story = {
  args: {
    idol: Idol.Hokuto,
  },
}

export const WithUndefinedIdol: Story = {
  args: {
    idol: undefined,
  },
}

export const CustomJob: Story = {
  args: {
    idol: undefined,
    isCustomJob: true,
  },
}
