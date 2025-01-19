'use client'

import Input from '@/components/atoms/Input'
import SpreadsheetIcon from '@@/public/assets/icons/spreadsheet.svg'
import InfoIcon from '@@/public/assets/icons/info.svg'
import Button from '@/components/atoms/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { checkSpreadsheetAccess } from '@/services/access_actions'
import { useRouter } from 'next/navigation'
import SvgImage from '@/components/atoms/SvgImage'

const spreadsheetSchema = z.object({
  id: z.string().min(8),
})

type SpreadsheetSchema = z.infer<typeof spreadsheetSchema>

interface SpreadsheetFormProps {
  initialId?: string
}

const SpreadsheetForm = ({ initialId }: SpreadsheetFormProps) => {
  const id = initialId || ''
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SpreadsheetSchema>({
    resolver: zodResolver(spreadsheetSchema),
    values: { id },
  })

  const onSubmit = async ({ id }: SpreadsheetSchema) => {
    const result = await checkSpreadsheetAccess(id)

    if (result.ok) {
      router.push(`/dashboard?id=${id}`)
    } else {
      setError('id', { message: result.error })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-10 w-full grid gap-2'>
      <div className='flex gap-1 w-full'>
        <Input
          placeholder='Enter your spreadsheet ID'
          iconSrc={SpreadsheetIcon.src}
          wrapperClassName='grow'
          errorMsg={errors.id?.message}
          {...register('id')}
        />
        <Button size='icon' variant='fakeInput' className='group'>
          <SvgImage
            src={InfoIcon.src}
            width='24'
            height='24'
            className={
              'group-focus:fill-sky-400 fill-grey-400 group-hover:fill-sky-400'
            }
          />
        </Button>
      </div>
      <Button
        type='submit'
        className='w-full'
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        Start
      </Button>
    </form>
  )
}

export default SpreadsheetForm
