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
  const { selectedIdols, headerGroups, visibleRows, originalRow, onScroll } =
    useOutfitsTable({
      data,
      selectedOutfits,
      originalOutfit,
      stats,
    })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Use useEffect to reset scroll position when originalOutfit changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [originalOutfit])

  return (
    <div
      className='grow shrink overflow-auto px-4 lg:px-0'
      onScroll={onScroll}
      ref={scrollContainerRef}
    >
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
    </div>
  )
}

export default OutfitsTable
