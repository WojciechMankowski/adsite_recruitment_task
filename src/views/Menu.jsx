
import MenuUL from "../components/MenuUL";
import Logo from "../components/Logo";

const Menu = ({isOpen, setIsOpen}) => {
  const classesMenu = isOpen ? "" : "hidden";

  return (
    <nav
      className="w-full flex flex-col justify-center items-center  lg:pt-4 pl-4
    lg:flex-row
    lg:justify-between
    lg:items-center
    lg:pl-8
    "
    >
      <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuUL classesMenu={classesMenu} />

    </nav>
  );
};

export default Menu;
