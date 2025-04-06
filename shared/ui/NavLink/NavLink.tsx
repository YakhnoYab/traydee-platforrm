'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavLink {
  children: React.ReactNode
  href: string
  activeClassNames: string
  nonActiveClassNames: string
  classNames: string
}
const NavLink = ({ children, href, activeClassNames, nonActiveClassNames, classNames, ...rest }: INavLink) => {
  const pathname = usePathname()
  const isActive = pathname.endsWith(href) || (href.includes(pathname) && pathname !== '/')
  const newClassName = `${isActive ? activeClassNames : nonActiveClassNames} ${classNames}`
  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  )
}
export default NavLink
