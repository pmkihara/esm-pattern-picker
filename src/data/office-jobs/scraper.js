const mapOutfitValues = (row, headers, group) => {
  const cells = row.cells
  return headers.reduce(
    (obj, header, i) => {
      if (i > 0) {
        // skip the first column (image)
        const value = cells[i].innerText
        if (['Ac', 'Pa', 'Un', 'Sm', 'Te', 'Ch'].includes(header)) {
          obj[header] = Number(value.replace(',', ''))
        } else {
          obj[header] = value
        }
      }
      return obj
    },
    { group },
  )
}

const getTableValues = (table, group) => {
  const headerRow = table.querySelector('thead tr')
  const headers = Array.from(headerRow.cells).map((th) => th.innerText)
  const rows = Array.from(table.querySelectorAll('tbody tr'))
  return rows.map((row) => mapOutfitValues(row, headers, group))
}

const tables = [
  { index: 3, group: 'Primary' },
  { index: 5, group: 'Secondary' },
  { index: 7, group: 'Advanced' },
  { index: 9, group: 'Expert' },
  { index: 11, group: 'Unit' },
  { index: 13, group: 'Unit' },
  { index: 15, group: 'Unit' },
  { index: 17, group: 'Unit' },
  { index: 19, group: 'ES Work' },
]

tables.reduce((acc, table) => {
  const values = getTableValues(
    document.querySelectorAll('table')[table.index],
    table.group,
  )
  const group = acc[table.group] || []
  acc[table.group] = [...group, ...values]
  return acc
}, {})
