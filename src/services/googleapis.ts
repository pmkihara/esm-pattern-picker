'use server'

import { drive } from '@googleapis/drive'
import { sheets, auth } from '@googleapis/sheets'
import {
  ServiceError,
  SheetNames,
  SheetRows,
  ServiceResponse,
} from './services_types'

const googleAuth = new auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: [
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/spreadsheets',
  ],
})

const googleSheets = sheets({ version: 'v4', auth: googleAuth })
const googleDrive = drive({ version: 'v3', auth: googleAuth })

const errorMessage = (message?: string, status?: number) => {
  if (!message) return 'Unknown error'
  if (status === 404)
    return 'Spreadsheet not found. Check if the ID is correct and if the share settings are correct.'
  switch (message) {
    case 'API key not valid. Please pass a valid API key.':
    case "Method doesn't allow unregistered callers (callers without established identity). Please use API Key or other form of API consumer identity to call this API.":
      console.error(`[${status}] API Error: ${message}`)
      return 'Error setting up the API.'
    case 'The caller does not have permission':
      return 'Spreadsheet must be public.'
    case 'The user does not have sufficient permissions for this file.':
      return 'Editor access missing.'
    default:
      return message
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapValues = (values: any[][]) => {
  // the first row is the header
  const header = values.shift()
  if (!header) return []

  return values.map((row) => {
    return row.reduce((acc, value, index) => {
      acc[header[index]] = value
      return acc
    }, {})
  })
}

export const checkDrivePermissions = async (
  fileId: string,
): Promise<ServiceResponse | ServiceError> => {
  try {
    // The list permissions endpoint will return a 403 error if the spreadsheet
    // was shared with read-only permissions (both with the service account and
    // the global access).
    // If the spreadsheet was not shared with either the service account or the
    // global access, the endpoint will return a 404 error.
    await googleDrive.permissions.list({
      fileId: fileId,
      fields: 'permissions(emailAddress, role)',
    })
    return { ok: true }
  } catch (error) {
    return { ok: false, error: errorMessage(error.message, error.status) }
  }
}

export const getSheetNames = async (
  spreadsheetId: string,
): Promise<ServiceResponse<SheetNames> | ServiceError> => {
  try {
    const response = await googleSheets.spreadsheets.get({ spreadsheetId })
    const sheetNames =
      response.data.sheets?.map((sheet) => sheet.properties?.title || '') || []
    return { ok: true, sheetNames }
  } catch (error) {
    return { ok: false, error: errorMessage(error.message, error.status) }
  }
}

export const createSheet = async (
  spreadsheetId: string,
  sheetName: string,
): Promise<ServiceResponse | ServiceError> => {
  try {
    await googleSheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: sheetName } } }],
        includeSpreadsheetInResponse: false,
      },
    })
    return { ok: true }
  } catch (error) {
    return { ok: false, error: errorMessage(error.message, error.status) }
  }
}

export const getRows = async (
  spreadsheetId: string,
  sheetName: string,
): Promise<ServiceResponse<SheetRows> | ServiceError> => {
  try {
    const response = await googleSheets.spreadsheets.values.get({
      spreadsheetId,
      range: sheetName,
      valueRenderOption: 'UNFORMATTED_VALUE',
    })
    const rows = mapValues(response.data.values || [])
    return { ok: true, rows }
  } catch (error) {
    console.log(error.errors)
    return { ok: false, error: errorMessage(error.message, error.status) }
  }
}
