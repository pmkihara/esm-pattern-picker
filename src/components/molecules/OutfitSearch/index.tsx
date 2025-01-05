import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import TimesIcon from '@@/public/assets/icons/times.svg'
import SvgImage from '@/components/atoms/SvgImage'
import { twMerge } from 'tailwind-merge'
import Popover from '@/components/atoms/Popover'
import { debounce } from 'lodash'
import Spinner from '@/components/atoms/Spinner'
import useOutfitSearch from './index.hooks'
import CheckboxInput from '@/components/atoms/CheckboxInput'

interface OutfitSearchProps {
  addFields: (outfits: Set<string>) => void
}

const OutfitSearch = ({ addFields }: OutfitSearchProps) => {
  const {
    visibleOutfits,
    isOpen,
    isLoading,
    query,
    selectedOutfits,
    inputRef,
    onQueryChange,
    onOpenChange,
    onClose,
    onSubmit,
    onCheckboxChange,
  } = useOutfitSearch(addFields)

  const trigger = (
    <div className='w-full my-8'>
      <Button
        variant='outline'
        className={twMerge('w-full h-11', isOpen && 'hidden')}
      >
        + Add Patterns
      </Button>
    </div>
  )

  const noResults = () => {
    if (isLoading) return <Spinner />
    if (query.length < 3) return <span>Type at least 3 characters</span>
    if (visibleOutfits.length === 0) return <span>No results found</span>
  }

  return (
    <Popover
      trigger={trigger}
      contentClassName='w-[var(--radix-popover-trigger-width)]'
      open={isOpen}
      onOpenChange={onOpenChange}
      contentProps={{ onOpenAutoFocus: () => inputRef.current?.focus() }}
    >
      <>
        <div className='relative -top-px'>
          <Input
            id='search'
            placeholder='Search by outfit or idol name...'
            onChange={debounce(onQueryChange, 300)}
            className='text-sm h-11 pr-8 bg-white'
            autoFocus={true}
            ref={inputRef}
          />
          <button className='absolute right-2 inset-y-0' onClick={onClose}>
            <span className='sr-only'>Close</span>
            <SvgImage
              src={TimesIcon.src}
              className='w-4 h-4 fill-black hover:fill-sky-600'
              width='16'
              height='16'
            />
          </button>
        </div>
        <div className='p-2'>
          {isLoading || query.length < 3 || visibleOutfits.length === 0 ? (
            <div className='grid py-20 text-grey-500 justify-items-center'>
              {noResults()}
            </div>
          ) : (
            <>
              <div className='w-full max-h-80 overflow-y-auto'>
                {visibleOutfits.map((outfit) => (
                  <CheckboxInput
                    key={outfit.fullName}
                    label={outfit.fullName}
                    wrapperClassName='hover:bg-grey-50'
                    value={outfit.fullName}
                    onChange={onCheckboxChange}
                    defaultChecked={selectedOutfits.has(outfit.fullName)}
                  />
                ))}
              </div>
              <Button size='sm' className='w-full mt-2' onClick={onSubmit}>
                Confirm
              </Button>
            </>
          )}
        </div>
      </>
    </Popover>
  )
}

export default OutfitSearch
