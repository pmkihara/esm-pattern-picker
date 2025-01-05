import { UseFormRegister } from 'react-hook-form'
import CraftedCheckbox from '../CraftedCheckbox'
import { UserOutfit } from '@/data/outfits'
import { OutfitField } from '@/components/organisms/OutfitsForm/index.hooks'

interface UserOutfitProps {
  outfit: OutfitField
  register: UseFormRegister<{ outfits: UserOutfit[] }>
}

const UserOutfitInput = ({ outfit, register }: UserOutfitProps) => {
  return (
    <div className='hover:bg-grey-50 px-2'>
      <div key={outfit.id} className='flex items-center gap-2 md:gap-3 py-1'>
        <CraftedCheckbox {...register(`outfits.${outfit.index}.crafted`)} />
        <span className='truncate text-sm'>{outfit.fullName}</span>
      </div>
    </div>
  )
}

export default UserOutfitInput
