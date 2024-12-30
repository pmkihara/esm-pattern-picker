'use server'

import {
  checkDrivePermissions,
  createSheet,
  getRows,
  updateRows,
} from './googleapis'
import { allIdols } from '@/data/idols'
import { allStats, emptyIdolRow, StatsMap } from '@/data/stats'
import {
  allStatsMap,
  IdolRow,
  ServiceError,
  ServiceResponse,
} from './services_types'

export const checkSpreadsheetAccess = async (spreadsheetId: string) => {
  return await checkDrivePermissions(spreadsheetId)
}

export const initializeIdols = async (
  spreadsheetId: string,
): Promise<ServiceResponse<allStatsMap> | ServiceError> => {
  const response = await getRows(spreadsheetId, 'idols')
  let newSheet = false

  if (!response.ok && response.error === 'Unable to parse range: idols') {
    // Create the idols sheet if the sheet does not exist
    const createResponse = await createSheet(spreadsheetId, 'idols')
    if (!createResponse.ok) return createResponse
    newSheet = true
  } else if (!response.ok) {
    // Handle any other errors
    return response
  }

  const idolRows = response.ok ? (response.rows as IdolRow[]) : []
  newSheet = newSheet || idolRows.length === 0

  // Create a map of all idol stats
  const allStats = allIdols.reduce((acc, idol) => {
    const { name, ...stats } =
      idolRows.find((row) => row.name === idol) ?? emptyIdolRow(idol)
    acc[name] = stats
    return acc
  }, {} as StatsMap)

  return { ok: true, newSheet, allStats }
}

export const updateIdolsStats = async (
  spreadsheetId: string,
  idolsStats: StatsMap,
): Promise<ServiceResponse | ServiceError> => {
  const headers = ['name', ...allStats]
  const idolRows = Object.entries(idolsStats).map(([name, stats]) => {
    const statsArray = allStats.map((header) => stats[header] ?? 0)
    return [name, ...statsArray]
  })
  return await updateRows(spreadsheetId, 'idols', [headers, ...idolRows])
}
