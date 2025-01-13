import { forwardRef, ReactNode } from 'react'
import { Content, Root, Trigger } from '@radix-ui/react-collapsible'
import CollapseButton, {
  CollapseButtonProps,
} from '@/components/atoms/CollapseButton'

interface CollapsibleProps {
  triggerProps: Omit<CollapseButtonProps, 'onClick' | 'isOpen'>
  children: ReactNode
  contentClassName?: string
  rootClassName?: string
  defaultOpen?: boolean
}

const Collapsible = ({
  triggerProps,
  children,
  contentClassName = 'pl-2',
  rootClassName,
  defaultOpen = true,
  ...props
}: CollapsibleProps) => {
  return (
    <Root className={rootClassName} defaultOpen={defaultOpen} {...props}>
      <Trigger asChild>
        <CollapseButton {...triggerProps} />
      </Trigger>
      <Content className={contentClassName}>{children}</Content>
    </Root>
  )
}

export default forwardRef(Collapsible)
