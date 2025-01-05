import { UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'
import CraftedCheckbox from '../CraftedCheckbox'
import { UserOutfit } from '@/data/outfits'
import { OutfitField } from '@/components/organisms/OutfitsForm/index.hooks'
import SvgImage from '../SvgImage'
import TimesIcon from '@@/public/assets/icons/times.svg'

interface UserOutfitProps {
  outfit: OutfitField
  register: UseFormRegister<{ outfits: UserOutfit[] }>
  removeField: UseFieldArrayRemove
}

const UserOutfitInput = ({
  outfit,
  register,
  removeField,
}: UserOutfitProps) => {
  const onRemoveClick = () => {
    removeField(outfit.index)
  }

  return (
    <div className='hover:bg-grey-50 px-2 flex items-center justify-between max-w-full'>
      <div
        key={outfit.id}
        className='flex items-center gap-2 md:gap-3 py-1 shrink grow overflow-hidden'
      >
        <CraftedCheckbox {...register(`outfits.${outfit.index}.crafted`)} />
        <span className='truncate text-sm shrink grow'>{outfit.fullName}</span>
      </div>
      <button className='group/delete p-1' onClick={onRemoveClick}>
        <SvgImage
          src={TimesIcon.src}
          width='16'
          height='16'
          className='group-hover/delete:fill-sky-400 fill-sky-800 md:invisible group-hover:visible'
        />
      </button>
    </div>
  )
}

export default UserOutfitInput
