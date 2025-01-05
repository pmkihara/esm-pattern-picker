'use server'

import { cache } from 'react'
import { checkDrivePermissions } from './googleapis'

export const checkSpreadsheetAccess = cache(async (spreadsheetId: string) => {
  return await checkDrivePermissions(spreadsheetId)
})
