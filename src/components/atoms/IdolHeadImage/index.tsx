import Image from 'next/image'
import AdonisImage from '@@/public/assets/idols/heads/Adonis.png'
import AiraImage from '@@/public/assets/idols/heads/Aira.png'
import ArashiImage from '@@/public/assets/idols/heads/Arashi.png'
import ChiakiImage from '@@/public/assets/idols/heads/Chiaki.png'
import EichiImage from '@@/public/assets/idols/heads/Eichi.png'
import HajimeImage from '@@/public/assets/idols/heads/Hajime.png'
import HiiroImage from '@@/public/assets/idols/heads/Hiiro.png'
import HiImage from '@@/public/assets/idols/heads/HiMERU.png'
import HinataImage from '@@/public/assets/idols/heads/Hinata.png'
import HiyoriImage from '@@/public/assets/idols/heads/Hiyori.png'
import HokutoImage from '@@/public/assets/idols/heads/Hokuto.png'
import IbaraImage from '@@/public/assets/idols/heads/Ibara.png'
import IzumiImage from '@@/public/assets/idols/heads/Izumi.png'
import JunImage from '@@/public/assets/idols/heads/Jun.png'
import KanataImage from '@@/public/assets/idols/heads/Kanata.png'
import KaoruImage from '@@/public/assets/idols/heads/Kaoru.png'
import KeitoImage from '@@/public/assets/idols/heads/Keito.png'
import KogaImage from '@@/public/assets/idols/heads/Koga.png'
import KohakuImage from '@@/public/assets/idols/heads/Kohaku.png'
import KuroImage from '@@/public/assets/idols/heads/Kuro.png'
import LeoImage from '@@/public/assets/idols/heads/Leo.png'
import MadaraImage from '@@/public/assets/idols/heads/Madara.png'
import MakotoImage from '@@/public/assets/idols/heads/Makoto.png'
import MaoImage from '@@/public/assets/idols/heads/Mao.png'
import MayoiImage from '@@/public/assets/idols/heads/Mayoi.png'
import MidoriImage from '@@/public/assets/idols/heads/Midori.png'
import MikaImage from '@@/public/assets/idols/heads/Mika.png'
import MitsuruImage from '@@/public/assets/idols/heads/Mitsuru.png'
import NagisaImage from '@@/public/assets/idols/heads/Nagisa.png'
import NatsumeImage from '@@/public/assets/idols/heads/Natsume.png'
import NazunaImage from '@@/public/assets/idols/heads/Nazuna.png'
import NikiImage from '@@/public/assets/idols/heads/Niki.png'
import ReiImage from '@@/public/assets/idols/heads/Rei.png'
import RinneImage from '@@/public/assets/idols/heads/Rinne.png'
import RitsuImage from '@@/public/assets/idols/heads/Ritsu.png'
import ShinobuImage from '@@/public/assets/idols/heads/Shinobu.png'
import ShuImage from '@@/public/assets/idols/heads/Shu.png'
import SoraImage from '@@/public/assets/idols/heads/Sora.png'
import SoumaImage from '@@/public/assets/idols/heads/Souma.png'
import SubaruImage from '@@/public/assets/idols/heads/Subaru.png'
import TatsumiImage from '@@/public/assets/idols/heads/Tatsumi.png'
import TetoraImage from '@@/public/assets/idols/heads/Tetora.png'
import TomoyaImage from '@@/public/assets/idols/heads/Tomoya.png'
import ToriImage from '@@/public/assets/idols/heads/Tori.png'
import TsukasaImage from '@@/public/assets/idols/heads/Tsukasa.png'
import TsumugiImage from '@@/public/assets/idols/heads/Tsumugi.png'
import WataruImage from '@@/public/assets/idols/heads/Wataru.png'
import YutaImage from '@@/public/assets/idols/heads/Yuta.png'
import YuzuruImage from '@@/public/assets/idols/heads/Yuzuru.png'
import UndefinedCharacter from '@@/public/assets/idols/chibis/Undefined.png'
import { Idol } from '@/data/idols'
import { twMerge } from 'tailwind-merge'

interface IdolHeadImageProps {
  idol?: Idol
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

const IdolHeadImage = ({ idol, className }: IdolHeadImageProps) => {
  return (
    <Image
      src={idol ? idolImages[idol] : UndefinedCharacter}
      alt={idol ?? 'Undefined'}
      className={twMerge(
        'object-cover object-[0_25%]',
        className,
        !idol && 'mix-blend-luminosity',
      )}
      sizes='56px'
    />
  )
}

export default IdolHeadImage
