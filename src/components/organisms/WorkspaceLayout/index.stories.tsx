import type { Meta, StoryObj } from '@storybook/react'

import WorkspaceLayout from '.'
import TopBar from '@/components/atoms/TopBar'

const meta = {
  title: 'Organisms/WorkspaceLayout',
  component: WorkspaceLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WorkspaceLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <TopBar>topbar content</TopBar>
        <div className='bg-green-100'>Some content</div>
      </div>
    ),
  },
}
