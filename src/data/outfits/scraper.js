const nameRegex = /(?<outfit>.+)（(?<idol>[^（]+)）$/

const mapOutfitValues = (row, headers, group) => {
  const cells = row.cells
  return headers.reduce(
    (obj, header, i) => {
      const value = cells[i].innerText
      if (value) {
        if (['Ac', 'Pa', 'Un', 'Sm', 'Te', 'Ch'].includes(header)) {
          obj[header] = Number(value)
        } else {
          const {
            groups: { outfit, idol },
          } = value.match(nameRegex)
          obj.idol = idol
          obj.name = outfit
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

const startIndex = 3
const endIndex = 6
const tableIndexes = Array.from({ length: endIndex - startIndex + 1 }).map(
  (_, i) => i + startIndex,
)

tableIndexes.reduce((acc, index) => {
  const values = getTableValues(
    document.querySelectorAll('table')[index],
    'collab',
  )
  return [...acc, ...values]
}, [])
