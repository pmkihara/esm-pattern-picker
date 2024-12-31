'use server'

import { checkDrivePermissions } from './googleapis'

export const checkSpreadsheetAccess = async (spreadsheetId: string) => {
  console.log('checking spreadsheet access')

  return await checkDrivePermissions(spreadsheetId)
}
