import { OfficeJobGroup } from '@/data/office-jobs'
import CalendarIcon from '@@/public/assets/icons/calendar.svg'
import EsIcon from '@@/public/assets/icons/es.svg'
import LightstickIcon from '@@/public/assets/icons/lightstick.svg'
import WorkIcon from '@@/public/assets/icons/work.svg'

export const useJobGroupImages = () => {
  return {
    [OfficeJobGroup.Primary]: CalendarIcon,
    [OfficeJobGroup.Secondary]: CalendarIcon,
    [OfficeJobGroup.Advanced]: CalendarIcon,
    [OfficeJobGroup.Expert]: CalendarIcon,
    [OfficeJobGroup.Unit]: CalendarIcon,
    [OfficeJobGroup.EsWork]: EsIcon,
    [OfficeJobGroup.Custom]: LightstickIcon,
    none: WorkIcon,
  }
}
