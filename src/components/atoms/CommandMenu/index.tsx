'use client'

import { Command as CommandPrimitive } from 'cmdk'
import { twMerge } from 'tailwind-merge'
import { ComponentPropsWithRef, ReactNode } from 'react'
import SvgImage from '@/components/atoms/SvgImage'

export interface CommandGroupItems {
  items: ComponentPropsWithRef<typeof CommandItem>[]
  heading?: string
  collapsible?: boolean
  triggerContent?: ReactNode
}

interface CommandMenuProps
  extends ComponentPropsWithRef<typeof CommandPrimitive> {
  input: ReactNode
  fallbackMessage?: string
}

export const CommandMenu = ({
  className,
  ref,
  input,
  fallbackMessage = 'No results found.',
  children,
  ...props
}: CommandMenuProps) => (
  <CommandPrimitive
    ref={ref}
    className={twMerge(
      'flex h-full w-full flex-col overflow-hidden rounded-md',
      className,
    )}
    {...props}
  >
    {input}
    <CommandPrimitive.List
      className={twMerge(
        'max-h-[300px] overflow-y-auto overflow-x-hidden',
        className,
      )}
    >
      <CommandPrimitive.Empty className='py-6 text-center text-sm'>
        {fallbackMessage}
      </CommandPrimitive.Empty>
      {children}
    </CommandPrimitive.List>
  </CommandPrimitive>
)

interface CommandInputProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Input> {
  iconSrc?: string
}

export const CommandInput = ({
  className,
  ref,
  iconSrc,
  ...props
}: CommandInputProps) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    {iconSrc && (
      <SvgImage src={iconSrc} className='mr-2 h-4 w-4 shrink-0 opacity-50' />
    )}
    <CommandPrimitive.Input
      ref={ref}
      className={twMerge(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-grey-300 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
)

export const CommandGroup = ({
  className = 'overflow-hidden p-1 text-black [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-grey-500',
  children,
  ref,
  ...props
}: ComponentPropsWithRef<typeof CommandPrimitive.Group>) => {
  return (
    <CommandPrimitive.Group ref={ref} className={className} {...props}>
      {children}
    </CommandPrimitive.Group>
  )
}

export const CommandSeparator = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={twMerge('-mx-1 h-px bg-grey-200', className)}
    {...props}
  />
)

export const CommandItem = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-grey-50 data-[selected=true]:text-black data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
)
