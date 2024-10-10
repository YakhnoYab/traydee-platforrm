"use client";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import Link from "next/link";
import { useState } from "react";
import { MobileMenuSidebar } from "../MobileMenuSidebar/MobileMenuSidebar";
interface IHeaderProps {
  // Add your prop types here
}

export const Header = ({}: IHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="w-full px-3 sm:px-4 md:px-5 lg:px-6 h-20 flex items-center justify-between border-b border-neutral-600">
      <div>
        <Image src={Logo} alt="Logo image" width={80} height={50} />
      </div>
      <nav className="sm:block hidden">
        <ul className="flex items-center justify-between">
          <li>Courses</li>
          <li>Demo trading</li>
          <li>Resourses</li>
          <li>About</li>
          <li>
            <Link href={"/testimonials"}>Testimonials</Link>
          </li>
        </ul>
      </nav>
      <div>Login</div>
      <div
        className="flex flex-col gap-1 [&>*]:block [&>*]:h-0.5 [&>*]:w-6 [&>*]:bg-black"
        onClick={handleToggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <MobileMenuSidebar onMobileMenuClose={handleToggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
};
