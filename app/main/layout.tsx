import { DropdownProvider } from '@/shared/context/DropdownContext'
import { AppHeader } from '@/widgets/app-header'
import { AppMenu } from '@/widgets/app-menu'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DropdownProvider>
        <AppHeader />
        <main className='container pb-16 pt-20 px-4 mx-auto'>{children}</main>
        <AppMenu />
      </DropdownProvider>
    </>
  )
}
