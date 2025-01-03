import { Stat, Stats } from './stats'

export type OutfitGroup = 'general' | 'event' | 'private' | 'collab'

export interface Outfit extends Stats {
  group: OutfitGroup
  idol: string
  name: string
  fullName: string
}

export interface UserOutfit extends Outfit {
  crafted: boolean
}

export type OutfitKey = keyof UserOutfit

export const outfitKeys: OutfitKey[] = [
  'fullName',
  'name',
  'idol',
  'group',
  Stat.Active,
  Stat.Passion,
  Stat.Unique,
  Stat.Smart,
  Stat.Technique,
  Stat.Charisma,
  'crafted',
]

export const outfitGroups: OutfitGroup[] = [
  'general',
  'event',
  'private',
  'collab',
]

export const startOutfits: Outfit[] = [
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Eichi',
    name: 'fine Training Uniform',
    fullName: 'fine Training Uniform (Eichi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Wataru',
    name: 'fine Training Uniform',
    fullName: 'fine Training Uniform (Wataru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Tori',
    name: 'fine Training Uniform',
    fullName: 'fine Training Uniform (Tori)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Yuzuru',
    name: 'fine Training Uniform',
    fullName: 'fine Training Uniform (Yuzuru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Hokuto',
    name: 'Trickstar Training Uniform',
    fullName: 'Trickstar Training Uniform (Hokuto)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Subaru',
    name: 'Trickstar Training Uniform',
    fullName: 'Trickstar Training Uniform (Subaru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Makoto',
    name: 'Trickstar Training Uniform',
    fullName: 'Trickstar Training Uniform (Makoto)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Mao',
    name: 'Trickstar Training Uniform',
    fullName: 'Trickstar Training Uniform (Mao)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Chiaki',
    name: 'RYUSEITAI Training Uniform',
    fullName: 'RYUSEITAI Training Uniform (Chiaki)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Kanata',
    name: 'RYUSEITAI Training Uniform',
    fullName: 'RYUSEITAI Training Uniform (Kanata)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Tetora',
    name: 'RYUSEITAI Training Uniform',
    fullName: 'RYUSEITAI Training Uniform (Tetora)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Midori',
    name: 'RYUSEITAI Training Uniform',
    fullName: 'RYUSEITAI Training Uniform (Midori)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Shinobu',
    name: 'RYUSEITAI Training Uniform',
    fullName: 'RYUSEITAI Training Uniform (Shinobu)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Hiiro',
    name: 'ALKALOID Training Uniform',
    fullName: 'ALKALOID Training Uniform (Hiiro)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Aira',
    name: 'ALKALOID Training Uniform',
    fullName: 'ALKALOID Training Uniform (Aira)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Mayoi',
    name: 'ALKALOID Training Uniform',
    fullName: 'ALKALOID Training Uniform (Mayoi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Tatsumi',
    name: 'ALKALOID Training Uniform',
    fullName: 'ALKALOID Training Uniform (Tatsumi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Nagisa',
    name: 'Eden Training Uniform',
    fullName: 'Eden Training Uniform (Nagisa)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Hiyori',
    name: 'Eden Training Uniform',
    fullName: 'Eden Training Uniform (Hiyori)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Ibara',
    name: 'Eden Training Uniform',
    fullName: 'Eden Training Uniform (Ibara)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Jun',
    name: 'Eden Training Uniform',
    fullName: 'Eden Training Uniform (Jun)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Shu',
    name: 'Valkyrie Training Uniform',
    fullName: 'Valkyrie Training Uniform (Shu)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Mika',
    name: 'Valkyrie Training Uniform',
    fullName: 'Valkyrie Training Uniform (Mika)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Hinata',
    name: '2wink Training Uniform',
    fullName: '2wink Training Uniform (Hinata)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Yuta',
    name: '2wink Training Uniform',
    fullName: '2wink Training Uniform (Yuta)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Rinne',
    name: 'Crazy:B Training Uniform',
    fullName: 'Crazy:B Training Uniform (Rinne)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'HiMERU',
    name: 'Crazy:B Training Uniform',
    fullName: 'Crazy:B Training Uniform (HiMERU)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Kohaku',
    name: 'Crazy:B Training Uniform',
    fullName: 'Crazy:B Training Uniform (Kohaku)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Niki',
    name: 'Crazy:B Training Uniform',
    fullName: 'Crazy:B Training Uniform (Niki)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Rei',
    name: 'UNDEAD Training Uniform',
    fullName: 'UNDEAD Training Uniform (Rei)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Kaoru',
    name: 'UNDEAD Training Uniform',
    fullName: 'UNDEAD Training Uniform (Kaoru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Koga',
    name: 'UNDEAD Training Uniform',
    fullName: 'UNDEAD Training Uniform (Koga)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Adonis',
    name: 'UNDEAD Training Uniform',
    fullName: 'UNDEAD Training Uniform (Adonis)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Tomoya',
    name: 'Ra*bits Training Uniform',
    fullName: 'Ra*bits Training Uniform (Tomoya)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Nazuna',
    name: 'Ra*bits Training Uniform',
    fullName: 'Ra*bits Training Uniform (Nazuna)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Mitsuru',
    name: 'Ra*bits Training Uniform',
    fullName: 'Ra*bits Training Uniform (Mitsuru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Hajime',
    name: 'Ra*bits Training Uniform',
    fullName: 'Ra*bits Training Uniform (Hajime)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Keito',
    name: 'AKATSUKI Training Uniform',
    fullName: 'AKATSUKI Training Uniform (Keito)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Kuro',
    name: 'AKATSUKI Training Uniform',
    fullName: 'AKATSUKI Training Uniform (Kuro)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Souma',
    name: 'AKATSUKI Training Uniform',
    fullName: 'AKATSUKI Training Uniform (Souma)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Tsukasa',
    name: 'Knights Training Uniform',
    fullName: 'Knights Training Uniform (Tsukasa)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Leo',
    name: 'Knights Training Uniform',
    fullName: 'Knights Training Uniform (Leo)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Izumi',
    name: 'Knights Training Uniform',
    fullName: 'Knights Training Uniform (Izumi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Ritsu',
    name: 'Knights Training Uniform',
    fullName: 'Knights Training Uniform (Ritsu)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Arashi',
    name: 'Knights Training Uniform',
    fullName: 'Knights Training Uniform (Arashi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Natsume',
    name: 'Switch Training Uniform',
    fullName: 'Switch Training Uniform (Natsume)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Tsumugi',
    name: 'Switch Training Uniform',
    fullName: 'Switch Training Uniform (Tsumugi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Sora',
    name: 'Switch Training Uniform',
    fullName: 'Switch Training Uniform (Sora)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Madara',
    name: 'MaM Training Uniform',
    fullName: 'MaM Training Uniform (Madara)',
  },
]

export const startPatterns: Outfit[] = [
  {
    group: 'general',
    Ac: 20,
    Pa: 25,
    Un: 0,
    Sm: 0,
    Te: 35,
    Ch: 0,
    idol: 'Eichi',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Eichi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 35,
    Un: 20,
    Sm: 25,
    Te: 0,
    Ch: 0,
    idol: 'Wataru',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Wataru)',
  },
  {
    group: 'general',
    Ac: 35,
    Pa: 0,
    Un: 20,
    Sm: 0,
    Te: 0,
    Ch: 25,
    idol: 'Tori',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Tori)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 0,
    Un: 0,
    Sm: 20,
    Te: 40,
    Ch: 0,
    idol: 'Yuzuru',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Yuzuru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 25,
    Un: 0,
    Sm: 0,
    Te: 35,
    Ch: 20,
    idol: 'Hokuto',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Hokuto)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 0,
    Un: 25,
    Sm: 35,
    Te: 0,
    Ch: 0,
    idol: 'Subaru',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Subaru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 20,
    Un: 35,
    Sm: 25,
    Te: 0,
    Ch: 0,
    idol: 'Makoto',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Makoto)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 20,
    Sm: 40,
    Te: 20,
    Ch: 0,
    idol: 'Mao',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Mao)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 20,
    Sm: 25,
    Te: 0,
    Ch: 35,
    idol: 'Chiaki',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Chiaki)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 20,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 40,
    idol: 'Kanata',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Kanata)',
  },
  {
    group: 'general',
    Ac: 25,
    Pa: 35,
    Un: 20,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Tetora',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Tetora)',
  },
  {
    group: 'general',
    Ac: 25,
    Pa: 20,
    Un: 35,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Midori',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Midori)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 35,
    Sm: 25,
    Te: 0,
    Ch: 20,
    idol: 'Shinobu',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Shinobu)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 25,
    Un: 0,
    Sm: 0,
    Te: 20,
    Ch: 35,
    idol: 'Hiiro',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Hiiro)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 20,
    Un: 35,
    Sm: 0,
    Te: 0,
    Ch: 25,
    idol: 'Aira',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Aira)',
  },
  {
    group: 'general',
    Ac: 40,
    Pa: 0,
    Un: 20,
    Sm: 0,
    Te: 20,
    Ch: 0,
    idol: 'Mayoi',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Mayoi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 20,
    Un: 0,
    Sm: 40,
    Te: 20,
    Ch: 0,
    idol: 'Tatsumi',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Tatsumi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 40,
    Te: 20,
    Ch: 20,
    idol: 'Nagisa',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Nagisa)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 35,
    Un: 0,
    Sm: 25,
    Te: 20,
    Ch: 0,
    idol: 'Hiyori',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Hiyori)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 35,
    Un: 20,
    Sm: 0,
    Te: 0,
    Ch: 25,
    idol: 'Ibara',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Ibara)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 35,
    Te: 20,
    Ch: 25,
    idol: 'Jun',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Jun)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 20,
    Te: 20,
    Ch: 40,
    idol: 'Shu',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Shu)',
  },
  {
    group: 'general',
    Ac: 40,
    Pa: 20,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 20,
    idol: 'Mika',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Mika)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 40,
    Un: 0,
    Sm: 0,
    Te: 20,
    Ch: 0,
    idol: 'Hinata',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Hinata)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 0,
    Un: 20,
    Sm: 0,
    Te: 40,
    Ch: 0,
    idol: 'Yuta',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Yuta)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 20,
    Un: 0,
    Sm: 25,
    Te: 0,
    Ch: 35,
    idol: 'Rinne',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Rinne)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 20,
    Sm: 0,
    Te: 35,
    Ch: 25,
    idol: 'HiMERU',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (HiMERU)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 0,
    Sm: 35,
    Te: 25,
    Ch: 20,
    idol: 'Kohaku',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Kohaku)',
  },
  {
    group: 'general',
    Ac: 40,
    Pa: 20,
    Un: 0,
    Sm: 0,
    Te: 0,
    Ch: 20,
    idol: 'Niki',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Niki)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 0,
    Un: 35,
    Sm: 0,
    Te: 0,
    Ch: 25,
    idol: 'Rei',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Rei)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 20,
    Un: 35,
    Sm: 25,
    Te: 0,
    Ch: 0,
    idol: 'Kaoru',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Kaoru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 25,
    Un: 20,
    Sm: 0,
    Te: 35,
    Ch: 0,
    idol: 'Koga',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Koga)',
  },
  {
    group: 'general',
    Ac: 35,
    Pa: 0,
    Un: 25,
    Sm: 20,
    Te: 0,
    Ch: 0,
    idol: 'Adonis',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Adonis)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 40,
    Un: 0,
    Sm: 20,
    Te: 0,
    Ch: 20,
    idol: 'Tomoya',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Tomoya)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 25,
    Un: 20,
    Sm: 0,
    Te: 0,
    Ch: 35,
    idol: 'Nazuna',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Nazuna)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 0,
    Un: 0,
    Sm: 25,
    Te: 0,
    Ch: 35,
    idol: 'Mitsuru',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Mitsuru)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 20,
    Un: 0,
    Sm: 20,
    Te: 40,
    Ch: 0,
    idol: 'Hajime',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Hajime)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 40,
    Un: 0,
    Sm: 0,
    Te: 20,
    Ch: 0,
    idol: 'Keito',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Keito)',
  },
  {
    group: 'general',
    Ac: 35,
    Pa: 0,
    Un: 0,
    Sm: 20,
    Te: 25,
    Ch: 0,
    idol: 'Kuro',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Kuro)',
  },
  {
    group: 'general',
    Ac: 40,
    Pa: 20,
    Un: 0,
    Sm: 20,
    Te: 0,
    Ch: 0,
    idol: 'Souma',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Souma)',
  },
  {
    group: 'general',
    Ac: 25,
    Pa: 0,
    Un: 35,
    Sm: 0,
    Te: 0,
    Ch: 20,
    idol: 'Tsukasa',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Tsukasa)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 25,
    Sm: 0,
    Te: 35,
    Ch: 20,
    idol: 'Leo',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Leo)',
  },
  {
    group: 'general',
    Ac: 35,
    Pa: 0,
    Un: 20,
    Sm: 25,
    Te: 0,
    Ch: 0,
    idol: 'Izumi',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Izumi)',
  },
  {
    group: 'general',
    Ac: 25,
    Pa: 0,
    Un: 0,
    Sm: 0,
    Te: 20,
    Ch: 35,
    idol: 'Ritsu',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Ritsu)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 35,
    Un: 0,
    Sm: 0,
    Te: 20,
    Ch: 25,
    idol: 'Arashi',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Arashi)',
  },
  {
    group: 'general',
    Ac: 0,
    Pa: 0,
    Un: 20,
    Sm: 25,
    Te: 35,
    Ch: 0,
    idol: 'Natsume',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Natsume)',
  },
  {
    group: 'general',
    Ac: 25,
    Pa: 0,
    Un: 0,
    Sm: 35,
    Te: 20,
    Ch: 0,
    idol: 'Tsumugi',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Tsumugi)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 25,
    Un: 35,
    Sm: 0,
    Te: 0,
    Ch: 0,
    idol: 'Sora',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Sora)',
  },
  {
    group: 'general',
    Ac: 20,
    Pa: 0,
    Un: 0,
    Sm: 35,
    Te: 25,
    Ch: 0,
    idol: 'Madara',
    name: 'ES Idol Uniform',
    fullName: 'ES Idol Uniform (Madara)',
  },
]
