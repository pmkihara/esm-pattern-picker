'use client'

import Input from '@/components/atoms/Input'
import IconButton from '@/components/atoms/IconButton'
import SpreadsheetIcon from '@@/public/assets/icons/spreadsheet.svg'
import InfoIcon from '@@/public/assets/icons/info.svg'
import Button from '@/components/atoms/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ErrorMessage from '@/components/atoms/ErrorMessage'
import { useSettings } from '@/providers/SettingsProvider'
import { checkSpreadsheetAccess } from '@/services/actions'
import { useRouter } from 'next/navigation'

const spreadsheetSchema = z.object({
  id: z.string().min(8),
})

type SpreadsheetSchema = z.infer<typeof spreadsheetSchema>

type SpreadsheetFormProps = {
  initialId?: string
}

const SpreadsheetForm = ({ initialId }: SpreadsheetFormProps) => {
  const id = initialId || ''
  const { setSpreadsheetId } = useSettings()
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

    if (!result.ok) {
      setError('id', { message: result.error })
    } else {
      setSpreadsheetId(id)
      router.push(`/dashboard?id=${id}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-10 w-full grid gap-2'>
      <div className='flex gap-1 w-full'>
        <Input
          placeholder='Enter your spreadsheet ID'
          iconSrc={SpreadsheetIcon.src}
          wrapperClassName='grow'
          {...register('id')}
        />
        <IconButton iconSrc={InfoIcon.src} className='grow-0' />
      </div>
      <ErrorMessage message={errors.id?.message} />
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
