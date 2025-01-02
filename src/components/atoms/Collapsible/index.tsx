import { ReactNode, useState } from 'react'
import { Content, Root, Trigger } from '@radix-ui/react-collapsible'
import CollapseButton from '@/components/atoms/CollapseButton'
import { twMerge } from 'tailwind-merge'

interface CollapsibleProps {
  triggerText: string
  children: ReactNode
  triggerClassName?: string
  contentClassName?: string
  defaultOpen?: boolean
}

const Collapsible = ({
  triggerText,
  children,
  triggerClassName,
  contentClassName,
  defaultOpen = true,
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <CollapseButton
          title={triggerText}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={triggerClassName}
        />
      </Trigger>
      <Content className={twMerge('pl-3 md:pl-6', contentClassName)}>
        {children}
      </Content>
    </Root>
  )
}

export default Collapsible
