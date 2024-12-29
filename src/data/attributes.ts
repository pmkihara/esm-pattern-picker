import { Idol } from './idols'

export enum IdolAttribute {
  Active = 'active',
  Passion = 'passion',
  Unique = 'unique',
  Smart = 'smart',
  Technique = 'technique',
  Charisma = 'charisma',
}

export type IdolAttributesMap = Record<Idol, IdolAttributes>

export type IdolAttributes = Record<IdolAttribute, number>

export const allAttributes = Object.values(IdolAttribute)

export const emptyAttrs = {
  [IdolAttribute.Active]: 0,
  [IdolAttribute.Passion]: 0,
  [IdolAttribute.Unique]: 0,
  [IdolAttribute.Smart]: 0,
  [IdolAttribute.Technique]: 0,
  [IdolAttribute.Charisma]: 0,
}

export const emptyIdolRow = (name: Idol) => {
  return { name, ...emptyAttrs }
}
