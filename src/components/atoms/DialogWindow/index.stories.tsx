import type { Meta, StoryObj } from '@storybook/react'
import DialogWindow from '.'
import Button from '../Button'

const meta: Meta<typeof DialogWindow> = {
  title: 'Atoms/DialogWindow',
  component: DialogWindow,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DialogWindow>

export const Default: Story = {
  args: {
    trigger: <Button>Open Dialog</Button>,
    title: 'A title',
    description: 'A description',
    children: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
          ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        </p>
      </div>
    ),
    footer: (
      <div>
        <Button>Button</Button>
      </div>
    ),
  },
}
