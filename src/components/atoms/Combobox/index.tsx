'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Popover from '../Popover'
import { CommandMenu } from '@/components/atoms/CommandMenu'

interface ComboboxProps {
  trigger: ReactNode
  input: ReactNode
  children: ReactNode
  value?: string
  setValue: (value?: string) => void
  contentClassName?: string
  noResultsText?: string
}

const Combobox = ({
  trigger,
  input,
  children,
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
      <CommandMenu input={input} fallbackMessage={noResultsText}>
        {children}
      </CommandMenu>
    </Popover>
  )
}

export default Combobox
