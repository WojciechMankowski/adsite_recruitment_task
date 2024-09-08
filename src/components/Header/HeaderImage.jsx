import HeaderImg from "../../assets/IMG/header1.png";

const HeaderImage = ({ isDesktop }) => {
  return (
    <div
      className={`
        "w-full m-0 pt-4
       lg:w-[900px] 

       flex justify-center items-center
       lg:absolute
      lg:right-0 
      lg:top-0
       lg:z-[-1] ${isDesktop ? "visible" : "invisible"} ${isDesktop ? "" : "h-0"}
        `}
    >
      <img
        src={HeaderImg}
        alt="Samochody z Europy"
        className="mx-auto w-full sm:w-auto"
      />
    </div>
  )
}
export default HeaderImage;
