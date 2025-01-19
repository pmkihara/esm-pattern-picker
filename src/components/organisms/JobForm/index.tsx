import SaveButton from '@/components/atoms/SaveButton'
import JobIdolsInputs from '@/components/molecules/JobIdolsInputs'
import JobOutfitInput from '@/components/molecules/JobOutfitInput'
import JobStatsInputs from '@/components/molecules/JobStatsInputs'
import JobUnitInput from '@/components/molecules/JobUnitInput'
import { Unit } from '@/data/idols'
import { OfficeJob, OfficeJobGroup } from '@/data/office-jobs'
import { Outfit } from '@/data/outfits'
import { Stat } from '@/data/stats'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface JobFormProps {
  officeJob: OfficeJob
  onFormSubmit: (job: OfficeJob) => void
  outfits: Outfit[]
}

const jobSchema = z.object({
  group: z.string(),
  name: z.string(),
  unit: z.string().nullable(),
  outfit: z.string().nullable(),
  idols: z.array(z.object({ name: z.string().optional() })),
  [Stat.Active]: z.number(),
  [Stat.Passion]: z.number(),
  [Stat.Unique]: z.number(),
  [Stat.Smart]: z.number(),
  [Stat.Technique]: z.number(),
  [Stat.Charisma]: z.number(),
})

export type JobInput = z.infer<typeof jobSchema>

const JobForm = ({ officeJob, onFormSubmit, outfits }: JobFormProps) => {
  const { idol: jobIdols, ...job } = officeJob
  const isCustomJob = officeJob.group === OfficeJobGroup.Custom
  const rowCls = 'py-4 md:py-8 grid md:grid-cols-form md:gap-8'

  const {
    register,
    handleSubmit,
    control,
    formState: {},
    setValue,
  } = useForm<JobInput>({
    values: {
      ...job,
      idols: jobIdols?.map((idol) => ({ name: idol ?? '' })) || [],
    },
    resolver: zodResolver(jobSchema),
  })

  const onSubmit = (data: JobInput) => {
    const { idols, unit, outfit, group, ...jobAtrrs } = data
    const officeJob: OfficeJob = {
      ...jobAtrrs,
      group: group as OfficeJobGroup,
      idol:
        idols.length === 0
          ? null
          : idols.map((idol) => (idol.name === '' ? undefined : idol.name)),
      unit: unit === 'null' ? null : (unit as Unit),
      outfit: outfit === 'null' ? null : outfit,
    }
    onFormSubmit(officeJob)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grow flex flex-col justify-between'
    >
      <div className='max-w-screen-lg pb-8 grid divide-y divide-grey-100'>
        <div className={rowCls}>
          <JobStatsInputs register={register} readOnly={!isCustomJob} />
        </div>
        <div className={rowCls}>
          <JobUnitInput
            disabled={!isCustomJob}
            onValueChange={(value: string) => setValue('unit', value)}
            defaultValue={job.unit}
          />
        </div>
        <div className={rowCls}>
          <JobIdolsInputs control={control} isCustomJob={isCustomJob} />
        </div>
        <div className={rowCls}>
          <JobOutfitInput
            userOutfits={outfits}
            onValueChange={(value: string) => setValue('outfit', value)}
            defaultValue={job.outfit}
            disabled={!isCustomJob}
          />
        </div>
      </div>
      <SaveButton />
    </form>
  )
}

export default JobForm
