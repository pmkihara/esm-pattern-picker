export enum Idol {
  Eichi = 'Eichi',
  Wataru = 'Wataru',
  Tori = 'Tori',
  Yuzuru = 'Yuzuru',
  Hokuto = 'Hokuto',
  Subaru = 'Subaru',
  Makoto = 'Makoto',
  Mao = 'Mao',
  Chiaki = 'Chiaki',
  Kanata = 'Kanata',
  Tetora = 'Tetora',
  Midori = 'Midori',
  Shinobu = 'Shinobu',
  Hiiro = 'Hiiro',
  Aira = 'Aira',
  Mayoi = 'Mayoi',
  Tatsumi = 'Tatsumi',
  Nagisa = 'Nagisa',
  Hiyori = 'Hiyori',
  Ibara = 'Ibara',
  Jun = 'Jun',
  Shu = 'Shu',
  Mika = 'Mika',
  Hinata = 'Hinata',
  Yuta = 'Yuta',
  Rinne = 'Rinne',
  HiMERU = 'HiMERU',
  Kohaku = 'Kohaku',
  Niki = 'Niki',
  Rei = 'Rei',
  Kaoru = 'Kaoru',
  Koga = 'Koga',
  Adonis = 'Adonis',
  Tomoya = 'Tomoya',
  Nazuna = 'Nazuna',
  Mitsuru = 'Mitsuru',
  Hajime = 'Hajime',
  Keito = 'Keito',
  Kuro = 'Kuro',
  Souma = 'Souma',
  Tsukasa = 'Tsukasa',
  Leo = 'Leo',
  Izumi = 'Izumi',
  Ritsu = 'Ritsu',
  Arashi = 'Arashi',
  Natsume = 'Natsume',
  Tsumugi = 'Tsumugi',
  Sora = 'Sora',
  Madara = 'Madara',
}

export enum Unit {
  Fine = 'fine',
  Trickstar = 'Trickstar',
  Ryuseitai = 'RYUSEITAI',
  Alkaloid = 'ALKALOID',
  Eden = 'Eden',
  Valkyrie = 'Valkyrie',
  Twink = '2wink',
  CrazyB = 'Crazy:B',
  Undead = 'UNDEAD',
  Rabits = 'Ra*bits',
  Akatsuki = 'AKATSUKI',
  Knights = 'Knights',
  Switch = 'Switch',
  MaM = 'MaM',
  DoubleFace = 'Double Face',
}

export const allIdols = Object.values(Idol)

export const idolsByUnit: Record<Unit, Idol[]> = {
  [Unit.Fine]: [Idol.Eichi, Idol.Wataru, Idol.Tori, Idol.Yuzuru],
  [Unit.Trickstar]: [Idol.Hokuto, Idol.Subaru, Idol.Makoto, Idol.Mao],
  [Unit.Ryuseitai]: [
    Idol.Chiaki,
    Idol.Kanata,
    Idol.Tetora,
    Idol.Midori,
    Idol.Shinobu,
  ],
  [Unit.Alkaloid]: [Idol.Hiiro, Idol.Aira, Idol.Mayoi, Idol.Tatsumi],
  [Unit.Eden]: [Idol.Nagisa, Idol.Hiyori, Idol.Ibara, Idol.Jun],
  [Unit.Valkyrie]: [Idol.Shu, Idol.Mika],
  [Unit.Twink]: [Idol.Hinata, Idol.Yuta],
  [Unit.CrazyB]: [Idol.Rinne, Idol.HiMERU, Idol.Kohaku, Idol.Niki],
  [Unit.Undead]: [Idol.Rei, Idol.Kaoru, Idol.Koga, Idol.Adonis],
  [Unit.Rabits]: [Idol.Tomoya, Idol.Nazuna, Idol.Mitsuru, Idol.Hajime],
  [Unit.Akatsuki]: [Idol.Keito, Idol.Kuro, Idol.Souma],
  [Unit.Knights]: [Idol.Tsukasa, Idol.Leo, Idol.Izumi, Idol.Ritsu, Idol.Arashi],
  [Unit.Switch]: [Idol.Natsume, Idol.Tsumugi, Idol.Sora],
  [Unit.MaM]: [Idol.Madara],
  [Unit.DoubleFace]: [Idol.Madara, Idol.Kohaku],
}

export const idolFullNames: Record<Idol, string> = {
  [Idol.Eichi]: 'Eichi Tenshouin',
  [Idol.Wataru]: 'Wataru Hibiki',
  [Idol.Tori]: 'Tori Himemiya',
  [Idol.Yuzuru]: 'Yuzuru Fushimi',
  [Idol.Hokuto]: 'Hokuto Hidaka',
  [Idol.Subaru]: 'Subaru Akehoshi',
  [Idol.Makoto]: 'Makoto Yuuki',
  [Idol.Mao]: 'Mao Isara',
  [Idol.Chiaki]: 'Chiaki Morisawa',
  [Idol.Kanata]: 'Kanata Shinkai',
  [Idol.Tetora]: 'Tetora Nagumo',
  [Idol.Midori]: 'Midori Takamine',
  [Idol.Shinobu]: 'Shinobu Sengoku',
  [Idol.Hiiro]: 'Hiiro Amagi',
  [Idol.Aira]: 'Aira Shiratori',
  [Idol.Mayoi]: 'Mayoi Ayase',
  [Idol.Tatsumi]: 'Tatsumi Kazehaya',
  [Idol.Nagisa]: 'Nagisa Ran',
  [Idol.Hiyori]: 'Hiyori Tomoe',
  [Idol.Ibara]: 'Ibara Saegusa',
  [Idol.Jun]: 'Jun Sazanami',
  [Idol.Shu]: 'Shu Itsuki',
  [Idol.Mika]: 'Mika Kagehira',
  [Idol.Hinata]: 'Hinata Aoi',
  [Idol.Yuta]: 'Yuta Aoi',
  [Idol.Rinne]: 'Rinne Amagi',
  [Idol.HiMERU]: 'HiMERU',
  [Idol.Kohaku]: 'Kohaku Oukawa',
  [Idol.Niki]: 'Niki Shiina',
  [Idol.Rei]: 'Rei Sakuma',
  [Idol.Kaoru]: 'Kaoru Hakaze',
  [Idol.Koga]: 'Koga Oogami',
  [Idol.Adonis]: 'Adonis Otogari',
  [Idol.Tomoya]: 'Tomoya Mashiro',
  [Idol.Nazuna]: 'Nazuna Nito',
  [Idol.Mitsuru]: 'Mitsuru Tenma',
  [Idol.Hajime]: 'Hajime Shino',
  [Idol.Keito]: 'Keito Hasumi',
  [Idol.Kuro]: 'Kuro Kiryu',
  [Idol.Souma]: 'Souma Kanzaki',
  [Idol.Tsukasa]: 'Tsukasa Suou',
  [Idol.Leo]: 'Leo Tsukinaga',
  [Idol.Izumi]: 'Izumi Sena',
  [Idol.Ritsu]: 'Ritsu Sakuma',
  [Idol.Arashi]: 'Arashi Narukami',
  [Idol.Natsume]: 'Natsume Sakasaki',
  [Idol.Tsumugi]: 'Tsumugi Aoba',
  [Idol.Sora]: 'Sora Harukawa',
  [Idol.Madara]: 'Madara Mikejima',
}
