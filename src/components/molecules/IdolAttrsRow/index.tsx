import AttributeInput from '@/components/atoms/AttributeInput'
import Avatar from '@/components/atoms/Avatar'
import {
  IdolAttribute,
  IdolAttributes,
  IdolAttributesMap,
} from '@/data/attributes'
import { Idol } from '@/data/idols'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface IdolAttrsRowProps {
  idol: Idol
  attributes: IdolAttributes
  register: UseFormRegister<IdolAttributesMap>
  errors?: FieldErrors<IdolAttributes>
  attrClassName?: string
}

const IdolAttrsRow = ({
  idol,
  attributes,
  register,
  errors,
  attrClassName,
}: IdolAttrsRowProps) => {
  return (
    <div className='flex border-y border-grey-100 p-1 text-xs'>
      <div className='grow shrink flex gap-2 items-center'>
        <Avatar idol={idol} />
        <span className='font-bold'>{idol}</span>
      </div>
      <div
        className={twMerge(
          'grid grid-cols-6 content-center justify-items-center',
          attrClassName,
        )}
      >
        {Object.entries(attributes).map(([attr, value]) => (
          <AttributeInput
            key={`${idol}.${attr}`}
            defaultValue={value}
            {...register(`${idol}.${attr as IdolAttribute}`, {
              valueAsNumber: true,
            })}
            isError={!!errors?.[attr as IdolAttribute]}
          />
        ))}
      </div>
    </div>
  )
}

export default IdolAttrsRow
