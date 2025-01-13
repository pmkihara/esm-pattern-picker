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
  forceMount?: true
}

const Popover = ({
  children,
  trigger,
  contentProps,
  contentClassName,
  onOpenChange,
  forceMount,
  ...props
}: PopoverProps) => (
  <PopoverPrimitive.Root {...props} onOpenChange={onOpenChange}>
    <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal forceMount={forceMount}>
      <PopoverPrimitive.Content
        {...contentProps}
        className={twMerge(
          'z-50 rounded border border-grey-200 bg-white text-black',
          'shadow-md outline-none',
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
