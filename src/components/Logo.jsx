import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import LogoIMG from "../assets/IMG/logo.svg";

const Logo = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full lg:w-auto lg:items-center lg:justify-center">
      <div className="flex items-center">
        <img src={LogoIMG} alt="logo" />
        <div className="font-semibold ml-2">
          <span className="text-mainColor">Cars</span>
          <span>Sport</span>
        </div>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={`m-4 lg:hidden`}>
        {isOpen ? <IoClose /> : <CiMenuBurger />}
      </button>
    </div>
  );
};

export default Logo;
