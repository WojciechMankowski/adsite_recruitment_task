import Logo from "../assets/IMG/logo.svg";

const LogoComponent = () => (
  <div className="logo w-25 flex flex-row justify-center items-center w-15">
    <img src={Logo} alt="logo" />
    <div className="font-semibold">
      <span className="text-mainColor">Cars</span>
      <span>Sport</span>
    </div>
  </div>
);

const NavLinks = () => (
  <ul className="w-50 grow flex flex-row justify-center items-center ">
    <li>
      <a href="" className="pr-5 ">
        Galeria zdjęć
      </a>
    </li>
    <li>
      <a href="">FaQ</a>
    </li>
  </ul>
);

const CallButton = () => (
  <button className="w-25 mr-10 bg-mainColor hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
    Zadzwoń do nas
  </button>
);

const Menu = () => {
  return (
    <nav className=" w-full flex flex-row justify-center items-center py-4 pl-10 ">
      <LogoComponent />
      <NavLinks />
      <CallButton />
    </nav>
  )
}

export default Menu