import Button from '@/components/atoms/Button'
import JobIdolInput from '@/components/atoms/JobIdolInput'
import { JobInput } from '@/components/organisms/JobForm'
import { Idol } from '@/data/idols'
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  UseFormRegister,
} from 'react-hook-form'

interface JobIdolsInputsProps {
  register: UseFormRegister<JobInput>
  fields: FieldArrayWithId<JobInput, 'idols', 'id'>[]
  append: UseFieldArrayAppend<JobInput, 'idols'>
  remove: UseFieldArrayRemove
  update: UseFieldArrayUpdate<JobInput>
  isCustomJob?: boolean
}

const JobIdolsInputs = ({
  register,
  fields,
  append,
  remove,
  update,
  isCustomJob,
}: JobIdolsInputsProps) => {
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
            {...register(`idols.${index}.name` as const)}
          />
        ))}
        {isCustomJob && fields.length < 5 && (
          <Button
            onClick={() => append({ name: undefined })}
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
