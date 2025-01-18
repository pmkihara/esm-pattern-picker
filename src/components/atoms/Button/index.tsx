import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Spinner from '../Spinner'

const buttonVariants = cva(
  'rounded text-base font-semibold disabled:cursor-not-allowed focus-visible:outline-0 focus-visible:ring-2 ',
  {
    variants: {
      variant: {
        sky: twMerge(
          'bg-sky-400 text-white',
          'hover:bg-sky-300 focus-visible:bg-sky-300 focus-visible:ring-sky-400',
          'disabled:bg-sky-50 disabled:text-sky-300 ',
        ),
        sun: twMerge(
          'bg-sun-400 text-white',
          'hover:bg-sun-300 focus-visible:bg-sun-300 focus-visible:ring-sun-400',
          'disabled:bg-sun-50 disabled:text-sun-300',
        ),
        outline: twMerge(
          'border border-sky-300 text-sky-300 ring-sky-400',
          'hover:border-sky-400 hover:text-sky-400 hover:ring-2',
          'disabled:border-sky-200 disabled:text-sky-200',
        ),
        fakeInput: twMerge(
          'border border-grey-200 text-grey-300 bg-white',
          'hover:border-sky-300',
          'focus:border-sky-300 focus-visible:ring-0',
          'disabled:pointer-events-none disabled:bg-grey-50 disabled:text-grey-600',
        ),
        ghost: twMerge(),
      },
      size: {
        hug: 'text-xs py-1',
        icon: 'p-1.5',
        input: 'px-3 py-2 h-[38px] text-sm font-normal',
        sm: 'px-4 py-1 h-8 text-sm',
        md: 'px-6 py-2 h-10 text-base',
        lg: 'px-8 py-2 h-12 text-base',
      },
      isLoading: {
        true: 'flex gap-2 items-center justify-center',
      },
    },
    defaultVariants: {
      variant: 'sky',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
  isLoading?: boolean
}

const Button = ({
  children,
  className,
  variant,
  size,
  isLoading,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        buttonVariants({ variant, isLoading, size }),
        className,
      )}
      type={type}
      disabled={disabled || isLoading}
    >
      {isLoading && <Spinner color='sky' />}
      {children}
    </button>
  )
}

export default Button
