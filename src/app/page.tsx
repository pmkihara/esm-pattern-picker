import Card from '@/components/atoms/Card'
import Image from 'next/image'
import LogoBig from '@@/public/assets/logo-big.png'
import SpreadsheetForm from '@/components/organisms/SpreadsheetForm'

export default function Home() {
  return (
    <div className='bg-sparkles bg-sky-200 h-screen max-h-screen overflow-auto bg-no-repeat bg-right-bottom flex items-center justify-center px-6'>
      <Card className='flex flex-col items-center w-full sm:w-[420px] py-14'>
        <Image src={LogoBig} alt='Logo' width={207} height={239} />
        <SpreadsheetForm />
      </Card>
    </div>
  )
}
