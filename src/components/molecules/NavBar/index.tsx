'use client'

import HomeIcon from '@@/public/assets/icons/home.svg'
import UserCardIcon from '@@/public/assets/icons/user-card.svg'
import OutfitIcon from '@@/public/assets/icons/outfit.svg'
import WorkIcon from '@@/public/assets/icons/work.svg'
import NavItem from '@/components/atoms/NavItem'
import { usePathname, useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import LogoHorizontal from '@@/public/assets/logo-horizontal.png'
import Image from 'next/image'

const NavBar = () => {
  // get current path
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const spreadsheetId = searchParams.get('id')

  const getHref = (path: string) => {
    const queryParams = spreadsheetId ? `?id=${spreadsheetId}` : ''
    return `${path}${queryParams}`
  }

  const items = {
    home: {
      iconSrc: HomeIcon.src,
      text: 'Home',
      href: getHref('/'),
      active: pathName === getHref('/'),
    },
    idols: {
      iconSrc: UserCardIcon.src,
      text: 'Idols',
      href: getHref('/idols'),
      active: pathName === getHref('/idols'),
    },
    outfits: {
      iconSrc: OutfitIcon.src,
      text: 'Outfits',
      href: getHref('/outfits'),
      active: pathName === getHref('/outfits'),
    },
    work: {
      iconSrc: WorkIcon.src,
      text: 'Work',
      href: getHref('/work'),
      active: pathName === getHref('/work'),
    },
  }

  return (
    <nav
      className={twMerge(
        'bg-sky-300 text-white grid grid-cols-5 grow-0 shrink-0',
        'lg:block lg:px-3 lg:py-5 lg:w-60 lg:h-full',
      )}
    >
      <Image
        src={LogoHorizontal}
        alt='Logo'
        width={193}
        height={32}
        className='hidden lg:block mb-7 ml-2'
      />
      <NavItem {...items.home} />
      <NavItem {...items.idols} />
      <div className='block lg:hidden' />
      <NavItem {...items.outfits} />
      <NavItem {...items.work} />
    </nav>
  )
}

export default NavBar
