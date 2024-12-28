import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Spinner from '../Spinner'

const buttonVariants = cva(
  'px-6 py-3 rounded text-base font-semibold disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        sky: twMerge(
          'bg-sky-400 text-white',
          'hover:bg-sky-300',
          'disabled:bg-sky-50 disabled:text-sky-300 ',
        ),
        sun: twMerge(
          'bg-sun-400 text-white',
          'hover:bg-sun-300',
          'disabled:bg-sun-50 disabled:text-sun-300',
        ),
        outline: twMerge(
          'border border-sky-300 text-sky-300',
          'hover:border-sky-400 hover:text-sky-400',
          'disabled:border-sky-200 disabled:text-sky-200',
        ),
      },
      isLoading: {
        true: 'flex gap-2 items-center justify-center',
      },
    },
    defaultVariants: {
      variant: 'sky',
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
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, isLoading }), className)}
    >
      {isLoading && <Spinner color='sky' />}
      {children}
    </button>
  )
}

export default Button
