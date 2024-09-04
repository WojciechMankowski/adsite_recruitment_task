import Menu from "./components/Menu";
import SectionHeader from "./components/SectionHeader";
import GallerySection from "./components/GallerySection";

function App() {
  return (
    <>
      <Menu />
      <main className="w-full">
        <SectionHeader />
        <GallerySection/>
      </main>
    </>
  );
}

export default App;
