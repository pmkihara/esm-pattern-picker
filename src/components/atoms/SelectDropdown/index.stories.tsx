import type { Meta, StoryObj } from '@storybook/react'

import SelectDropdown from './index'

export default {
  title: 'Atoms/SelectDropdown',
  component: SelectDropdown,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px]'>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof SelectDropdown>

type SelectDropdownStory = StoryObj<typeof SelectDropdown>

export const Default: SelectDropdownStory = {
  args: {
    groups: [
      {
        items: [
          { value: 'null', displayValue: 'None' },
          { value: '1', displayValue: 'Option 1' },
          { value: '2', displayValue: 'Option 2' },
          { value: '3', displayValue: 'Option 3' },
        ],
      },
    ],
  },
}

export const Grouped: SelectDropdownStory = {
  args: {
    valuePlaceholder: 'Select an option',
    groups: [
      {
        items: [{ value: 'null', displayValue: 'None' }],
      },
      {
        label: 'Group 1',
        items: [
          { value: '1', displayValue: 'Option 1' },
          { value: '2', displayValue: 'Option 2' },
          { value: '3', displayValue: 'Option 3' },
        ],
      },
      {
        label: 'Group 2',
        items: [
          { value: '4', displayValue: 'Option 4' },
          { value: '5', displayValue: 'Option 5' },
          { value: '6', displayValue: 'Option 6' },
        ],
      },
      {
        label: 'Group 3',
        items: [
          { value: '7', displayValue: 'Option 7' },
          { value: '8', displayValue: 'Option 8' },
          { value: '9', displayValue: 'Option 9' },
        ],
      },
      {
        label: 'Group 4',
        items: [
          { value: '10', displayValue: 'Option 10' },
          { value: '11', displayValue: 'Option 11' },
          { value: '12', displayValue: 'Option 12' },
        ],
      },
      {
        label: 'Group 5',
        items: [
          { value: '13', displayValue: 'Option 13' },
          { value: '14', displayValue: 'Option 14' },
          { value: '15', displayValue: 'Option 15' },
        ],
      },
      {
        label: 'Group 6',
        items: [
          { value: '16', displayValue: 'Option 16' },
          { value: '17', displayValue: 'Option 17' },
          { value: '18', displayValue: 'Option 18' },
        ],
      },
      {
        label: 'Group 7',
        items: [
          { value: '19', displayValue: 'Option 19' },
          { value: '20', displayValue: 'Option 20' },
          { value: '21', displayValue: 'Option 21' },
        ],
      },
    ],
    contentProps: { avoidCollisions: true },
  },
}
