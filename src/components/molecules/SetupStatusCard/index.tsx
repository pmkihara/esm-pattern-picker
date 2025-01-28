import StatusIcon from '@/components/atoms/StatusIcon'
import { twMerge } from 'tailwind-merge'

interface SetupStatusCardProps {
  completed: boolean
  title: string
  text: string
}

const SetupStatusCard = ({ completed, title, text }: SetupStatusCardProps) => {
  return (
    <div
      className={twMerge(
        'flex gap-6 items-center w-full h-full p-4 border-2 rounded-lg',
        'hover:ring-2',
        completed
          ? 'border-sky-300 hover:ring-sky-300'
          : 'border-sun-300 hover:ring-sun-300',
      )}
    >
      <StatusIcon completed={completed} />
      <div>
        <p className='text-base font-bold mb-1'>{title}</p>
        <p className='text-sm text-gray-500'>{text}</p>
      </div>
    </div>
  )
}

export default SetupStatusCard
