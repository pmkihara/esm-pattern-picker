import { IdolAttribute } from '@/data/attributes'
import { useBreakpoint } from '@/hooks/tailwind'
import { twMerge } from 'tailwind-merge'

interface AttributeTagProps {
  type: IdolAttribute
}

const AttributeTag = ({ type }: AttributeTagProps) => {
  const isTablet = useBreakpoint('md')
  const attrColors = {
    [IdolAttribute.Active]: 'bg-active',
    [IdolAttribute.Passion]: 'bg-passion',
    [IdolAttribute.Unique]: 'bg-unique',
    [IdolAttribute.Smart]: 'bg-smart',
    [IdolAttribute.Technique]: 'bg-technique',
    [IdolAttribute.Charisma]: 'bg-charisma',
  }

  return (
    <div
      className={twMerge(
        'text-2xs font-bold text-white rounded-sm w-5 text-center capitalize',
        'md:text-sm md:w-20',
        attrColors[type],
      )}
    >
      {isTablet ? type : type.substring(0, 2)}
    </div>
  )
}

export default AttributeTag
