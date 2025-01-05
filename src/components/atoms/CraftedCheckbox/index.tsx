import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const CraftedCheckbox = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label>
      <input type='checkbox' className='peer hidden' {...props} />
      <span
        className={twMerge(
          'group block min-w-14 p-0.5 rounded-full text-2xs font-semibold border text-center cursor-pointer',
          'bg-white text-grey-400 border-grey-300 transition-colors',
          'peer-checked:bg-sky-400 peer-checked:text-white peer-checked:border-sky-400',
        )}
      >
        <span className='hidden peer-checked:group-[]:block'>Owned</span>
        <span className='block peer-checked:group-[]:hidden'>Crafted</span>
      </span>
    </label>
  )
}

export default CraftedCheckbox
