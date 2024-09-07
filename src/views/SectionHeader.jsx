import HeaderImg from "../assets/IMG/header1.png";

const SectionHeader = () => (
  <section
    className="md:py-6 container w-full flex-col 
  flex md:flex-col
   sm:flex-row lg:flex-row xl:flex-row
   items-center md:justify-between
   "
  >
    <div className="flex  items-start justify-center flex-col pb-10">
      <h1
        className="
       font-bold font-header mb-4 text-4xl
     leading-none tracking-wide
      text-gray-900 md:text-5xl
       lg:text-6xl "
      >
        <span className="tracking-wider">SPRZEDAJEMY SAMOCHODY</span>
        <br /> <span className="tracking-wider">Z EUROPY</span>
      </h1>
      <p className="mb-4 text-base leading-6 font-roboto-condensed text-left">
        Aby rozpocząć pracę, aby każda podróż <br />
        była wyjątkowa i niezapomniana!
      </p>
      <div className="flex space-x-4">
        <button className="bg-mainColor hover:bg-white
         hover:text-black hover:border hover:border-mainColor text-white font-bold py-2 px-4 rounded transition duration-300">
          Zobacz zdjęcia
        </button>
        <button className="border border-mainColor hover:bg-mainColor text-mainColor hover:text-white font-bold py-2 px-4 rounded">
          Zadzwoń do nas
        </button>
      </div>
    </div>
    <div
      className="w-full sm:w-[30%] h-[30%] m-0 pt-4
     lg:w-[1050px] 
     lg:h-full
     flex justify-center items-center
     lg:absolute
    lg:right-0 
    lg:top-0
     lg:z-[-1]

     "
    >
      <img
        src={HeaderImg}
        alt="Samochody z Europy"
        className="mx-auto w-full sm:w-auto"
      />
    </div>
  </section>
);

export default SectionHeader;
