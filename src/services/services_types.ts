import { IdolAttributes, IdolAttributesMap } from '@/data/attributes'
import { Idol } from '@/data/idols'

export type ServiceError = {
  ok: false
  error: string
}

export type ServiceResponse<T = object> = T & {
  ok: true
}

export type SheetRows = {
  // Rows must be an array of any type because the data fetched from the sheets
  // is not typed.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[]
}

export type AllAttributesMap = {
  allAttributes: IdolAttributesMap
  newSheet: boolean
}

export type IdolRow = IdolAttributes & {
  name: Idol
}
