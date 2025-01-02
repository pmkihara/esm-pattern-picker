'use server'

import {
  OutfitsByIdol,
  OutfitsMap,
  startOutfits,
  startPatterns,
  UserOutfit,
} from '@/data/outfits'
import {
  OutfitsResponse,
  ServiceError,
  ServiceResponse,
} from './services_types'
import { createSheet, getRows } from './googleapis'
import { allIdols } from '@/data/idols'
import { groupBy } from 'lodash'

const indexOutfit = (
  { name, idol, ...attrs }: UserOutfit,
  allOutfits: OutfitsMap,
): void => {
  const id = `${name} (${idol})`
  allOutfits[id] = { ...attrs, name, idol }
}

const newOutfitSheet = (): OutfitsMap => {
  const allOutfits: OutfitsMap = {}
  startOutfits.forEach((outfit) => {
    indexOutfit({ ...outfit, crafted: true }, allOutfits)
  })
  startPatterns.forEach((outfit) => {
    indexOutfit({ ...outfit, crafted: false }, allOutfits)
  })
  return allOutfits
}

const existingOutfitSheet = (outfitRows: UserOutfit[]): OutfitsMap => {
  const allOutfits: OutfitsMap = {}
  outfitRows.forEach((outfit) => {
    indexOutfit(outfit, allOutfits)
  })
  return allOutfits
}

export const checkOutfitsSheet = async (
  spreadsheetId: string,
): Promise<{ ok: boolean }> => {
  console.log('checking outfits sheet')

  const response = await getRows(spreadsheetId, 'outfits')
  const hasRows = response.ok && response.rows.length > 0
  return { ok: hasRows }
}

export const groupByIdol = async (
  outfitsMap: OutfitsMap,
): Promise<OutfitsByIdol> => {
  const outfits = Object.values(outfitsMap)
  return allIdols.reduce((acc, idol) => {
    const idolOutfits = outfits.filter((outfit) => outfit.idol === idol)
    const outfitsByGroup = groupBy(idolOutfits, 'group')

    acc[idol] = outfitsByGroup
    return acc
  }, {} as OutfitsByIdol)
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
  const outfits = newSheet ? newOutfitSheet() : existingOutfitSheet(outfitRows)

  return { ok: true, newSheet: true, outfits }
}
