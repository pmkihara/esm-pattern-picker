import { Idol } from './idols'

export enum Stat {
  Active = 'active',
  Passion = 'passion',
  Unique = 'unique',
  Smart = 'smart',
  Technique = 'technique',
  Charisma = 'charisma',
}

export type StatsMap = Record<Idol, Stats>

export type Stats = Record<Stat, number>

export const allStats = Object.values(Stat)

export const emptyStats = {
  [Stat.Active]: 0,
  [Stat.Passion]: 0,
  [Stat.Unique]: 0,
  [Stat.Smart]: 0,
  [Stat.Technique]: 0,
  [Stat.Charisma]: 0,
}

export const emptyIdolRow = (name: Idol) => {
  return { name, ...emptyStats }
}
