import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'
import SvgImage from '../SvgImage'
import CheckIcon from '@@/public/assets/icons/check.svg'

interface CheckboxInputProps extends HTMLProps<HTMLInputElement> {
  label: string
  wrapperClassName?: string
}

const CheckboxInput = ({
  label,
  wrapperClassName,
  ...props
}: CheckboxInputProps) => {
  return (
    <label
      className={twMerge(
        'w-full flex items-center gap-2 md:gap-3 truncate text-sm grow shrink py-1.5',
        wrapperClassName,
      )}
    >
      <input type='checkbox' className='peer hidden' {...props} />
      <span
        className={twMerge(
          'group w-4 h-4 border border-grey-300 rounded shrink-0 grow-0',
          'flex justify-center items-center shrink-0 grow-0',
          'peer-checked:bg-sky-400 peer-checked:border-sky-400',
        )}
      >
        <SvgImage
          src={CheckIcon.src}
          className='w-3 h-3 fill-white peer-checked:group-[]:block hidden'
          width='12'
          height='12'
        />
      </span>
      <span className='truncate grow shrink text-xs md:text-base'>{label}</span>
    </label>
  )
}

export default CheckboxInput
