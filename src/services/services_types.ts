import { Stats, StatsMap } from '@/data/stats'
import { Idol } from '@/data/idols'
import { UserOutfit } from '@/data/outfits'

export interface ServiceError {
  ok: false
  error: string
}

export type ServiceResponse<T = object> = T & {
  ok: true
}

export interface SheetRows {
  // Rows must be an array of any type because the data fetched from the sheets
  // is not typed.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[]
}

export interface allStatsMap {
  allStats: StatsMap
}

export interface IdolRow extends Stats {
  name: Idol
}

export interface OutfitsResponse {
  outfits: UserOutfit[]
  newSheet: boolean
}
