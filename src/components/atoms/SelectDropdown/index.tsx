'use client'

import {
  Root,
  Trigger,
  Icon,
  Value,
  Content,
  Group,
  Label,
  Item,
  Separator,
  Viewport,
  ItemIndicator,
  ItemText,
  ScrollUpButton,
  ScrollDownButton,
} from '@radix-ui/react-select'
import ChevronDownIcon from '@@/public/assets/icons/chevron-down.svg'
import ChevronUpIcon from '@@/public/assets/icons/chevron-up.svg'
import CheckIcon from '@@/public/assets/icons/check.svg'
import SvgImage from '../SvgImage'
import { ComponentPropsWithRef, Fragment, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from '../Button'

interface SelectDropdownItem {
  value: string
  displayValue?: string
  props?: ComponentPropsWithRef<typeof Item>
}

interface SelectDropdownGroup {
  label?: string
  items: SelectDropdownItem[]
}

interface SelectDropdownProps extends ComponentPropsWithRef<typeof Root> {
  groups: SelectDropdownGroup[]
  trigger?: ReactNode
  valuePlaceholder?: string
  contentProps?: ComponentPropsWithRef<typeof Content>
}

const SelectDropdown = ({
  groups,
  trigger,
  valuePlaceholder,
  contentProps,
  ...props
}: SelectDropdownProps) => {
  return (
    <Root {...props}>
      {trigger ? (
        <Trigger asChild>{trigger}</Trigger>
      ) : (
        <SelectTrigger valuePlaceholder={valuePlaceholder ?? 'Select'} />
      )}
      <SelectContent {...contentProps}>
        {groups.map((group, index) => (
          <Fragment key={index}>
            {index > 0 && <Separator className='-mx-1 my-1 h-px bg-grey-100' />}
            <SelectGroup {...group} />
          </Fragment>
        ))}
      </SelectContent>
    </Root>
  )
}

export const SelectValue = Value

interface SelectTriggerProps extends ComponentPropsWithRef<typeof Trigger> {
  valuePlaceholder?: string
}

const SelectTrigger = ({ valuePlaceholder, ...props }: SelectTriggerProps) => (
  <Trigger {...props} asChild>
    <Button
      variant='fakeInput'
      size='input'
      className='w-full flex gap-4 items-center justify-between disabled:cursor-not-allowed [&>span]:line-clamp-1 text-black data-[placeholder]:text-grey-500'
    >
      <SelectValue placeholder={valuePlaceholder} />
      <Icon>
        <SvgImage
          src={ChevronDownIcon.src}
          className='fill-grey-500 w-4 h-4 shrink-0 grow-0'
          width='16'
          height='16'
        />
      </Icon>
    </Button>
  </Trigger>
)

const SelectGroup = ({ items, label }: SelectDropdownGroup) => (
  <Group>
    {label && (
      <Label className='py-1.5 pl-8 pr-2 text-xs font-semibold text-grey-500'>
        {label}
      </Label>
    )}
    {items.map((item) => (
      <SelectItem key={item.value} {...item} />
    ))}
  </Group>
)

const SelectItem = ({ value, displayValue, props }: SelectDropdownItem) => (
  <Item
    value={value}
    {...props}
    className={twMerge(
      'relative flex w-full cursor-default select-none items-center rounded-sm',
      'py-1.5 pl-8 pr-2 text-sm outline-none',
      'focus:bg-sky-50',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props?.className,
    )}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <ItemIndicator>
        <SvgImage
          src={CheckIcon.src}
          className='fill-sky-500 w-4 h-4 shrink-0 grow-0'
          width='16'
          height='16'
        />
      </ItemIndicator>
    </span>
    <ItemText>{displayValue ?? value}</ItemText>
  </Item>
)

const SelectScrollUpButton = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof ScrollUpButton>) => (
  <ScrollUpButton
    {...props}
    className={twMerge(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
  >
    <SvgImage
      src={ChevronUpIcon.src}
      className='fill-grey-300 w-4 h-4 shrink-0 grow-0'
      width='16'
      height='16'
    />
  </ScrollUpButton>
)

const SelectScrollDownButton = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof ScrollUpButton>) => (
  <ScrollDownButton
    {...props}
    className={twMerge(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
  >
    <SvgImage
      src={ChevronDownIcon.src}
      className='fill-grey-300 w-4 h-4 shrink-0 grow-0'
      width='16'
      height='16'
    />
  </ScrollDownButton>
)

const SelectContent = ({
  position = 'popper',
  className,
  children,
  ...props
}: ComponentPropsWithRef<typeof Content>) => (
  <Content
    {...props}
    position={position ?? 'item-aligned'}
    className={twMerge(
      'relative z-50 max-h-96 min-w-32 overflow-hidden rounded',
      'bg-white border border-grey-200 shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      position === 'popper' &&
        'w-[--radix-select-trigger-width] max-h-[--radix-select-content-available-height]',
      className,
    )}
  >
    <SelectScrollUpButton />
    <Viewport className={twMerge('p-1', position === 'popper' && 'w-full ')}>
      {children}
    </Viewport>
    <SelectScrollDownButton />
  </Content>
)

export default SelectDropdown
