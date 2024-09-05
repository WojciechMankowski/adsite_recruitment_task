import HeaderImage from "../components/HeaderImage";
import TwoButtonComponent from "../components/Buttons";
import HeaderDescription from "../components/HeaderDescription";
import HeaderTitle from "../components/HeaderTitle";
const SectionHeader = () => (
  <section className="py-6">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="mb-6 lg:mb-0 lg:w-1/2">
        <HeaderTitle title={<>
          Sprzedajemy samochody <br />
          z Europy
        </>}/>
        <HeaderDescription />
        <TwoButtonComponent />
      </div>
      <div className="absolute top-0 right-0 w-full lg:w-1/2">
        <HeaderImage />
      </div>
    </div>
  </section>
);


export default SectionHeader;
