import React from "react";
import Logo from "/public/images/logo.png";
import { CloseButton } from "@/components/shared/ui/CloseButton/CloseButton";
import Image from "next/image";

interface IMobileMenuSidebarProps {
  isMobileMenuOpen: boolean;
  onMobileMenuClose: () => void;
}

export const MobileMenuSidebar = ({ isMobileMenuOpen, onMobileMenuClose }: IMobileMenuSidebarProps) => {
  return (
    <div
      className={`fixed top-20 left-0 min-h-[calc(100vh-theme(spacing.16))] min-w-[100vw] p-2 bg-neutral-400 transition-transform translate-x-full ${
        isMobileMenuOpen && "translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between w-full border-b border-solid border-cyan-950">
        <Image src={Logo} alt="Logo" height={50} width={80} />
        <div onClick={onMobileMenuClose}>
          <CloseButton size="lg" />
        </div>
      </div>
      <nav>
        <ul className="flex flex-col items-center gap-2 [&>*]:border-b [&>*]:border-solid [&>*]:border-neutral-500">
          <li>Explore courses</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};
