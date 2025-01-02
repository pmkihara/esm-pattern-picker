'use client'

import SaveIcon from '@@/public/assets/icons/save.svg'
import SvgImage from '../SvgImage'
import { twMerge } from 'tailwind-merge'
import { useBreakpoint } from '@/hooks/tailwind'
import Button from '../Button'

const MobileSaveButton = () => {
  return (
    <button
      className={twMerge(
        'group bg-sun-400 rounded-full flex items-center justify-center w-15 h-15 ring-4 ring-white',
        'disabled:bg-sun-50',
        'fixed left-1/2 transform -translate-x-1/2 bottom-8 z-10',
      )}
      type='submit'
    >
      <SvgImage
        src={SaveIcon.src}
        className='fill-white group-disabled:fill-sun-300'
        height='24'
        width='24'
      />
      <span className='text-white sr-only group-disabled:text-sun-300'>
        Save
      </span>
    </button>
  )
}

const LaptopSaveButton = () => {
  return (
    <div
      className={twMerge(
        'fixed left-1/2 transform -translate-x-1/2 bottom-8 z-10',
        'md:sticky md:translate-x-0 md:-bottom-0 md:bg-white md:-left-10 md:-mx-10 px-10 py-4 md:shadow-up',
      )}
    >
      <Button type='submit' variant='sun'>
        Save settings
      </Button>
    </div>
  )
}

const SaveButton = () => {
  const isLaptop = useBreakpoint('lg')

  return isLaptop ? <LaptopSaveButton /> : <MobileSaveButton />
}

export default SaveButton
