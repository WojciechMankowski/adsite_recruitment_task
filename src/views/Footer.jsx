import { ArrowDown } from "react-bootstrap-icons";

const Footer = () => (
  <>
    <footer
      className="  w-full text-white   bg-footer flex flex-col 
       justify-between 
   "
    >
      <div className="container mx-auto p-4 flex flex-col md:flex-row md:space-x-8 ">
        <div className="w-full md:w-1/2 p-4 md:p-0 md:text-sm">
          <h2 className="font-header text-xl leading-9 font-medium tracking-[-3%]">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
            nulla commodo.
          </h2>
          <p className="font-paragraph font-sm leading-5">
            Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <button
            className="text-white flex items-center border-b 
       font-roboto-condensed text-sm font-normal leading-6 text-left pt-6
        "
          >
            <span className="pr-1">Rozwiń </span>
            <ArrowDown />
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-0 md:text-sm">
          <h2 className="font-header text-xl leading-9 font-medium tracking-[-3%]">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
            nulla commodo.
          </h2>
          <p className="font-paragraph font-sm leading-5">
            Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <button
            className="text-white flex items-center border-b 
       font-roboto-condensed text-sm font-normal leading-6 text-left pt-6
        "
          >
            <span className="pr-1">Rozwiń </span>
            <ArrowDown />
          </button>
        </div>
      </div>
    </footer>
    <div className="h-0.5 bg-white"></div>
    <div className="bg-footer  text-white w-full flex justify-between">
      <div className="p-4">
        <span>Car Sport</span>
      </div>
      <div className="p-4">
        <a href="#" className="underline cursor-pointer">
          Polityka prywatności
        </a>
      </div>
    </div>
  </>
);

export default Footer;
