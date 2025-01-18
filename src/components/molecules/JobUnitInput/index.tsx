import SelectDropdown from '@/components/atoms/SelectDropdown'
import { unitByAgency } from '@/data/idols'

interface JobUnitInputProps {
  disabled?: boolean
  onValueChange?: (value: string) => void
  defaultValue?: string | null
}

const JobUnitInput = ({
  disabled = false,
  onValueChange,
  defaultValue,
}: JobUnitInputProps) => {
  const units = Object.entries(unitByAgency).map(([agency, units]) => ({
    label: agency,
    items: units.map((unit) => ({
      value: unit,
      displayValue: unit,
    })),
  }))

  const none = {
    items: [{ value: 'null', displayValue: 'Free (none)' }],
  }

  return (
    <>
      <h3 className='font-bold '>Unit</h3>
      <SelectDropdown
        valuePlaceholder='Free (none)'
        groups={[none, ...units]}
        disabled={disabled}
        onValueChange={onValueChange}
        defaultValue={defaultValue === null ? 'null' : defaultValue}
      />
    </>
  )
}

export default JobUnitInput
