import { OfficeJobGroup } from '@/data/office-jobs'
import CalendarIcon from '@@/public/assets/icons/calendar.svg'
import EsIcon from '@@/public/assets/icons/es.svg'
import LightstickIcon from '@@/public/assets/icons/lightstick.svg'
import Image from 'next/image'

interface JobGroupIconProps {
  jobGroup: OfficeJobGroup
  className?: string
}

const JobGroupIcon = ({ jobGroup, className }: JobGroupIconProps) => {
  const icons = {
    [OfficeJobGroup.Primary]: CalendarIcon,
    [OfficeJobGroup.Secondary]: CalendarIcon,
    [OfficeJobGroup.Advanced]: CalendarIcon,
    [OfficeJobGroup.Expert]: CalendarIcon,
    [OfficeJobGroup.Unit]: CalendarIcon,
    [OfficeJobGroup.EsWork]: EsIcon,
    [OfficeJobGroup.Custom]: LightstickIcon,
  }

  return (
    <Image
      src={icons[jobGroup].src}
      alt={jobGroup}
      width={16}
      height={16}
      className={className}
    />
  )
}

export default JobGroupIcon
