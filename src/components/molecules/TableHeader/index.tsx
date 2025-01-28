import { OutfitRow } from '@/components/organisms/OutfitsTable'
import { flexRender, HeaderGroup } from '@tanstack/react-table'
import { twMerge } from 'tailwind-merge'

interface TableHeaderProps {
  headerGroup: HeaderGroup<OutfitRow>
}

const TableHeader = ({ headerGroup }: TableHeaderProps) => {
  return (
    <div className='contents group'>
      {headerGroup.headers.map((header) => (
        <div
          key={header.id}
          className={twMerge(
            'font-bold text-sm text-left',
            'py-1 px-2 flex items-center',
            'bg-grey-100 border-b-2 border-grey-200 ',
            'sticky top-0',
          )}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </div>
      ))}
    </div>
  )
}

export default TableHeader
