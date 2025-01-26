import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SwitchToggleProps extends Omit<HTMLProps<HTMLInputElement>, 'label'> {
  children?: ReactNode
}

const SwitchToggle = ({ children, className, ...props }: SwitchToggleProps) => {
  const toggleCls = twMerge(
    'group w-8 h-4 rounded-full flex items-center',
    'bg-grey-300 peer-checked:bg-sky-400',
    'ring-2 ring-grey-300 peer-checked:ring-sky-400',
    'transition',
  )
  return (
    <label
      className={twMerge('flex items-center cursor-pointer gap-4', className)}
    >
      <input type='checkbox' className='peer hidden' {...props} />
      <div className={toggleCls}>
        <div className='w-4 h-4 rounded-full bg-white transform peer-checked:group-[]:translate-x-full transition' />
      </div>
      {children}
    </label>
  )
}

export default SwitchToggle
