import {
  advancedJobs,
  emptyJob,
  esJobs,
  expertJobs,
  OfficeJob,
  OfficeJobGroup,
  primaryJobs,
  secondaryJobs,
  unitJobs,
} from '@/data/office-jobs'
import JobGroup from '../JobGroup'
import {
  CommandEmpty,
  CommandInputAsChild,
  CommandMenu,
} from '@/components/atoms/CommandMenu'
import WorkIcon from '@@/public/assets/icons/work.svg'
import Popover from '@/components/atoms/Popover'
import { useState } from 'react'
import Input from '@/components/atoms/Input'

interface JobSearchProps {
  selectedJob?: OfficeJob
  setOfficeJob: (job: OfficeJob) => void
}

const JobSearch = ({ selectedJob, setOfficeJob }: JobSearchProps) => {
  const [open, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const officeJobs: Record<OfficeJobGroup, OfficeJob[]> = {
    [OfficeJobGroup.Primary]: primaryJobs,
    [OfficeJobGroup.Secondary]: secondaryJobs,
    [OfficeJobGroup.Advanced]: advancedJobs,
    [OfficeJobGroup.Expert]: expertJobs,
    [OfficeJobGroup.Unit]: unitJobs,
    [OfficeJobGroup.EsWork]: esJobs,
    [OfficeJobGroup.Custom]: [emptyJob],
  }

  const input = (
    <CommandInputAsChild value={search} onValueChange={setSearch}>
      <Input
        placeholder={selectedJob?.name ?? 'Select job...'}
        iconSrc={WorkIcon.src}
        className={selectedJob && 'placeholder:text-black'}
      />
    </CommandInputAsChild>
  )

  const onJobSelect = (job: OfficeJob) => {
    setOfficeJob(job)
    setIsOpen(false)
    setSearch('')
  }

  return (
    <CommandMenu value={selectedJob?.name}>
      <Popover
        trigger={input}
        contentClassName='w-[var(--radix-popover-trigger-width)] data-[state="closed"]:hidden max-h-[300px] overflow-y-auto'
        forceMount
        open={open}
        onOpenChange={setIsOpen}
      >
        {Object.entries(officeJobs).map(([jobGroup, jobs]) => (
          <JobGroup
            key={jobGroup}
            jobs={jobs}
            jobGroup={jobGroup as OfficeJobGroup}
            selectedJob={selectedJob}
            onJobSelect={onJobSelect}
          />
        ))}
        <CommandEmpty />
      </Popover>
    </CommandMenu>
  )
}

export default JobSearch
