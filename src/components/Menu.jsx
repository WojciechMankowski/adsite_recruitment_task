import Logo from "../assets/IMG/logo.svg";

const Menu = () => {
    return (
        <nav class="bg-gray-100 w-full flex flex-row justify-center items-center py-4 pl-10 ">
        <div class="logo w-25 flex flex-row justify-center items-center w-15">
          <img src={Logo} alt="logo" />
          <div className="font-semibold">
            {" "}
            <span className="text-[#0147FF]">Cars</span>
            <span>Sport</span>
          </div>
        </div>

        <ul class="w-50 grow flex flex-row justify-center items-center ">
          <li>
            <a href="" class="pr-5 ">
              Galeria zdjęć
            </a>
          </li>
          <li>
            <a href="">FaQ</a>
          </li>
        </ul>
        <button class="w-25 mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Zadzwoń do nas
        </button>
      </nav>
    )
}

export default Menu