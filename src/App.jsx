import Menu from "./views/Menu";
import SectionHeader from "./views/SectionHeader";
import GallerySection from "./views/GallerySection";
import Footer from "./views/Footer";
import { useState, useEffect } from "react";

function App() {
  // Stan określający, czy urządzenie jest desktopem (szerokość > 1024px)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  // Stan określający, czy menu jest otwarte
  const [isOpen, setIsOpen] = useState(isDesktop);

  /**
   * Efekt obsługujący zmianę rozmiaru okna
   */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Komponent Menu z przekazaniem stanu i funkcji do zmiany stanu */}
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} isDesktop={isDesktop} />
      {/* Główna zawartość strony */}
      <main className="w-full lg:pl-8">
        {/* Komponent SectionHeader, który jest kompomentem 
        zawierającym sekcję z nagłówkiem oraz z dodatkowymi informacjami */}
        <SectionHeader />
        {/* Przekazanie informacji o typie urządzenia do komponentu GallerySection, 
        któty jest kompomentem zawierającym sekcję z galerią*/}
        <GallerySection isDesktop={isDesktop} />
      </main>
      <Footer />
    </>
  );
}

export default App;
