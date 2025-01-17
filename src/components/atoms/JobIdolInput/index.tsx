import { Idol } from '@/data/idols'
import { HTMLProps, useState } from 'react'
import IdolImage from '../IdolImage'
import { twMerge } from 'tailwind-merge'
import Button from '../Button'
import {
  DialogPortalWithContent,
  DialogTrigger,
  DialogWindow,
} from '../DialogWindow'
import IdolPicker from '../IdolPicker'

interface JobIdolInputProps extends HTMLProps<HTMLInputElement> {
  idol?: Idol
  onIdolSelect: (idol: Idol | undefined) => void
  onRemove?: () => void
  isCustomJob?: boolean
}

const JobIdolInput = ({
  idol,
  onIdolSelect,
  onRemove,
  isCustomJob,
  ...props
}: JobIdolInputProps) => {
  const [open, setOpen] = useState(false)

  const onSelect = (selectedIdol: Idol | undefined) => {
    onIdolSelect(selectedIdol)
    setOpen(false)
  }

  return (
    <div className='max-w-14 w-full'>
      {isCustomJob ? (
        <>
          {' '}
          <DialogWindow open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button
                className={twMerge(
                  'overflow-hidden rounded-tl-lg rounded-br-lg aspect-square',
                  'bg-grey-50 ring-2 cursor-pointer ring-grey-200',
                  'hover:ring-sky-300 hover:bg-sky-100',
                  'group flex justify-center',
                )}
              >
                <input type='hidden' {...props} />
                <IdolImage idol={idol} />
              </button>
            </DialogTrigger>
            <DialogPortalWithContent>
              <IdolPicker onSelect={onSelect} />
            </DialogPortalWithContent>
          </DialogWindow>
          {onRemove && (
            <Button
              variant='ghost'
              size='hug'
              className='w-full text-grey-500 hover:text-sky-500 hover:underline'
              onClick={onRemove}
            >
              Remove
            </Button>
          )}
        </>
      ) : (
        <div
          className={twMerge(
            'overflow-hidden rounded-tl-lg rounded-br-lg aspect-square',
            'bg-grey-50 ring-2 ring-grey-200',
            'group flex justify-center',
          )}
        >
          <IdolImage idol={idol} />
        </div>
      )}
    </div>
  )
}

export default JobIdolInput
