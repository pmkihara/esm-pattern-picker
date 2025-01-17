'use client'

import Collapsible from '@/components/atoms/Collapsible'
import { CommandGroup, CommandItem } from '@/components/atoms/CommandMenu'
import { OfficeJob, OfficeJobGroup } from '@/data/office-jobs'
import CalendarIcon from '@@/public/assets/icons/calendar.svg'
import EsIcon from '@@/public/assets/icons/es.svg'
import LightstickIcon from '@@/public/assets/icons/lightstick.svg'
import Image from 'next/image'
import { groupBy } from 'lodash'
import { Unit } from '@/data/idols'
import { useCommandState } from 'cmdk'

interface JobGroupProps {
  jobs: OfficeJob[]
  jobGroup: OfficeJobGroup
  selectedJob?: OfficeJob
  onJobSelect: (job: OfficeJob) => void
}

const JobGroup = ({
  jobs,
  jobGroup,
  selectedJob,
  onJobSelect,
}: JobGroupProps) => {
  const search = useCommandState((state) => state.search)

  const icons = {
    [OfficeJobGroup.Primary]: CalendarIcon,
    [OfficeJobGroup.Secondary]: CalendarIcon,
    [OfficeJobGroup.Advanced]: CalendarIcon,
    [OfficeJobGroup.Expert]: CalendarIcon,
    [OfficeJobGroup.Unit]: CalendarIcon,
    [OfficeJobGroup.EsWork]: EsIcon,
    [OfficeJobGroup.Custom]: LightstickIcon,
  }

  const triggerContent = (
    <div className='flex items-center gap-2'>
      <Image src={icons[jobGroup].src} alt={jobGroup} width={16} height={16} />
      <p className='text-sm'>{jobGroup}</p>
    </div>
  )

  const mapJobs = (job: OfficeJob) => (
    <CommandItem
      key={job.name}
      value={job.name}
      className='text-xs'
      onSelect={() => onJobSelect(job)}
    >
      {job.name}
    </CommandItem>
  )

  const groupedByUnit = () => {
    const groupedJobs = groupBy(jobs, 'unit')
    return Object.values(Unit).map((unit) => {
      const unitJobs = groupedJobs[unit]
      return (
        <Collapsible
          key={unit}
          triggerProps={{
            arrowPosition: 'right',
            children: unit,
            className: 'text-sm',
          }}
          defaultOpen={
            !!search ||
            (selectedJob?.group === jobGroup && selectedJob?.unit === unit)
          }
          rootClassName='group/sub'
          contentClassName='border-l-2 border-grey-100 ml-[15px] pl-2 mb-1 group-data-[state="closed"]/sub:hidden'
          contentProps={{ forceMount: true }}
        >
          {unitJobs.map(mapJobs)}
        </Collapsible>
      )
    })
  }

  return (
    <CommandGroup
      className='[&_[cmdk-group-heading]]:hidden'
      aria-label={jobGroup}
    >
      <Collapsible
        triggerProps={{ arrowPosition: 'right', children: triggerContent }}
        defaultOpen={!!search || selectedJob?.group === jobGroup}
        rootClassName='group/item'
        contentClassName='border-l-2 border-grey-100 ml-[15px] pl-2 mb-1 group-data-[state="closed"]/item:hidden'
        contentProps={{ forceMount: true }}
      >
        {jobGroup === OfficeJobGroup.Unit && !search ? (
          <>{groupedByUnit()}</>
        ) : (
          <>{jobs.map(mapJobs)}</>
        )}
      </Collapsible>
    </CommandGroup>
  )
}

export default JobGroup
