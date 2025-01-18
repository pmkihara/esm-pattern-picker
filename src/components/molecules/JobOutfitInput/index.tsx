import Button from '@/components/atoms/Button'
import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandMenu,
} from '@/components/atoms/CommandMenu'
import Popover from '@/components/atoms/Popover'
import { Outfit } from '@/data/outfits'
import { uniq } from 'lodash'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import ChevronDownIcon from '@@/public/assets/icons/chevron-down.svg'
import SvgImage from '@/components/atoms/SvgImage'

interface JobOutfitInputProps {
  userOutfits: Outfit[]
  disabled?: boolean
  onValueChange: (value: string) => void
  defaultValue?: string | null
}

const JobOutfitInput = ({
  userOutfits,
  disabled,
  onValueChange,
  defaultValue,
}: JobOutfitInputProps) => {
  const nullText = 'Free (none)'
  const outfitNames = uniq(userOutfits.map(({ name }) => name))

  const [open, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState(
    defaultValue === null ? 'null' : defaultValue,
  )

  const popoverTrigger = (
    <div className='w-full max-w-screen-lg'>
      <Button
        variant='fakeInput'
        size='input'
        className='w-full group flex items-center justify-between gap-2 px-3'
        disabled={disabled}
      >
        <span
          className={twMerge(
            'ml-px',
            defaultValue !== undefined && !disabled && 'text-black font-normal',
          )}
        >
          {inputValue === 'null' ? nullText : inputValue}
        </span>
        <SvgImage
          src={ChevronDownIcon.src}
          width='16'
          height='16'
          className='w-4 h-4 fill-grey-500'
        />
      </Button>
    </div>
  )

  const input = <CommandInput placeholder='Select outfit...' />

  const onSelect = (value: string) => {
    onValueChange(value)
    setInputValue(value)
    setIsOpen(false)
  }

  return (
    <>
      <div>
        <h3 className='font-bold '>Outfit</h3>
        <p className='mb-2 text-sm text-grey-500'>
          (currently only supports outfits from your collection)
        </p>
      </div>
      {disabled ? (
        popoverTrigger
      ) : (
        <Popover
          trigger={popoverTrigger}
          contentClassName='w-[var(--radix-popover-trigger-width)]'
          open={open}
          onOpenChange={setIsOpen}
        >
          <CommandMenu value={inputValue} className='pt-0' input={input}>
            <CommandItem value={'null'} className='text-xs' onSelect={onSelect}>
              <p className='text-sm'>{nullText}</p>
            </CommandItem>
            {outfitNames.map((value) => (
              <CommandItem
                key={value}
                value={value}
                className='text-xs'
                onSelect={onSelect}
              >
                <p className='text-sm'>{value}</p>
              </CommandItem>
            ))}
            <CommandEmpty />
          </CommandMenu>
        </Popover>
      )}
    </>
  )
}

export default JobOutfitInput
