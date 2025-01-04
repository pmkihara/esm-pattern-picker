'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Popover from '../Popover'
import {
  CommandGroupItems,
  CommandMenu,
} from '@/components/molecules/CommandMenu'

interface ComboboxProps {
  trigger: ReactNode
  input: ReactNode
  groups: CommandGroupItems[]
  value?: string
  setValue: (value?: string) => void
  contentClassName?: string
  noResultsText?: string
}

const Combobox = ({
  trigger,
  input,
  groups,
  contentClassName,
  noResultsText = 'No results found',
}: ComboboxProps) => {
  return (
    <Popover
      trigger={trigger}
      contentClassName={twMerge(
        'w-[var(--radix-popover-trigger-width)] p-0',
        contentClassName,
      )}
    >
      <CommandMenu
        input={input}
        fallbackMessage={noResultsText}
        groups={groups}
      />
    </Popover>
  )
}

export default Combobox
