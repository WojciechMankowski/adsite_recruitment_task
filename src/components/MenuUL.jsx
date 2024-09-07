import Button from "./Button";

const MenuUL = ({ classesMenu }) => {
  return (
    <ul
      className={`${classesMenu} flex flex-col lg:w-1/2
        justify-center items-center 
        w-full  sm:pb-4 sm:pt-4 pb-4
        lg:flex-row  
        `}
    >
      <li className="lg:mx-4">
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <Button
        content="Zadzwoń do nas"
        className="
      w-40
      mt-4 
      lg:mt-0
       lg:ml-auto bg-mainColor  hover:text-black text-white font-bold py-2 px-4 rounded-md"
      />
    </ul>
  );
};

export default MenuUL;
