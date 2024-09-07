import Logo from "../assets/IMG/logo.svg";

const LogoComponent = () => (
    <div className="logo w-25 flex flex-row justify-center items-center w-15">
      <img src={Logo} alt="logo" />
      <div className="font-semibold">
        <span className="text-mainColor">Cars</span>
        <span>Sport</span>
      </div>
    </div>
  );
  export default LogoComponent;