'use client'

import OutfitStatus from '@/components/atoms/OutfitStatus'
import StatTag from '@/components/atoms/StatTag'
import ValueCompare from '@/components/atoms/ValueCompare'
import TableHeader from '@/components/molecules/TableHeader'
import TableRow from '@/components/molecules/TableRow'
import { Outfit } from '@/data/outfits'
import { Stat } from '@/data/stats'
import { OutfitContribution, TargetStats } from '@/lib/outfitStat'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo } from 'react'

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
  const selectedIdols = selectedOutfits.map((outfit) => outfit.outfit.idol)

  // Create columns
  const columnHelper = createColumnHelper<OutfitRow>()
  const columns = useMemo(
    () => [
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (cell) => <OutfitStatus status={cell.row.original.status} />,
      }),
      columnHelper.accessor('outfit', { header: 'Outfit' }),
      columnHelper.accessor('totalContribution', {
        header: 'Total',
        cell: (cell) => (
          <ValueCompare
            value={cell.row.original.totalContribution}
            compare={originalOutfit.totalContribution}
          />
        ),
      }),
      ...stats.map((stat) =>
        columnHelper.accessor(stat as Stat, {
          header: () => <StatTag type={stat as Stat} />,
          cell: (cell) => (
            // <div className='text-center'>{cell.row.original[stat as Stat]}</div>
            <ValueCompare
              value={cell.row.original[stat as Stat]}
              compare={originalOutfit.statContributions[stat as Stat]}
            />
          ),
        }),
      ),
    ],
    [
      originalOutfit.statContributions,
      originalOutfit.totalContribution,
      columnHelper,
      stats,
    ],
  )

  const { getHeaderGroups, getRowModel, getRow } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row) => row.outfit,
    initialState: {
      sorting: [
        {
          id: 'totalContribution',
          desc: true,
        },
      ],
    },
  })

  const originalRow = getRow(originalOutfit.outfit.fullName)

  return (
    <div className='grow shrink overflow-auto px-4 lg:px-0'>
      <div className='grid grid-cols-[auto_1fr_auto_auto_auto_auto] min-w-[34rem]'>
        {getHeaderGroups().map((headerGroup) => (
          <TableHeader key={headerGroup.id} headerGroup={headerGroup} />
        ))}
        <TableRow
          row={originalRow}
          isOriginal
          onClick={() => onClick(originalOutfit.outfit.fullName)}
        />
        {getRowModel().rows.map((row) => {
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
