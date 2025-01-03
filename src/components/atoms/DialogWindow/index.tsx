'use client'

import {
  Close,
  Content,
  DialogProps,
  Overlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import H2 from '../H2'
import TimesIcon from '@@/public/assets/icons/times.svg'

interface DialogWindowProps extends DialogProps {
  children: ReactNode
  trigger?: ReactNode
  title?: string
  description?: string
  footer?: ReactNode
  contentClassNames?: string
}

const DialogWindow = ({
  children,
  trigger,
  title,
  description,
  footer,
  contentClassNames,
  ...props
}: DialogWindowProps) => {
  const overlayCls = twMerge(
    'fixed inset-0 z-50 bg-black/50',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 ',
  )
  const contentCls = twMerge(
    'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 grid w-full max-w-lg max-h-screen overflow-y-auto gap-4',
    'border bg-white p-6 shadow-lg duration-200',
    'sm:rounded-lg',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-[48%] ',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2',
    contentClassNames,
  )
  const closeCls =
    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'

  return (
    <Root {...props}>
      {trigger && <Trigger asChild>{trigger}</Trigger>}
      <Portal>
        <Overlay className={overlayCls} />
        <Content className={contentCls}>
          {(title || description) && (
            <div className='flex flex-col space-y-1.5 text-left'>
              {title && <H2>{title}</H2>}
              {description && (
                <p className='text-sm text-grey-500'>{description}</p>
              )}
            </div>
          )}
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
    </Root>
  )
}

export default DialogWindow
