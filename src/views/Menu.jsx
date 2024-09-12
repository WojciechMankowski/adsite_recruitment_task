import React, { useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between pt-4 pr-2">
      <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
        <ul className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
          <li>
            <a href="#" className="block py-2 px-4 text-center lg:inline">Galeria zdjęć</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-center lg:inline">FaQ</a>
          </li>
        </ul>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
        <Button
          content="Zadzwoń do nas"
          className="bg-mainColor hover:text-black text-white font-bold py-2 px-4 rounded-md w-full lg:w-auto"
        />
      </div>
    </nav>
  );
};

export default Navbar;