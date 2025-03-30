'use client'

import TableHeader from '@/components/molecules/TableHeader'
import TableRow from '@/components/molecules/TableRow'
import { Outfit } from '@/data/outfits'
import { OutfitContribution, TargetStats } from '@/lib/outfitStat'
import useOutfitsTable from './index.hooks'
import { useEffect, useRef } from 'react'

interface OutfitsTableProps {
  data: OutfitRow[]
  stats: string[]
  activeOutfit: OutfitContribution
  originalOutfit: OutfitContribution
  selectedOutfits: OutfitContribution[]
  onClick: (outfitName: string) => void
}

export interface OutfitRow extends TargetStats {
  status: 'crafted' | 'owned' | 'not owned'
  outfit: string
  totalContribution: number
  idol: string
}

const outfitType = (outfit: Outfit) => {
  if ('crafted' in outfit) {
    return outfit.crafted ? 'crafted' : 'owned'
  }
  return 'not owned'
}

export const outfitsTableData = (
  outfitContributions: OutfitContribution[],
): OutfitRow[] => {
  return outfitContributions.map(
    ({ outfit, totalContribution, statContributions }) => ({
      status: outfitType(outfit),
      outfit: outfit.fullName,
      totalContribution,
      idol: outfit.idol,
      ...statContributions,
    }),
  )
}

const OutfitsTable = ({
  data,
  stats,
  activeOutfit,
  originalOutfit,
  selectedOutfits,
  onClick,
}: OutfitsTableProps) => {
  const {
    selectedIdols,
    headerGroups,
    visibleRows,
    originalRow,
    onBottomReached,
  } = useOutfitsTable({
    data,
    selectedOutfits,
    originalOutfit,
    stats,
  })

  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current

    if (!sentinel) return

    const scrollableContainer = sentinel?.parentElement

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onBottomReached()
        }
      },
      { threshold: 1.0, root: scrollableContainer },
    )
    observer.observe(sentinel)

    return () => {
      if (!sentinel) return

      observer.unobserve(sentinel)
      observer.disconnect()
    }
  }, [originalOutfit, onBottomReached])

  return (
    <div className='grow shrink overflow-auto px-4 lg:px-0 pb-1'>
      <div className='grid grid-cols-[auto_1fr_auto_auto_auto_auto] min-w-[34rem]'>
        {headerGroups.map((headerGroup) => (
          <TableHeader key={headerGroup.id} headerGroup={headerGroup} />
        ))}
        <TableRow
          row={originalRow}
          isOriginal
          onClick={() => onClick(originalOutfit.outfit.fullName)}
        />
        {visibleRows.map((row) => {
          if (
            row.original.outfit === originalOutfit.outfit.fullName ||
            (row.original.idol !== originalOutfit.outfit.idol &&
              selectedIdols.includes(row.original.idol))
          )
            return

          return (
            <TableRow
              key={row.id}
              row={row}
              onClick={() => onClick(row.original.outfit)}
              isActive={row.original.outfit === activeOutfit.outfit.fullName}
            />
          )
        })}
      </div>
      <div ref={sentinelRef} className='h-px' />
    </div>
  )
}

export default OutfitsTable
