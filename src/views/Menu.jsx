import Logo from "../components/Logo";
import Button from "../components/Button";
import { Menu, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Galeria zdjęć", href: "#", current: true },
  { name: "FaQ", href: "#", current: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-2 sm:px-6 lg:px-8">
      <Logo />

      {/* Responsive Navigation Menu */}
      <div className="hidden sm:flex space-x-8">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? "" : "",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="sm:hidden flex items-center">
        <button type="button" onClick={handleToggle} aria-controls="navigation-menu">
          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Button content="Zadzwoń do nas" className={`...`} />

        <Menu as="div" className="relative ml-3">
          <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Your Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
          <button type="button" onClick={handleToggle} aria-label="Close menu">
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;