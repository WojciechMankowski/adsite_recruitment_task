import Navbar from "./views/Menu";
import SectionHeader from "./views/SectionHeader";
import GallerySection from "./views/GallerySection";
import Footer from "./views/Footer";
import { useState, useEffect } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [isOpen, setIsOpen] = useState(isDesktop);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isDesktop={isDesktop} />
      <main className="w-full lg:pl-8">
        <SectionHeader isDesktop={isDesktop} />
        <GallerySection isDesktop={isDesktop} />
      </main>
      <Footer />
    </>
  );
}

export default App;
