export const ACTIVE = 'active'
export const PASSION = 'passion'
export const UNIQUE = 'unique'
export const SMART = 'smart'
export const TECHNIQUE = 'technique'
export const CHARISMA = 'charisma'

export enum IdolAttribute {
  Active = ACTIVE,
  Passion = PASSION,
  Unique = UNIQUE,
  Smart = SMART,
  Technique = TECHNIQUE,
  Charisma = CHARISMA,
}

export type IdolAttributes = Record<IdolAttribute, number>

export const emptyAttrs = {
  [IdolAttribute.Active]: 0,
  [IdolAttribute.Passion]: 0,
  [IdolAttribute.Unique]: 0,
  [IdolAttribute.Smart]: 0,
  [IdolAttribute.Technique]: 0,
  [IdolAttribute.Charisma]: 0,
}
