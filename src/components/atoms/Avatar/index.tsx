import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import AdonisImage from '@@/public/assets/idols/chibis/Adonis Otogari.png'
import AiraImage from '@@/public/assets/idols/chibis/Aira Shiratori.png'
import ArashiImage from '@@/public/assets/idols/chibis/Arashi Narukami.png'
import ChiakiImage from '@@/public/assets/idols/chibis/Chiaki Morisawa.png'
import EichiImage from '@@/public/assets/idols/chibis/Eichi Tenshouin.png'
import HajimeImage from '@@/public/assets/idols/chibis/Hajime Shino.png'
import HiiroImage from '@@/public/assets/idols/chibis/Hiiro Amagi.png'
import HiImage from '@@/public/assets/idols/chibis/HiMERU.png'
import HinataImage from '@@/public/assets/idols/chibis/Hinata Aoi.png'
import HiyoriImage from '@@/public/assets/idols/chibis/Hiyori Tomoe.png'
import HokutoImage from '@@/public/assets/idols/chibis/Hokuto Hidaka.png'
import IbaraImage from '@@/public/assets/idols/chibis/Ibara Saegusa.png'
import IzumiImage from '@@/public/assets/idols/chibis/Izumi Sena.png'
import JunImage from '@@/public/assets/idols/chibis/Jun Sazanami.png'
import KanataImage from '@@/public/assets/idols/chibis/Kanata Shinkai.png'
import KaoruImage from '@@/public/assets/idols/chibis/Kaoru Hakase.png'
import KeitoImage from '@@/public/assets/idols/chibis/Keito Hasumi.png'
import KogaImage from '@@/public/assets/idols/chibis/Koga Oogami.png'
import KohakuImage from '@@/public/assets/idols/chibis/Kohaku Oukawa.png'
import KuroImage from '@@/public/assets/idols/chibis/Kuro Kiryu.png'
import LeoImage from '@@/public/assets/idols/chibis/Leo Tsukinaga.png'
import MadaraImage from '@@/public/assets/idols/chibis/Madara Mikejima.png'
import MakotoImage from '@@/public/assets/idols/chibis/Makoto Yuuki.png'
import MaoImage from '@@/public/assets/idols/chibis/Mao Isara.png'
import MayoiImage from '@@/public/assets/idols/chibis/Mayoi Ayase.png'
import MidoriImage from '@@/public/assets/idols/chibis/Midori Takamine.png'
import MikaImage from '@@/public/assets/idols/chibis/Mika Kagehira.png'
import MitsuruImage from '@@/public/assets/idols/chibis/Mitsuru Tenma.png'
import NagisaImage from '@@/public/assets/idols/chibis/Nagisa Ran.png'
import NatsumeImage from '@@/public/assets/idols/chibis/Natsume Sakasaki.png'
import NazunaImage from '@@/public/assets/idols/chibis/Nazuna Nito.png'
import NikiImage from '@@/public/assets/idols/chibis/Niki Shiina.png'
import ReiImage from '@@/public/assets/idols/chibis/Rei Sakuma.png'
import RinneImage from '@@/public/assets/idols/chibis/Rinne Amagi.png'
import RitsuImage from '@@/public/assets/idols/chibis/Ritsu Sakuma.png'
import ShinobuImage from '@@/public/assets/idols/chibis/Shinobu Sengoku.png'
import ShuImage from '@@/public/assets/idols/chibis/Shu Itsuki.png'
import SoraImage from '@@/public/assets/idols/chibis/Sora Harukawa.png'
import SoumaImage from '@@/public/assets/idols/chibis/Souma Kanzaki.png'
import SubaruImage from '@@/public/assets/idols/chibis/Subaru Akehoshi.png'
import TatsumiImage from '@@/public/assets/idols/chibis/Tatsumi Kazehaya.png'
import TetoraImage from '@@/public/assets/idols/chibis/Tetora Nagumo.png'
import TomoyaImage from '@@/public/assets/idols/chibis/Tomoya Mashiro.png'
import ToriImage from '@@/public/assets/idols/chibis/Tori Himemiya.png'
import TsukasaImage from '@@/public/assets/idols/chibis/Tsukasa Suou.png'
import TsumugiImage from '@@/public/assets/idols/chibis/Tsumugi Aoba.png'
import WataruImage from '@@/public/assets/idols/chibis/Wataru Hibiki.png'
import YutaImage from '@@/public/assets/idols/chibis/Yuta Aoi.png'
import YuzuruImage from '@@/public/assets/idols/chibis/Yuzuru Fushimi.png'
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
