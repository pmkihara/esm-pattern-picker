'use server'

import { checkDrivePermissions, createSheet, getRows } from './googleapis'
import { allIdols, Idol } from '@/data/idols'
import {
  emptyIdolRow,
  IdolAttributes,
  IdolAttributesMap,
} from '@/data/attributes'
import {
  AllAttributesMap,
  ServiceError,
  ServiceResponse,
} from './services_types'

interface IdolRow extends IdolAttributes {
  name: Idol
}

export const initializeIdols = async (
  spreadsheetId: string,
): Promise<ServiceResponse<AllAttributesMap> | ServiceError> => {
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

  // Create a map of all idol attributes
  const allAttributes = allIdols.reduce((acc, idol) => {
    const { name, ...attrs } =
      idolRows.find((row) => row.name === idol) ?? emptyIdolRow(idol)
    acc[name] = attrs
    return acc
  }, {} as IdolAttributesMap)

  return { ok: true, newSheet, allAttributes }
}

export const checkSpreadsheetAccess = async (spreadsheetId: string) => {
  return await checkDrivePermissions(spreadsheetId)
}
