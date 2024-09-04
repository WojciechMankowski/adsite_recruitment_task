import Menu from "./components/Menu";
import SectionHeader from "./components/SectionHeader";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Menu />
      <main className="w-full">
        <SectionHeader />
        <GallerySection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
