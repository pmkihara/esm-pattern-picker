import Collapsible from '@/components/atoms/Collapsible'
import { Idol, idolFullNames } from '@/data/idols'
import { outfitGroups, UserOutfit } from '@/data/outfits'
import { memo } from 'react'
import IdolOutfitsGroup from '../IdolOutfitsGroup'
import { Dictionary } from 'lodash'
import { OutfitField } from '@/components/organisms/OutfitsForm/index.hooks'
import { UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'

interface IdolPatternsProps {
  idol: Idol
  fields: Dictionary<OutfitField[]>
  register: UseFormRegister<{ outfits: UserOutfit[] }>
  removeField: UseFieldArrayRemove
}

const IdolOutfits = ({
  fields,
  idol,
  register,
  removeField,
}: IdolPatternsProps) => {
  if (!fields) return null

  const totalOutfitsCount = outfitGroups.reduce(
    (acc, group) => acc + (fields[group] || []).length,
    0,
  )

  return (
    <Collapsible
      key={idol}
      rootClassName='group'
      contentClassName='border-l-2 border-grey-100 ml-[15px] pl-2 mb-1'
      triggerProps={{
        children: (
          <div className='flex w-full items-center justify-between text-sm'>
            <span className='text-sm font-semibold'>{idolFullNames[idol]}</span>
            <span className='text-grey-400 group-data-[state="closed"]:visible invisible'>
              ({totalOutfitsCount})
            </span>
          </div>
        ),
      }}
    >
      {outfitGroups.map((group) => (
        <IdolOutfitsGroup
          key={group}
          idol={idol}
          outfits={fields[group] || []}
          group={group}
          register={register}
          removeField={removeField}
        />
      ))}
    </Collapsible>
  )
}

export default memo(IdolOutfits)
