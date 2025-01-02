import Collapsible from '@/components/atoms/Collapsible'
import { Idol, idolFullNames } from '@/data/idols'
import { outfitGroups, UserOutfit } from '@/data/outfits'
import { memo } from 'react'
import IdolOutfitsGroup from '../IdolOutfitsGroup'
import { Dictionary } from 'lodash'
import { OutfitField } from '@/components/organisms/OutfitsForm'
import { UseFormRegister } from 'react-hook-form'

interface IdolPatternsProps {
  idol: Idol
  fields: Dictionary<OutfitField[]>
  register: UseFormRegister<{ outfits: UserOutfit[] }>
}

const IdolOutfits = ({ fields, idol, register }: IdolPatternsProps) => {
  return (
    <Collapsible
      key={idol}
      triggerText={idolFullNames[idol]}
      triggerClassName='font-semibold'
    >
      {outfitGroups.map((group) => (
        <IdolOutfitsGroup
          key={group}
          idol={idol}
          outfits={fields[group]}
          group={group}
          register={register}
        />
      ))}
    </Collapsible>
  )
}

export default memo(IdolOutfits)
