'use client'

import LoadingOverlay from '@/components/atoms/LoadingOverlay'
import SaveButton from '@/components/atoms/SaveButton'
import IdolOutfits from '@/components/molecules/IdolOutfits'
import { allIdols } from '@/data/idols'
import OutfitSearch from '@/components/molecules/OutfitSearch'
import useOutfitsForm from './index.hooks'

const OutfitsForm = () => {
  const {
    outfits,
    spreadsheetId,
    register,
    handleSubmit,
    isSubmitting,
    fieldsByIdolAndGroup,
    onSubmit,
    addFields,
  } = useOutfitsForm()

  if (!outfits || !spreadsheetId) {
    return <LoadingOverlay isLoading={true} />
  }

  return (
    <>
      <OutfitSearch addFields={addFields} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-screen-lg pb-8 divide-y divide-grey-100'>
          {allIdols.map((idol) => (
            <IdolOutfits
              key={idol}
              fields={fieldsByIdolAndGroup[idol]}
              idol={idol}
              register={register}
            />
          ))}
        </div>
        <SaveButton />
      </form>
      <LoadingOverlay isLoading={isSubmitting} />
    </>
  )
}

export default OutfitsForm
