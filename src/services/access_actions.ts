'use server'

import { cache } from 'react'
import { checkDrivePermissions } from './googleapis'

export const checkSpreadsheetAccess = cache(async (spreadsheetId: string) => {
  console.log('checking spreadsheet access')

  return await checkDrivePermissions(spreadsheetId)
})
