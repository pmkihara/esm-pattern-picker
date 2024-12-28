'use server'

import { getRows } from './googleapis'
import { allIdols, Idol } from '@/data/idols'
import { emptyAttrs, IdolAttributes } from '@/data/attributes'

interface IdolRow extends IdolAttributes {
  name: Idol
}

export const initializeIdols = async (spreadsheetId: string) => {
  const idolRows = await getIdols(spreadsheetId)
  return allIdols.reduce((acc: { [key: string]: IdolAttributes }, idol) => {
    const row = idolRows.find((row) => row.name === idol)
    if (row) {
      const { name, ...attrs } = row
      acc[name] = attrs
    } else {
      acc[idol] = emptyAttrs
    }
    return acc
  }, {})
}

export const getIdols = async (spreadsheetId: string) => {
  const idolRows = await getRows(spreadsheetId, 'idols')
  if (!idolRows.rows) return []
  const rows = idolRows.rows as IdolRow[]

  return rows
}
