import { ReactNode, useState } from 'react'
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
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Root open={isOpen} onOpenChange={setIsOpen} className={rootClassName}>
      <Trigger asChild>
        <CollapseButton
          {...triggerProps}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Trigger>
      <Content className={contentClassName}>{children}</Content>
    </Root>
  )
}

export default Collapsible
