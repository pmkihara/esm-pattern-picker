import AttributeTag from '@/components/atoms/AttributeTag'
import { IdolAttribute } from '@/data/attributes'
import { twMerge } from 'tailwind-merge'

interface IdolAttrsHeaderProps {
  attrClassName?: string
}

const IdolAttrsHeader = ({ attrClassName }: IdolAttrsHeaderProps) => {
  return (
    <div className='flex border-b border-grey-100 px-1 sticky -top-4 md:-top-6 bg-white'>
      <div className='grow shrink' />
      <div
        className={twMerge(
          'grid grid-cols-6 h-6 content-center justify-items-center',
          attrClassName,
        )}
      >
        <AttributeTag type={IdolAttribute.Active} />
        <AttributeTag type={IdolAttribute.Passion} />
        <AttributeTag type={IdolAttribute.Unique} />
        <AttributeTag type={IdolAttribute.Smart} />
        <AttributeTag type={IdolAttribute.Technique} />
        <AttributeTag type={IdolAttribute.Charisma} />
      </div>
    </div>
  )
}

export default IdolAttrsHeader
