import { OutfitRow } from '@/components/organisms/OutfitsTable'
import { flexRender, Row } from '@tanstack/react-table'
import { twMerge } from 'tailwind-merge'

interface TableRowProps {
  row: Row<OutfitRow>
  isOriginal?: boolean
  isActive?: boolean
  onClick: () => void
}

const TableRow = ({
  row,
  isOriginal = false,
  isActive = false,
  onClick,
}: TableRowProps) => {
  return (
    <div className='contents group' onClick={onClick}>
      {row.getVisibleCells().map((cell) => (
        <div
          key={cell.id}
          className={twMerge(
            'py-1 px-2 overflow-hidden text-nowrap truncate text-sm border-b border-grey-100',
            isOriginal && 'bg-sky-50 font-semibold',
            isActive ? 'bg-sky-300' : 'group-hover:bg-grey-50',
          )}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </div>
  )
}

export default TableRow
