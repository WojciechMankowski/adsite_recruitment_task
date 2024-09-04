import Logo from "../assets/IMG/logo.svg";

const Menu = () => {
    return (
        <nav className=" w-full flex flex-row justify-center items-center py-4 pl-10 ">
        <div className="logo w-25 flex flex-row justify-center items-center w-15">
          <img src={Logo} alt="logo" />
          <div className="font-semibold">
            {" "}
            <span className="text-mainColor">Cars</span>
            <span>Sport</span>
          </div>
        </div>

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
        <button className="w-25 mr-10 bg-mainColor hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
          Zadzwoń do nas
        </button>
      </nav>
    )
}

export default Menu