import AttributeInput from '@/components/atoms/AttributeInput'
import AvatarHead from '@/components/atoms/AvatarHead'
import {
  IdolAttribute,
  IdolAttributes,
  IdolAttributesMap,
} from '@/data/attributes'
import { firstName, Idol } from '@/data/idols'
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
    <div
      className='flex border-b border-grey-100 p-1 text-xs pt-7 -mt-6'
      id={idol}
    >
      <div className='grow shrink flex gap-2 items-center max-w-full'>
        <AvatarHead idol={idol} />
        <span className='font-bold max-w-full overflow-hidden truncate'>
          {firstName(idol)}
        </span>
      </div>
      <div
        className={twMerge(
          'shrink-0 grow-0 grid grid-cols-6 content-center justify-items-center',
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
