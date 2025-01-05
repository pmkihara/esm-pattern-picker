import { Meta, StoryObj } from '@storybook/react'
import Collapsible from '.'

const meta: Meta<typeof Collapsible> = {
  title: 'Atoms/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[320px]'>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Base: Story = {
  args: {
    triggerProps: { children: 'Collapsible trigger' },
    children: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, eaque
        aut voluptates ipsum ipsam, molestiae, commodi obcaecati maiores quis
        dolor facere dolorum mollitia! Nobis sapiente fuga repellat dolorum
        voluptates architecto?
      </p>
    ),
  },
}
