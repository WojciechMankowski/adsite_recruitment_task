import Menu from "./components/Menu";
import SectionHeader from "./views/SectionHeader";
import GallerySection from "./views/GallerySection";
import Footer from "./views/Footer";
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
