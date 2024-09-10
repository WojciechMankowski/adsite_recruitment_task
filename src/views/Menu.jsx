import Logo from "../components/Logo";
import Button from "../components/Button";
import { Menu, MenuItem, MenuItems } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Galeria zdjęć", href: "#", current: true },
  { name: "FaQ", href: "#", current: false },
];
const Navbar = () => (
  <nav className="">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Button
            content="Zadzwoń do nas"
            className={`bg-mainColor        
          hover:text-black text-white font-bold py-2 px-4 rounded-md mt-4 `}
          />

          <Menu as="div" className="relative ml-3">
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
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
          </Menu>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
