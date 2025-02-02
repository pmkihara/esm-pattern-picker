import Collapsible from '@/components/atoms/Collapsible'
import UserOutfitInput from '@/components/atoms/UserOutfitInput'
import { OutfitField } from '@/components/organisms/OutfitsForm/index.hooks'
import { Idol } from '@/data/idols'
import { OutfitGroup, UserOutfit } from '@/data/outfits'
import { capitalize, sortBy } from 'lodash'
import { memo, useMemo } from 'react'
import { UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'

interface IdolOutfitsGroupProps {
  idol: Idol
  outfits: OutfitField[]
  group: OutfitGroup
  register: UseFormRegister<{ outfits: UserOutfit[] }>
  removeField: UseFieldArrayRemove
}

const IdolOutfitsGroup = ({
  idol,
  outfits = [],
  group,
  register,
  removeField,
}: IdolOutfitsGroupProps) => {
  const sortedOutfits = useMemo(() => sortBy(outfits, 'fullName'), [outfits])

  return (
    <Collapsible
      key={`${idol}-${group}`}
      contentClassName='border-l-2 border-grey-100 ml-[15px] pl-2'
      triggerProps={{
        children: (
          <div className='w-full text-sm'>
            <span className='font-semibold mr-1'>{capitalize(group)}</span>
            <span className='text-grey-400'>({outfits.length})</span>
          </div>
        ),
      }}
    >
      <div>
        {sortedOutfits.map((outfit) => (
          <UserOutfitInput
            key={outfit.id}
            outfit={outfit}
            register={register}
            removeField={removeField}
          />
        ))}
      </div>
    </Collapsible>
  )
}

export default memo(IdolOutfitsGroup)
