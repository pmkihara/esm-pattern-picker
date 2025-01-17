import Input from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import { JobInput } from '@/components/organisms/JobForm'
import { allStats, longStats } from '@/data/stats'
import { UseFormRegister } from 'react-hook-form'

interface JobStatsInputsProps {
  register: UseFormRegister<JobInput>
  readOnly?: boolean
}

const JobStatsInputs = ({ register, readOnly }: JobStatsInputsProps) => {
  return (
    <>
      <h3 className='font-bold '>Job stats</h3>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-2 content-center justify-items-center'>
        {allStats.map((stat) => (
          <div key={stat}>
            <Label>{longStats[stat]}</Label>
            <Input
              className='col-span-2'
              readOnly={readOnly}
              {...register(stat, { valueAsNumber: true })}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default JobStatsInputs
