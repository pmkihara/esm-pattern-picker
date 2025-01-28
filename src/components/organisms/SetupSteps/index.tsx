import H1 from '@/components/atoms/H1'
import SetupStatusCard from '@/components/molecules/SetupStatusCard'
import Link from 'next/link'
import ContentLayout from '../ContentLayout'

interface SetupStepsProps {
  spreadsheetIsSetup: boolean
  StatsAreSetup: boolean
  outfitsAreSetup: boolean
  officeJobIsSetup: boolean
  spreadsheetId: string
}

const SetupSteps = ({
  spreadsheetIsSetup,
  StatsAreSetup,
  outfitsAreSetup,
  officeJobIsSetup,
  spreadsheetId,
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
    work: {
      title: 'Work',
      text: 'Office job is set up',
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
    work: {
      title: 'Work',
      text: 'Select a job',
    },
  }

  const getStepStatus = (
    stepName: 'spreadsheet' | 'idols' | 'outfits' | 'work',
    completed: boolean,
  ) => {
    const status = completed
      ? setupCompleted[stepName]
      : setupNotCompleted[stepName]
    return { ...status, completed }
  }

  return (
    <ContentLayout>
      <H1 className='mb-4'>Setup steps</H1>
      <div className='grid gap-4 grow shrink md:mb-8'>
        <Link href={`/?id=${spreadsheetId}`}>
          <SetupStatusCard
            {...getStepStatus('spreadsheet', spreadsheetIsSetup)}
          />
        </Link>
        <Link href={`/idols?id=${spreadsheetId}`}>
          <SetupStatusCard {...getStepStatus('idols', StatsAreSetup)} />
        </Link>
        <Link href={`/outfits?id=${spreadsheetId}`}>
          <SetupStatusCard {...getStepStatus('outfits', outfitsAreSetup)} />
        </Link>
        <Link href={`/work?id=${spreadsheetId}`}>
          <SetupStatusCard {...getStepStatus('work', officeJobIsSetup)} />
        </Link>
      </div>
    </ContentLayout>
  )
}

export default SetupSteps
