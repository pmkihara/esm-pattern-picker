import OutfitStatus from '@/components/atoms/OutfitStatus'
import StatTag from '@/components/atoms/StatTag'
import ValueCompare from '@/components/atoms/ValueCompare'
import { Outfit } from '@/data/outfits'
import { Stat } from '@/data/stats'
import { OutfitContribution, TargetStats } from '@/lib/outfitStat'
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  HeaderGroup,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { useCallback, useEffect, useMemo, useState } from 'react'

export interface OutfitRow extends TargetStats {
  status: 'crafted' | 'owned' | 'not owned'
  outfit: string
  totalContribution: number
  idol: string
}

interface HookResult {
  selectedIdols: string[]
  headerGroups: HeaderGroup<OutfitRow>[]
  visibleRows: Row<OutfitRow>[]
  originalRow: Row<OutfitRow>
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void
}

interface HookArgs {
  data: OutfitRow[]
  selectedOutfits: OutfitContribution[]
  originalOutfit: OutfitContribution
  stats: string[]
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

const PAGE_SIZE = 20

const useOutfitsTable = ({
  data,
  selectedOutfits,
  originalOutfit,
  stats,
}: HookArgs): HookResult => {
  const [visibleRows, setVisibleRows] = useState<Row<OutfitRow>[]>([])

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
  const headerGroups = getHeaderGroups()
  const { rows } = getRowModel()

  const onBottomReached = useCallback(() => {
    // return if last page
    if (visibleRows.length === rows.length) return

    setVisibleRows((prev) => {
      return rows.slice(0, prev.length + PAGE_SIZE)
    })
  }, [rows, visibleRows.length])

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop
    if (bottom === e.currentTarget.clientHeight) {
      onBottomReached()
    }
  }

  useEffect(() => {
    setVisibleRows(rows.slice(0, PAGE_SIZE))
  }, [rows, originalOutfit])

  return { selectedIdols, headerGroups, visibleRows, originalRow, onScroll }
}

export default useOutfitsTable
