'use client'

interface IFooterProps {
  // Add your prop types here
}

export function Footer({}: IFooterProps) {
  return (
    <footer className='px-4 py-3'>
      <div className='flex flex-col gap-4'>
        <div className=''></div>
        <div className=''></div>
      </div>
    </footer>
  )
}

interface IFooterDropdownProps {}

export const FooterDropdown = ({}: IFooterDropdownProps) => {
  return <div></div>
}
