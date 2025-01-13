import { ComponentPropsWithRef, ReactNode, useEffect, useState } from 'react'
import { Content, Root, Trigger } from '@radix-ui/react-collapsible'
import CollapseButton, {
  CollapseButtonProps,
} from '@/components/atoms/CollapseButton'

interface CollapsibleProps extends ComponentPropsWithRef<typeof Root> {
  triggerProps: CollapseButtonProps
  children: ReactNode
  contentClassName?: string
  rootClassName?: string
  defaultOpen?: boolean
  contentProps?: ComponentPropsWithRef<typeof Content>
}

const Collapsible = ({
  triggerProps,
  children,
  contentClassName = 'pl-2',
  rootClassName,
  defaultOpen = true,
  contentProps,
  ...props
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  useEffect(() => {
    setIsOpen(defaultOpen)
  }, [defaultOpen])

  return (
    <Root
      className={rootClassName}
      defaultOpen={defaultOpen}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      {...props}
    >
      <Trigger asChild>
        <CollapseButton {...triggerProps} />
      </Trigger>
      <Content className={contentClassName} {...contentProps}>
        {children}
      </Content>
    </Root>
  )
}

export default Collapsible
