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
  CommandItem,
  CommandMenu,
} from '@/components/atoms/CommandMenu'
import Popover from '@/components/atoms/Popover'
import { useState } from 'react'
import Input from '@/components/atoms/Input'
import LightstickIcon from '@@/public/assets/icons/lightstick.svg'
import Image from 'next/image'
import { useJobGroupImages } from '@/hooks/useJobGroupImages'
import Button from '@/components/atoms/Button'
import SvgImage from '@/components/atoms/SvgImage'
import { twMerge } from 'tailwind-merge'

interface JobSearchProps {
  selectedJob?: OfficeJob
  setOfficeJob: (job: OfficeJob) => void
}

const JobSearch = ({ selectedJob, setOfficeJob }: JobSearchProps) => {
  const [open, setIsOpen] = useState(false)
  const groupIcons = useJobGroupImages()

  const officeJobs: Partial<Record<OfficeJobGroup, OfficeJob[]>> = {
    [OfficeJobGroup.Primary]: primaryJobs,
    [OfficeJobGroup.Secondary]: secondaryJobs,
    [OfficeJobGroup.Advanced]: advancedJobs,
    [OfficeJobGroup.Expert]: expertJobs,
    [OfficeJobGroup.Unit]: unitJobs,
    [OfficeJobGroup.EsWork]: esJobs,
  }

  const popoverTrigger = (
    <div className='w-full max-w-screen-lg group/trigger data-[state="open"]:mb-[37px]'>
      <Button
        variant='fakeInput'
        size='input'
        className='w-full group-data-[state="open"]/trigger:hidden group flex items-center gap-2 px-3'
      >
        <SvgImage
          src={groupIcons[selectedJob?.group ?? 'none'].src}
          width='16'
          height='16'
          className={'group-focus:fill-sky-400 fill-grey-300 -ml-px'}
        />
        <span
          className={twMerge('ml-px', selectedJob && 'text-black font-normal')}
        >
          {selectedJob?.name ?? 'Select job...'}
        </span>
      </Button>
    </div>
  )

  const input = (
    <CommandInputAsChild>
      <Input
        placeholder={selectedJob?.name ?? 'Select job...'}
        iconSrc={groupIcons.none.src}
        className={selectedJob && 'placeholder:text-black'}
        id='job-search'
        autoFocus
        popoverSearch
      />
    </CommandInputAsChild>
  )

  const onJobSelect = (job: OfficeJob) => {
    setOfficeJob(job)
    setIsOpen(false)
  }

  return (
    <Popover
      trigger={popoverTrigger}
      contentClassName='w-[var(--radix-popover-trigger-width)] -my-px'
      open={open}
      onOpenChange={setIsOpen}
    >
      <CommandMenu value={selectedJob?.name} className='pt-0' input={input}>
        {Object.entries(officeJobs).map(([jobGroup, jobs]) => (
          <JobGroup
            key={jobGroup}
            jobs={jobs}
            jobGroup={jobGroup as OfficeJobGroup}
            selectedJob={selectedJob}
            onJobSelect={onJobSelect}
          />
        ))}
        <CommandItem
          value={emptyJob.name}
          className='text-xs'
          onSelect={() => onJobSelect(emptyJob)}
        >
          <div className='flex gap-2 items-center'>
            <Image
              src={LightstickIcon.src}
              alt='custom'
              width={16}
              height={16}
            />
            <p className='text-sm'>{emptyJob.name}</p>
          </div>
        </CommandItem>
        <CommandEmpty />
      </CommandMenu>
    </Popover>
  )
}

export default JobSearch
