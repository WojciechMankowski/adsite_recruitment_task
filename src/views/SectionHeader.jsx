import HeaderImage from "../components/Header/HeaderImage";
import HeaderTitle from "../components/Header/HeaderTitle";
import HeaderParagraph from "../components/Header/HeaderParagraph";
import HeaderButtons from "../components/Header/HeaderButtons ";

const SectionHeader = ({isDesktop}) => (
  <section
    className="md:py-6 container w-full flex-col 
  flex md:flex-col
   sm:flex-row lg:flex-row xl:flex-row
   items-center md:justify-between
   "
  >
    <div className="flex  items-start justify-center flex-col pb-10">
      <HeaderTitle />
      <HeaderParagraph />
      <HeaderButtons />
    </div>
    <HeaderImage isDesktop={isDesktop}/>
  </section>
);

export default SectionHeader;
