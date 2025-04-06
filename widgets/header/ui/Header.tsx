'use client'
import Image from 'next/image'
import Logo from '/public/images/logo.png'
import Link from 'next/link'

interface IHeaderProps {
  // Add your prop types here
}

export function Header({}: IHeaderProps) {
  return (
    <header className='w-full px-3 sm:px-4 md:px-5 lg:px-6 h-20 flex items-center justify-between shadow-custom bg-primaryBlue'>
      <div>
        <Image src={Logo} alt='Logo image' width={80} height={50} />
      </div>
      <nav className='sm:block hidden'>
        <ul className='flex items-center justify-between'>
          <li>Courses</li>
          <li>Demo trading</li>
          <li>Resourses</li>
          <li>About</li>
          <li>
            <Link href={'/testimonials'}>Testimonials</Link>
          </li>
        </ul>
      </nav>
      <div>Login</div>
    </header>
  )
}
