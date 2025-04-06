import { FC, RefAttributes } from 'react'
import { User, GraduationCap, ChartCandlestick, NotebookText, Newspaper } from 'lucide-react'

import NavLink from '@/shared/ui/NavLink/NavLink'

const appMenuItems = [
  {
    path: '/main/learn',
    icon: GraduationCap,
    iconAlt: 'Learn Icon',
    label: 'Learn',
  },
  {
    path: '/main/chart',
    icon: ChartCandlestick,
    iconAlt: 'Chart Analysis Icon',
    label: 'Chart Analysis',
  },
  {
    path: '/main/news',
    icon: Newspaper,
    iconAlt: 'News Icon',
    label: 'Trading insights',
  },
  {
    path: '/main/blog',
    icon: NotebookText,
    iconAlt: 'Blog Icon',
    label: 'Blog',
  },
  {
    path: '/main/profile',
    icon: User,
    iconAlt: 'Profile Icon',
    label: 'Profile',
  },
]

export const AppMenu = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200'>
      <ul className='flex flex-row [&>*]:basis-1/5'>
        {appMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <AppMenuItem {...item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

interface IAppMenuItemProps {
  path: string
  icon: React.ElementType
  iconAlt: string
  label: string
}
const AppMenuItem = ({ path, icon, iconAlt, label }: IAppMenuItemProps) => {
  const IconComponent = icon
  const iconElement = <IconComponent aria-hidden='true' role='img' aria-label={iconAlt} />
  return (
    <NavLink
      href={path}
      activeClassNames='text-csBlue'
      nonActiveClassNames='text-csGrey'
      classNames='flex items-center justify-center py-4'
    >
      {iconElement}
    </NavLink>
  )
}
