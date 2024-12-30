import H1 from '@/components/atoms/H1'
import SaveButton from '@/components/atoms/SaveButton'
import SetupStatusCard from '@/components/molecules/SetupStatusCard'
import Link from 'next/link'

type SetupStepsProps = {
  spreadsheetIsSetup: boolean
  StatsAreSetup: boolean
  outfitsAreSetup: boolean
}

const SetupSteps = ({
  spreadsheetIsSetup,
  StatsAreSetup,
  outfitsAreSetup,
}: SetupStepsProps) => {
  const setupCompleted = {
    spreadsheet: {
      title: 'Google Sheets',
      text: 'Spreadsheet ID is set up',
    },
    idols: {
      title: 'Idols Stats',
      text: 'Idols sheet is set up',
    },
    outfits: {
      title: 'Outfits & Patterns',
      text: 'Outfits sheet is set up',
    },
  }

  const setupNotCompleted = {
    spreadsheet: {
      title: 'Google Sheets',
      text: 'Set up your spreadsheet ID',
    },
    idols: {
      title: 'Idols Stats',
      text: 'Add your idols stats',
    },
    outfits: {
      title: 'Outfits & Patterns',
      text: 'Add the outfits you own',
    },
  }

  const getStepStatus = (
    stepName: 'spreadsheet' | 'idols' | 'outfits',
    completed: boolean,
  ) => {
    const status = completed
      ? setupCompleted[stepName]
      : setupNotCompleted[stepName]
    return { ...status, completed }
  }

  return (
    <div className='px-4 py-6 md:px-10 flex-grow h-full max-h-full overflow-auto w-full max-w-4xl mx-auto lg:mx-0'>
      <H1 className='mb-4'>Setup steps</H1>
      <div className='grid gap-4'>
        <Link href='/'>
          <SetupStatusCard
            {...getStepStatus('spreadsheet', spreadsheetIsSetup)}
          />
        </Link>
        <Link href='/idols'>
          <SetupStatusCard {...getStepStatus('idols', StatsAreSetup)} />
        </Link>
        <Link href='/outfits'>
          <SetupStatusCard {...getStepStatus('outfits', outfitsAreSetup)} />
        </Link>
      </div>
      <SaveButton
        className='fixed left-1/2 transform -translate-x-1/2 bottom-8 z-10 lg:hidden'
        disabled={true}
      />
    </div>
  )
}

export default SetupSteps
