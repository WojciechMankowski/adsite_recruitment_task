import MenuUL from "../components/MenuUL";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const Menu = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isOpenMenu, setIstOpenMenu] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    const handlerReizers = () => {
      setWindowDimension(window.innerWidth);
    };
    window.addEventListener("resize", handlerReizers);
    return () => window.removeEventListener("resize", handlerReizers);
  }, []);
  const isMobile = windowDimension >= 1024;

  return (
    <header className="w-full flex flex-col justify-center items-center lg:pt-4 lg:flex-row lg:items-center static">
      <Logo isOpen={isOpenMenu} setIsOpen={setIstOpenMenu} />
      <MenuUL isOpen={isOpenMenu} />
      <Button
        content="Zadzwoń do nas nie widać"
        className={`w-40 mt-4 lg:mt-0 bg-mainColor absolute right-4        
          hover:text-black text-white font-bold py-2 px-4 rounded-md ${
            !windowDimension ? "" : "invisible"
          }`}
      />
    </header>
  );
};

export default Menu;
