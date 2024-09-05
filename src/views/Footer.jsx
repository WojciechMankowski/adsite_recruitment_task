import { ArrowDown } from "react-bootstrap-icons";
// border-b border-2 border-white border-opacity-50
const Footer = () => (
  <>
    <footer
      class="bg-footer h-screen flex flex-col justify-between
   text-white p-8 w-full
   
   
   "
    >
      <div class="container mx-auto p-4 flex justify-center  ">
        <div class="w-1/2  p-4">
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
            class="text-white flex items-center border-b 
       font-roboto-condensed text-sm font-normal leading-6 text-left pt-6
        "
          >
            <span className="pr-1">Rozwiń </span>
            <ArrowDown />
          </button>
        </div>
        <div class="w-1/2  p-4">
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
            class="text-white flex items-center border-b 
       font-roboto-condensed text-sm font-normal leading-6 text-left pt-6
        "
          >
            <span className="pr-1">Rozwiń </span>
            <ArrowDown />
          </button>
        </div>
      </div>

      {/* <div class="border-b border-2 border-white border-opacity-50"></div> */}
    </footer>
    <div className="bg-footer  text-white p-8 w-full">
      <div class="w-full  p-4 text-center">Stopka na dole</div>
    </div>
  </>
);

export default Footer;
