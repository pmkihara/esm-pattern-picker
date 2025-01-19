import type { Meta, StoryObj } from '@storybook/react'

import JobIdolsInputs, { JobIdolsInputsProps } from '.'
import { Control, useForm } from 'react-hook-form'
import { JobInput } from '@/components/organisms/JobForm'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/JobIdolsInputs',
  component: JobIdolsInputs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px] md:w-[560px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JobIdolsInputs>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: JobIdolsInputsProps) => {
  const { control } = useForm<JobInput>()
  return <JobIdolsInputs {...args} control={control} />
}

export const Default: Story = {
  render: (args: JobIdolsInputsProps) => <Template {...args} />,
  args: {
    control: fn() as unknown as Control<JobInput>,
  },
}

export const CustomJob: Story = {
  render: (args: JobIdolsInputsProps) => <Template {...args} />,
  args: {
    control: fn() as unknown as Control<JobInput>,
    isCustomJob: true,
  },
}
