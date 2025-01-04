'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { twMerge } from 'tailwind-merge'
import { ComponentPropsWithRef, ReactNode } from 'react'

interface PopoverProps
  extends ComponentPropsWithRef<typeof PopoverPrimitive.Root> {
  children: ReactNode
  trigger: ReactNode
  contentProps?: ComponentPropsWithRef<typeof PopoverPrimitive.Content>
  contentClassName?: string
}

const Popover = ({
  children,
  trigger,
  contentProps,
  contentClassName,
  ...props
}: PopoverProps) => (
  <PopoverPrimitive.Root {...props}>
    <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        {...contentProps}
        className={twMerge(
          'z-50 w-72 rounded-md border bg-white p-4 text-black',
          'shadow-md outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          contentClassName,
        )}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
)

export default Popover
