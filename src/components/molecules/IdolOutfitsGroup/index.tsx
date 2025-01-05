import Collapsible from '@/components/atoms/Collapsible'
import UserOutfitInput from '@/components/atoms/UserOutfitInput'
import { OutfitField } from '@/components/organisms/OutfitsForm/index.hooks'
import { Idol } from '@/data/idols'
import { OutfitGroup, UserOutfit } from '@/data/outfits'
import { capitalize, sortBy } from 'lodash'
import { useMemo } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface IdolOutfitsGroupProps {
  idol: Idol
  outfits: OutfitField[]
  group: OutfitGroup
  register: UseFormRegister<{ outfits: UserOutfit[] }>
}

const IdolOutfitsGroup = ({
  idol,
  outfits = [],
  group,
  register,
}: IdolOutfitsGroupProps) => {
  const sortedOutfits = useMemo(() => sortBy(outfits, 'fullName'), [outfits])

  return (
    <Collapsible
      key={`${idol}-${group}`}
      contentClassName='border-l-2 border-grey-100 ml-[15px] pl-2'
      triggerProps={{
        children: (
          <div className='flex w-full items-center justify-between text-sm'>
            <span className='font-semibold'>{capitalize(group)}</span>
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
          />
        ))}
      </div>
    </Collapsible>
  )
}

export default IdolOutfitsGroup
