import {
  advancedJobs,
  esJobs,
  expertJobs,
  OfficeJob,
  OfficeJobGroup,
  primaryJobs,
  secondaryJobs,
  unitJobs,
} from '@/data/office-jobs'
import JobGroup from '../JobGroup'
import { CommandInput, CommandMenu } from '@/components/atoms/CommandMenu'
import WorkIcon from '@@/public/assets/icons/work.svg'

const JobSearch = () => {
  const officeJobs: Record<OfficeJobGroup, OfficeJob[]> = {
    [OfficeJobGroup.Primary]: primaryJobs,
    [OfficeJobGroup.Secondary]: secondaryJobs,
    [OfficeJobGroup.Advanced]: advancedJobs,
    [OfficeJobGroup.Expert]: expertJobs,
    [OfficeJobGroup.Unit]: unitJobs,
    [OfficeJobGroup.EsWork]: esJobs,
  }

  const input = (
    <CommandInput
      placeholder='Select job...'
      iconSrc={WorkIcon.src}
      wrapperClassName='w-full max-w-screen-lg'
    />
  )
  return (
    <CommandMenu input={input}>
      {Object.entries(officeJobs).map(([jobGroup, jobs]) => (
        <JobGroup
          key={jobGroup}
          jobs={jobs}
          jobGroup={jobGroup as OfficeJobGroup}
        />
      ))}
    </CommandMenu>
  )
}

export default JobSearch
