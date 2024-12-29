import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import AdonisImage from '@@/public/assets/characters/Adonis Otogari.png'
import AiraImage from '@@/public/assets/characters/Aira Shiratori.png'
import ArashiImage from '@@/public/assets/characters/Arashi Narukami.png'
import ChiakiImage from '@@/public/assets/characters/Chiaki Morisawa.png'
import EichiImage from '@@/public/assets/characters/Eichi Tenshouin.png'
import HajimeImage from '@@/public/assets/characters/Hajime Shino.png'
import HiiroImage from '@@/public/assets/characters/Hiiro Amagi.png'
import HiImage from '@@/public/assets/characters/HiMERU.png'
import HinataImage from '@@/public/assets/characters/Hinata Aoi.png'
import HiyoriImage from '@@/public/assets/characters/Hiyori Tomoe.png'
import HokutoImage from '@@/public/assets/characters/Hokuto Hidaka.png'
import IbaraImage from '@@/public/assets/characters/Ibara Saegusa.png'
import IzumiImage from '@@/public/assets/characters/Izumi Sena.png'
import JunImage from '@@/public/assets/characters/Jun Sazanami.png'
import KanataImage from '@@/public/assets/characters/Kanata Shinkai.png'
import KaoruImage from '@@/public/assets/characters/Kaoru Hakase.png'
import KeitoImage from '@@/public/assets/characters/Keito Hasumi.png'
import KogaImage from '@@/public/assets/characters/Koga Oogami.png'
import KohakuImage from '@@/public/assets/characters/Kohaku Oukawa.png'
import KuroImage from '@@/public/assets/characters/Kuro Kiryu.png'
import LeoImage from '@@/public/assets/characters/Leo Tsukinaga.png'
import MadaraImage from '@@/public/assets/characters/Madara Mikejima.png'
import MakotoImage from '@@/public/assets/characters/Makoto Yuuki.png'
import MaoImage from '@@/public/assets/characters/Mao Isara.png'
import MayoiImage from '@@/public/assets/characters/Mayoi Ayase.png'
import MidoriImage from '@@/public/assets/characters/Midori Takamine.png'
import MikaImage from '@@/public/assets/characters/Mika Kagehira.png'
import MitsuruImage from '@@/public/assets/characters/Mitsuru Tenma.png'
import NagisaImage from '@@/public/assets/characters/Nagisa Ran.png'
import NatsumeImage from '@@/public/assets/characters/Natsume Sakasaki.png'
import NazunaImage from '@@/public/assets/characters/Nazuna Nito.png'
import NikiImage from '@@/public/assets/characters/Niki Shiina.png'
import ReiImage from '@@/public/assets/characters/Rei Sakuma.png'
import RinneImage from '@@/public/assets/characters/Rinne Amagi.png'
import RitsuImage from '@@/public/assets/characters/Ritsu Sakuma.png'
import ShinobuImage from '@@/public/assets/characters/Shinobu Sengoku.png'
import ShuImage from '@@/public/assets/characters/Shu Itsuki.png'
import SoraImage from '@@/public/assets/characters/Sora Harukawa.png'
import SoumaImage from '@@/public/assets/characters/Souma Kanzaki.png'
import SubaruImage from '@@/public/assets/characters/Subaru Akehoshi.png'
import TatsumiImage from '@@/public/assets/characters/Tatsumi Kazehaya.png'
import TetoraImage from '@@/public/assets/characters/Tetora Nagumo.png'
import TomoyaImage from '@@/public/assets/characters/Tomoya Mashiro.png'
import ToriImage from '@@/public/assets/characters/Tori Himemiya.png'
import TsukasaImage from '@@/public/assets/characters/Tsukasa Suou.png'
import TsumugiImage from '@@/public/assets/characters/Tsumugi Aoba.png'
import WataruImage from '@@/public/assets/characters/Wataru Hibiki.png'
import YutaImage from '@@/public/assets/characters/Yuta Aoi.png'
import YuzuruImage from '@@/public/assets/characters/Yuzuru Fushimi.png'
import { Idol } from '@/data/idols'

interface AvatarProps {
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

const Avatar = ({ idol, className }: AvatarProps) => {
  return (
    <div
      className={twMerge(
        'rounded-full h-8 w-8 sm:h-10 sm:w-10 overflow-clip ring-1 ring-grey-100 shrink-0 grow-0',
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

export default Avatar
