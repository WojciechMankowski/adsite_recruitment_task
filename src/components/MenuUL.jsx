import Button from "./Button";

const MenuUL = ({ isOpen }) => {
  const classesMenu = isOpen ? "visible" : "invisible";
  return (
    <ul
      className={`${classesMenu} flex flex-col lg:flex-row items-center justify-center w-[80%] sm:pb-4 sm:pt-4 pb-4`}
    >
      <li className="lg:mx-4">
        <a href="#">Home</a>
      </li>
      <li className="lg:mx-4">
        <a href="#">About</a>
      </li>
     
        <Button
          content="Zadzwoń do nas"
          className="w-40 mt-4 lg:mt-0 bg-mainColor absolute right-5
          
          hover:text-black text-white font-bold py-2 px-4 rounded-md"
        />

    </ul>
  );
};

export default MenuUL;
