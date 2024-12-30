import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import AdonisImage from '@@/public/assets/idols/Adonis Otogari.png'
import AiraImage from '@@/public/assets/idols/Aira Shiratori.png'
import ArashiImage from '@@/public/assets/idols/Arashi Narukami.png'
import ChiakiImage from '@@/public/assets/idols/Chiaki Morisawa.png'
import EichiImage from '@@/public/assets/idols/Eichi Tenshouin.png'
import HajimeImage from '@@/public/assets/idols/Hajime Shino.png'
import HiiroImage from '@@/public/assets/idols/Hiiro Amagi.png'
import HiImage from '@@/public/assets/idols/HiMERU.png'
import HinataImage from '@@/public/assets/idols/Hinata Aoi.png'
import HiyoriImage from '@@/public/assets/idols/Hiyori Tomoe.png'
import HokutoImage from '@@/public/assets/idols/Hokuto Hidaka.png'
import IbaraImage from '@@/public/assets/idols/Ibara Saegusa.png'
import IzumiImage from '@@/public/assets/idols/Izumi Sena.png'
import JunImage from '@@/public/assets/idols/Jun Sazanami.png'
import KanataImage from '@@/public/assets/idols/Kanata Shinkai.png'
import KaoruImage from '@@/public/assets/idols/Kaoru Hakase.png'
import KeitoImage from '@@/public/assets/idols/Keito Hasumi.png'
import KogaImage from '@@/public/assets/idols/Koga Oogami.png'
import KohakuImage from '@@/public/assets/idols/Kohaku Oukawa.png'
import KuroImage from '@@/public/assets/idols/Kuro Kiryu.png'
import LeoImage from '@@/public/assets/idols/Leo Tsukinaga.png'
import MadaraImage from '@@/public/assets/idols/Madara Mikejima.png'
import MakotoImage from '@@/public/assets/idols/Makoto Yuuki.png'
import MaoImage from '@@/public/assets/idols/Mao Isara.png'
import MayoiImage from '@@/public/assets/idols/Mayoi Ayase.png'
import MidoriImage from '@@/public/assets/idols/Midori Takamine.png'
import MikaImage from '@@/public/assets/idols/Mika Kagehira.png'
import MitsuruImage from '@@/public/assets/idols/Mitsuru Tenma.png'
import NagisaImage from '@@/public/assets/idols/Nagisa Ran.png'
import NatsumeImage from '@@/public/assets/idols/Natsume Sakasaki.png'
import NazunaImage from '@@/public/assets/idols/Nazuna Nito.png'
import NikiImage from '@@/public/assets/idols/Niki Shiina.png'
import ReiImage from '@@/public/assets/idols/Rei Sakuma.png'
import RinneImage from '@@/public/assets/idols/Rinne Amagi.png'
import RitsuImage from '@@/public/assets/idols/Ritsu Sakuma.png'
import ShinobuImage from '@@/public/assets/idols/Shinobu Sengoku.png'
import ShuImage from '@@/public/assets/idols/Shu Itsuki.png'
import SoraImage from '@@/public/assets/idols/Sora Harukawa.png'
import SoumaImage from '@@/public/assets/idols/Souma Kanzaki.png'
import SubaruImage from '@@/public/assets/idols/Subaru Akehoshi.png'
import TatsumiImage from '@@/public/assets/idols/Tatsumi Kazehaya.png'
import TetoraImage from '@@/public/assets/idols/Tetora Nagumo.png'
import TomoyaImage from '@@/public/assets/idols/Tomoya Mashiro.png'
import ToriImage from '@@/public/assets/idols/Tori Himemiya.png'
import TsukasaImage from '@@/public/assets/idols/Tsukasa Suou.png'
import TsumugiImage from '@@/public/assets/idols/Tsumugi Aoba.png'
import WataruImage from '@@/public/assets/idols/Wataru Hibiki.png'
import YutaImage from '@@/public/assets/idols/Yuta Aoi.png'
import YuzuruImage from '@@/public/assets/idols/Yuzuru Fushimi.png'
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
