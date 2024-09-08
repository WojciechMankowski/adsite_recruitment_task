import MenuUL from "../components/MenuUL";
import Logo from "../components/Logo";

const Menu = ({ isOpen, setIsOpen, isDesktop }) => {
  return (
    <nav
      className="w-full flex flex-col justify-center items-center lg:pt-4 lg:flex-row lg:items-center static"
    >
      <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuUL isOpen={isDesktop} />
    </nav>
  );
};

export default Menu;
