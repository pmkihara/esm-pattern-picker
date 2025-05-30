import Link from 'next/link'
import SvgImage from '../SvgImage'
import { twMerge } from 'tailwind-merge'

interface NavItemProps {
  active: boolean
  iconSrc: string
  text: string
  href: string
}

const NavItem = ({ active, iconSrc, text, href }: NavItemProps) => {
  return (
    <li className='list-none'>
      <Link
        href={href}
        className={twMerge(
          'group flex flex-col items-center justify-center text-white w-full h-full p-2 text-xs gap-1 font-semibold',
          'lg:flex-row lg:gap-2 lg:text-base lg:justify-start lg:rounded-lg',
          'focus-visible:outline-none focus-visible:bg-sky-400/50',
          active ? 'bg-sky-400' : 'hover:bg-sky-400/50',
        )}
      >
        <SvgImage src={iconSrc} className='fill-white' height='24' width='24' />
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default NavItem
