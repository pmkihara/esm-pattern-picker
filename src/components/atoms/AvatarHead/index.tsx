import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import AdonisImage from '@@/public/assets/idols/heads/Adonis.webp'
import AiraImage from '@@/public/assets/idols/heads/Aira.webp'
import ArashiImage from '@@/public/assets/idols/heads/Arashi.webp'
import ChiakiImage from '@@/public/assets/idols/heads/Chiaki.webp'
import EichiImage from '@@/public/assets/idols/heads/Eichi.webp'
import HajimeImage from '@@/public/assets/idols/heads/Hajime.webp'
import HiiroImage from '@@/public/assets/idols/heads/Hiiro.webp'
import HiImage from '@@/public/assets/idols/heads/HiMERU.webp'
import HinataImage from '@@/public/assets/idols/heads/Hinata.webp'
import HiyoriImage from '@@/public/assets/idols/heads/Hiyori.webp'
import HokutoImage from '@@/public/assets/idols/heads/Hokuto.webp'
import IbaraImage from '@@/public/assets/idols/heads/Ibara.webp'
import IzumiImage from '@@/public/assets/idols/heads/Izumi.webp'
import JunImage from '@@/public/assets/idols/heads/Jun.webp'
import KanataImage from '@@/public/assets/idols/heads/Kanata.webp'
import KaoruImage from '@@/public/assets/idols/heads/Kaoru.webp'
import KeitoImage from '@@/public/assets/idols/heads/Keito.webp'
import KogaImage from '@@/public/assets/idols/heads/Koga.webp'
import KohakuImage from '@@/public/assets/idols/heads/Kohaku.webp'
import KuroImage from '@@/public/assets/idols/heads/Kuro.webp'
import LeoImage from '@@/public/assets/idols/heads/Leo.webp'
import MadaraImage from '@@/public/assets/idols/heads/Madara.webp'
import MakotoImage from '@@/public/assets/idols/heads/Makoto.webp'
import MaoImage from '@@/public/assets/idols/heads/Mao.webp'
import MayoiImage from '@@/public/assets/idols/heads/Mayoi.webp'
import MidoriImage from '@@/public/assets/idols/heads/Midori.webp'
import MikaImage from '@@/public/assets/idols/heads/Mika.webp'
import MitsuruImage from '@@/public/assets/idols/heads/Mitsuru.webp'
import NagisaImage from '@@/public/assets/idols/heads/Nagisa.webp'
import NatsumeImage from '@@/public/assets/idols/heads/Natsume.webp'
import NazunaImage from '@@/public/assets/idols/heads/Nazuna.webp'
import NikiImage from '@@/public/assets/idols/heads/Niki.webp'
import ReiImage from '@@/public/assets/idols/heads/Rei.webp'
import RinneImage from '@@/public/assets/idols/heads/Rinne.webp'
import RitsuImage from '@@/public/assets/idols/heads/Ritsu.webp'
import ShinobuImage from '@@/public/assets/idols/heads/Shinobu.webp'
import ShuImage from '@@/public/assets/idols/heads/Shu.webp'
import SoraImage from '@@/public/assets/idols/heads/Sora.webp'
import SoumaImage from '@@/public/assets/idols/heads/Souma.webp'
import SubaruImage from '@@/public/assets/idols/heads/Subaru.webp'
import TatsumiImage from '@@/public/assets/idols/heads/Tatsumi.webp'
import TetoraImage from '@@/public/assets/idols/heads/Tetora.webp'
import TomoyaImage from '@@/public/assets/idols/heads/Tomoya.webp'
import ToriImage from '@@/public/assets/idols/heads/Tori.webp'
import TsukasaImage from '@@/public/assets/idols/heads/Tsukasa.webp'
import TsumugiImage from '@@/public/assets/idols/heads/Tsumugi.webp'
import WataruImage from '@@/public/assets/idols/heads/Wataru.webp'
import YutaImage from '@@/public/assets/idols/heads/Yuta.webp'
import YuzuruImage from '@@/public/assets/idols/heads/Yuzuru.webp'
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
