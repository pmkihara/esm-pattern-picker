import type { Preview } from '@storybook/react'
import '@/styles/globals.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'sky-200', value: '#B5E8F9' },
        { name: 'sky-300', value: '#6ADAF4' },
      ],
    },
    nextjs: {
      appDirectory: true,
    },
  },
}

export default preview
