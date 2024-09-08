import Button from "./Button";

const MenuUL = ({ isOpen }) => {
  console.log(isOpen);
  return (
    <nav className={` ${!isOpen ? "" : "invisible"} lg:w-[80%]`}>
      <ul className="flex flex-col lg:flex-row items-center justify-center  sm:pb-4 sm:pt-4 pb-4">
        <li className="lg:pr-4 cursor-pointer">Galeria zdjęć</li>
        <li className=" cursor-pointer">FaQ</li>
        <li>
        <Button
        content="Zadzwoń do nas!!"
        className={`bg-mainColor        
          hover:text-black text-white font-bold py-2 px-4 rounded-md mt-4 ${
            !isOpen ? "e" : "invisibl"
          }`}
      />
        </li>
      </ul>
    </nav>
  );
};

export default MenuUL;
