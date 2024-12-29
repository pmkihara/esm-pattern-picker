import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import AdonisImage from '@@/public/assets/characters/heads/Adonis.webp'
import AiraImage from '@@/public/assets/characters/heads/Aira.webp'
import ArashiImage from '@@/public/assets/characters/heads/Arashi.webp'
import ChiakiImage from '@@/public/assets/characters/heads/Chiaki.webp'
import EichiImage from '@@/public/assets/characters/heads/Eichi.webp'
import HajimeImage from '@@/public/assets/characters/heads/Hajime.webp'
import HiiroImage from '@@/public/assets/characters/heads/Hiiro.webp'
import HiImage from '@@/public/assets/characters/heads/HiMERU.webp'
import HinataImage from '@@/public/assets/characters/heads/Hinata.webp'
import HiyoriImage from '@@/public/assets/characters/heads/Hiyori.webp'
import HokutoImage from '@@/public/assets/characters/heads/Hokuto.webp'
import IbaraImage from '@@/public/assets/characters/heads/Ibara.webp'
import IzumiImage from '@@/public/assets/characters/heads/Izumi.webp'
import JunImage from '@@/public/assets/characters/heads/Jun.webp'
import KanataImage from '@@/public/assets/characters/heads/Kanata.webp'
import KaoruImage from '@@/public/assets/characters/heads/Kaoru.webp'
import KeitoImage from '@@/public/assets/characters/heads/Keito.webp'
import KogaImage from '@@/public/assets/characters/heads/Koga.webp'
import KohakuImage from '@@/public/assets/characters/heads/Kohaku.webp'
import KuroImage from '@@/public/assets/characters/heads/Kuro.webp'
import LeoImage from '@@/public/assets/characters/heads/Leo.webp'
import MadaraImage from '@@/public/assets/characters/heads/Madara.webp'
import MakotoImage from '@@/public/assets/characters/heads/Makoto.webp'
import MaoImage from '@@/public/assets/characters/heads/Mao.webp'
import MayoiImage from '@@/public/assets/characters/heads/Mayoi.webp'
import MidoriImage from '@@/public/assets/characters/heads/Midori.webp'
import MikaImage from '@@/public/assets/characters/heads/Mika.webp'
import MitsuruImage from '@@/public/assets/characters/heads/Mitsuru.webp'
import NagisaImage from '@@/public/assets/characters/heads/Nagisa.webp'
import NatsumeImage from '@@/public/assets/characters/heads/Natsume.webp'
import NazunaImage from '@@/public/assets/characters/heads/Nazuna.webp'
import NikiImage from '@@/public/assets/characters/heads/Niki.webp'
import ReiImage from '@@/public/assets/characters/heads/Rei.webp'
import RinneImage from '@@/public/assets/characters/heads/Rinne.webp'
import RitsuImage from '@@/public/assets/characters/heads/Ritsu.webp'
import ShinobuImage from '@@/public/assets/characters/heads/Shinobu.webp'
import ShuImage from '@@/public/assets/characters/heads/Shu.webp'
import SoraImage from '@@/public/assets/characters/heads/Sora.webp'
import SoumaImage from '@@/public/assets/characters/heads/Souma.webp'
import SubaruImage from '@@/public/assets/characters/heads/Subaru.webp'
import TatsumiImage from '@@/public/assets/characters/heads/Tatsumi.webp'
import TetoraImage from '@@/public/assets/characters/heads/Tetora.webp'
import TomoyaImage from '@@/public/assets/characters/heads/Tomoya.webp'
import ToriImage from '@@/public/assets/characters/heads/Tori.webp'
import TsukasaImage from '@@/public/assets/characters/heads/Tsukasa.webp'
import TsumugiImage from '@@/public/assets/characters/heads/Tsumugi.webp'
import WataruImage from '@@/public/assets/characters/heads/Wataru.webp'
import YutaImage from '@@/public/assets/characters/heads/Yuta.webp'
import YuzuruImage from '@@/public/assets/characters/heads/Yuzuru.webp'
import { Idol } from '@/data/idols'

interface AvatarHeadProps {
  idol: Idol
  className?: string
}

const idolImages = {
  [Idol.Adonis]: AdonisImage,
  [Idol.Aira]: AiraImage,
  [Idol.Arashi]: ArashiImage,
  [Idol.Chiaki]: ChiakiImage,
  [Idol.Eichi]: EichiImage,
  [Idol.Hajime]: HajimeImage,
  [Idol.Hiiro]: HiiroImage,
  [Idol.HiMERU]: HiImage,
  [Idol.Hinata]: HinataImage,
  [Idol.Hiyori]: HiyoriImage,
  [Idol.Hokuto]: HokutoImage,
  [Idol.Ibara]: IbaraImage,
  [Idol.Izumi]: IzumiImage,
  [Idol.Jun]: JunImage,
  [Idol.Kanata]: KanataImage,
  [Idol.Kaoru]: KaoruImage,
  [Idol.Keito]: KeitoImage,
  [Idol.Koga]: KogaImage,
  [Idol.Kohaku]: KohakuImage,
  [Idol.Kuro]: KuroImage,
  [Idol.Leo]: LeoImage,
  [Idol.Madara]: MadaraImage,
  [Idol.Makoto]: MakotoImage,
  [Idol.Mao]: MaoImage,
  [Idol.Mayoi]: MayoiImage,
  [Idol.Midori]: MidoriImage,
  [Idol.Mika]: MikaImage,
  [Idol.Mitsuru]: MitsuruImage,
  [Idol.Nagisa]: NagisaImage,
  [Idol.Natsume]: NatsumeImage,
  [Idol.Nazuna]: NazunaImage,
  [Idol.Niki]: NikiImage,
  [Idol.Rei]: ReiImage,
  [Idol.Rinne]: RinneImage,
  [Idol.Ritsu]: RitsuImage,
  [Idol.Shinobu]: ShinobuImage,
  [Idol.Shu]: ShuImage,
  [Idol.Sora]: SoraImage,
  [Idol.Souma]: SoumaImage,
  [Idol.Subaru]: SubaruImage,
  [Idol.Tatsumi]: TatsumiImage,
  [Idol.Tetora]: TetoraImage,
  [Idol.Tomoya]: TomoyaImage,
  [Idol.Tori]: ToriImage,
  [Idol.Tsukasa]: TsukasaImage,
  [Idol.Tsumugi]: TsumugiImage,
  [Idol.Wataru]: WataruImage,
  [Idol.Yuta]: YutaImage,
  [Idol.Yuzuru]: YuzuruImage,
}

const AvatarHead = ({ idol, className }: AvatarHeadProps) => {
  return (
    <div
      className={twMerge(
        'h-8 w-8 overflow-clip shrink-0 grow-0',
        'sm:h-12 sm:w-12',
        className,
      )}
    >
      <Image
        src={idolImages[idol]}
        alt={idol}
        className='object-cover h-auto'
      />
    </div>
  )
}

export default AvatarHead
