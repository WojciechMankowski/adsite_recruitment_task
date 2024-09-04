import HeaderImg from "../assets/IMG/header1.png";

const SectionHeader = () => (
  <section className="p-6 ">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-6 lg:mb-0 lg:w-1/2">
          <h1 className="font-bold font-header text-header">
            SPRZEDAJEMY SAMOCHODY
            <br /> Z EUROPY
          </h1>
          <p className="mb-4 text-base leading-6">
            Aby rozpocząć pracę, aby każda podróż <br />
            była wyjątkowa i niezapomniana!
          </p>
          <div className="flex space-x-4">
            <button className="bg-mainColor hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
              Zobacz zdjęcia
            </button>
            <button className="border border-mainColor hover:bg-mainColor text-mainColor hover:text-white font-bold py-2 px-4 rounded">
              Zadzwoń do nas
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end">
         
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-1/2">
      <img
        src={HeaderImg}
        alt="Samochody z Europy"
        className="w-full h-auto "
      />
    </div>
      </div>
    </div>
  </section>
);

export default SectionHeader;
