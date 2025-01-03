'use server'

import {
  outfitKeys,
  startOutfits,
  startPatterns,
  UserOutfit,
} from '@/data/outfits'
import {
  OutfitsResponse,
  ServiceError,
  ServiceResponse,
} from './services_types'
import { createSheet, getRows, updateRows } from './googleapis'

const newOutfitSheet = (): UserOutfit[] => {
  const startUserOutfits = startOutfits.map((outfit) => ({
    ...outfit,
    crafted: true,
  }))
  const startUserPatterns = startPatterns.map((outfit) => ({
    ...outfit,
    crafted: false,
  }))
  return [...startUserOutfits, ...startUserPatterns]
}

export const checkOutfitsSheet = async (
  spreadsheetId: string,
): Promise<{ ok: boolean }> => {
  console.log('checking outfits sheet')

  const response = await getRows(spreadsheetId, 'outfits')
  const hasRows = response.ok && response.rows.length > 0
  return { ok: hasRows }
}

export const initializeOutfits = async (
  spreadsheetId: string,
): Promise<ServiceResponse<OutfitsResponse> | ServiceError> => {
  let newSheet = false
  const response = await getRows(spreadsheetId, 'outfits')

  if (!response.ok && response.error === 'Unable to parse range: outfits') {
    // Create the outfits sheet if the sheet does not exist
    const createResponse = await createSheet(spreadsheetId, 'outfits')
    if (!createResponse.ok) return createResponse
    newSheet = true
  } else if (!response.ok) {
    // Handle any other errors
    return response
  }

  const outfitRows = response.ok ? (response.rows as UserOutfit[]) : []
  newSheet = newSheet || outfitRows.length === 0

  // Map all outfits
  const outfits = newSheet ? newOutfitSheet() : outfitRows

  return { ok: true, newSheet: true, outfits }
}

export const updateOutfits = async (
  spreadsheetId: string,
  outfits: UserOutfit[],
): Promise<ServiceResponse | ServiceError> => {
  if (outfits.length === 0) return { ok: true }

  const headers = outfitKeys
  const outfitRows = outfits.map((outfit) =>
    headers.map((header) => outfit[header]),
  )
  return await updateRows(spreadsheetId, 'outfits', [headers, ...outfitRows])
}
