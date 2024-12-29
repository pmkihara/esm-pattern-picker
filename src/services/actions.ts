'use server'

import {
  checkDrivePermissions,
  createSheet,
  getRows,
  updateRows,
} from './googleapis'
import { allIdols } from '@/data/idols'
import {
  allAttributes,
  emptyIdolRow,
  IdolAttributesMap,
} from '@/data/attributes'
import {
  AllAttributesMap,
  IdolRow,
  ServiceError,
  ServiceResponse,
} from './services_types'

export const checkSpreadsheetAccess = async (spreadsheetId: string) => {
  return await checkDrivePermissions(spreadsheetId)
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

export const updateIdolsAttributes = async (
  spreadsheetId: string,
  idolsAttrs: IdolAttributesMap,
): Promise<ServiceResponse | ServiceError> => {
  const headers = ['name', ...allAttributes]
  const idolRows = Object.entries(idolsAttrs).map(([name, attrs]) => {
    const attrsArray = allAttributes.map((header) => attrs[header] ?? 0)
    return [name, ...attrsArray]
  })
  return await updateRows(spreadsheetId, 'idols', [headers, ...idolRows])
}
