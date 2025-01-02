import Collapsible from '@/components/atoms/Collapsible'
import UserOutfitInput from '@/components/atoms/UserOutfitInput'
import { OutfitField } from '@/components/organisms/OutfitsForm'
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
      triggerText={capitalize(group)}
      triggerClassName='font-semibold'
    >
      <div className='-ml-3 md:-ml-6'>
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
