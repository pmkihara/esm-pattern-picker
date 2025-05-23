'use client'

import {
  Close,
  Content,
  DialogProps,
  Overlay,
  Portal,
  Root,
  Trigger,
  Title,
  Description,
} from '@radix-ui/react-dialog'
import { ComponentPropsWithRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import H2 from '../H2'
import TimesIcon from '@@/public/assets/icons/times.svg'

export const DialogWindow = ({ children, ...props }: DialogProps) => {
  return <Root {...props}>{children}</Root>
}

export const DialogTrigger = ({
  children,
  ...props
}: ComponentPropsWithRef<typeof Trigger>) => (
  <Trigger {...props}>{children}</Trigger>
)

interface DialogPortalWithContentProps {
  children: ReactNode
  contentClassNames?: string
  title?: string
  description?: string
  footer?: ReactNode
}

export const DialogPortalWithContent = ({
  children,
  contentClassNames,
  title,
  description,
  footer,
}: DialogPortalWithContentProps) => {
  const overlayCls = twMerge(
    'fixed inset-0 z-50 bg-black/50',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 ',
  )
  const contentCls = twMerge(
    'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50',
    'w-screen h-screen max-w-screen max-h-screen overflow-y-auto',
    'border bg-white p-6 pt-12 shadow-lg duration-200',
    'sm:rounded-lg sm:max-w-max-screen sm',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
    'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
    'data-[state=open]:slide-in-from-top-[48%] data-[state=closed]:slide-out-to-top-[48%]',
    'data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2',
    contentClassNames,
  )
  const closeCls =
    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'

  return (
    <Portal>
      <Overlay className={overlayCls} />
      <Content className={contentCls}>
        <div className='flex flex-col space-y-1.5 text-left'>
          <Title asChild>
            <H2>{title}</H2>
          </Title>
          <Description asChild>
            <p className='text-sm text-grey-500'>{description}</p>
          </Description>
        </div>
        {children}
        {footer && (
          <div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
            {footer}
          </div>
        )}
        <Close className={closeCls}>
          <span className='sr-only'>Close</span>
          <SvgImage
            src={TimesIcon.src}
            className='w-4 h-4 fill-sky-950 hover:fill-sky-600'
            width='16'
            height='16'
          />
        </Close>
      </Content>
    </Portal>
  )
}
