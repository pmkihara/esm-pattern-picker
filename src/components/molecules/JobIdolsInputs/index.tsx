import Button from '@/components/atoms/Button'
import JobIdolInput from '@/components/atoms/JobIdolInput'
import { JobInput } from '@/components/organisms/JobForm'
import { Idol } from '@/data/idols'
import { Control, useFieldArray } from 'react-hook-form'

export interface JobIdolsInputsProps {
  control: Control<JobInput>
  isCustomJob?: boolean
}

const JobIdolsInputs = ({ control, isCustomJob }: JobIdolsInputsProps) => {
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'idols',
  })

  return (
    <>
      <div>
        <h3 className='font-bold '>Job idols</h3>
        <p className='mb-2 text-sm text-grey-500'>
          (Leave it empty if you choose a specific unit)
        </p>
      </div>
      <div className='flex gap-2 sm:gap-4'>
        {fields.map((field, index) => (
          <JobIdolInput
            idol={field.name as Idol | undefined}
            key={field.id}
            onRemove={() => remove(index)}
            onIdolSelect={(idol) => {
              update(index, { name: idol })
            }}
            isCustomJob={isCustomJob}
          />
        ))}
        {isCustomJob && fields.length < 5 && (
          <Button
            onClick={() => append({ name: '' })}
            variant='outline'
            size='sm'
          >
            Add
          </Button>
        )}
      </div>
    </>
  )
}

export default JobIdolsInputs
