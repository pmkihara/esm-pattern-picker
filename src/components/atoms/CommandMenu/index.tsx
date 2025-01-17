'use client'

import { Command as CommandPrimitive } from 'cmdk'
import { twMerge } from 'tailwind-merge'
import { ComponentPropsWithRef, ReactNode, RefObject } from 'react'
import SvgImage from '@/components/atoms/SvgImage'

export interface CommandGroupItems {
  items: ComponentPropsWithRef<typeof CommandItem>[]
  heading?: string
  collapsible?: boolean
  triggerContent?: ReactNode
}

interface CommandMenuProps
  extends ComponentPropsWithRef<typeof CommandPrimitive> {
  input?: ReactNode
}

export const CommandMenu = ({
  className,
  ref,
  input,
  children,
  ...props
}: CommandMenuProps) => (
  <CommandPrimitive
    ref={ref}
    className={twMerge('flex h-full w-full flex-col', className)}
    {...props}
  >
    {input}
    <CommandPrimitive.List
      className={twMerge(
        'max-h-[300px] overflow-y-auto overflow-x-hidden',
        className,
      )}
    >
      {children}
    </CommandPrimitive.List>
  </CommandPrimitive>
)

interface CommandInputProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Input> {
  iconSrc?: string
  wrapperClassName?: string
  wrapperRef?: RefObject<HTMLDivElement | null>
}

export const CommandInput = ({
  className,
  ref,
  iconSrc,
  wrapperClassName,
  wrapperRef,
  ...props
}: CommandInputProps) => (
  <div
    className={twMerge('relative', wrapperClassName)}
    cmdk-input-wrapper=''
    ref={wrapperRef}
  >
    <CommandPrimitive.Input
      ref={ref}
      className={twMerge(
        'disabled:cursor-not-allowed disabled:opacity-50',
        'peer w-full px-4 py-2 border border-grey-200 rounded text-sm',
        'hover:border-sky-300',
        'focus:border-sky-300 focus:outline-none focus-visible:outline-none',
        'placeholder:text-grey-300',
        iconSrc && 'pl-9',
        className,
      )}
      {...props}
    />
    {iconSrc && (
      <SvgImage
        src={iconSrc}
        className='absolute inset-y-0 left-0 flex items-center pl-3 fill-grey-300 peer-focus:fill-sky-400'
        width='16'
        height='16'
      />
    )}
  </div>
)

export const CommandInputAsChild = ({ ...props }) => (
  <CommandPrimitive.Input {...props} asChild />
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
      'relative flex cursor-pointer select-none items-center px-2 py-1.5 text-sm outline-none',
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 ',
      'data-[selected=true]:text-black data-[selected=true]:bg-sky-50 data-[selected=true]:font-semibold',
      'hover:bg-grey-50',
      className,
    )}
    {...props}
  />
)

interface CommandEmptyProps
  extends ComponentPropsWithRef<typeof CommandPrimitive.Empty> {
  fallbackMessage?: string
}

export const CommandEmpty = ({
  fallbackMessage = 'No results found.',
  ...props
}: CommandEmptyProps) => (
  <CommandPrimitive.Empty className='py-6 text-center text-sm' {...props}>
    {fallbackMessage}
  </CommandPrimitive.Empty>
)
