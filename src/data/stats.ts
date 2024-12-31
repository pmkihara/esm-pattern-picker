import { Idol } from './idols'

export enum Stat {
  Active = 'Ac',
  Passion = 'Pa',
  Unique = 'Un',
  Smart = 'Sm',
  Technique = 'Te',
  Charisma = 'Ch',
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

export const longStats = {
  [Stat.Active]: 'Active',
  [Stat.Passion]: 'Passion',
  [Stat.Unique]: 'Unique',
  [Stat.Smart]: 'Smart',
  [Stat.Technique]: 'Technique',
  [Stat.Charisma]: 'Charisma',
}
