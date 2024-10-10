import useClickAway from "../../hooks/useClickAway";
import { useRef, useState } from "react";
interface IDropdownMenuProps {
  title: React.ReactNode | string;
  menuItems: [React.ReactNode];
}

export const DropdownMenu = ({ title, menuItems }: IDropdownMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative">
        <span onClick={handleToggleDropdown}>{title}</span>
        <div className="absolute top-0 left-0 right-0" ref={dropdownRef}>
          <ul className="flex flex-col items-start gap-1">
            {menuItems.map((menuItem, index) => {
              return <li key={index}>{menuItem}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
