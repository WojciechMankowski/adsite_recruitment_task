import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../components/Slider";
import MenuGallery from "../components/MenuGallery";

const GallerySection = ({ isDesktop }) => (
  <section className="flex flex-col lg:pt-48  pl-6 h-4/6 pb-12">
    <MenuGallery />
    <div className="pt-8">
      <SliderComponent isDesktop={isDesktop} />
    </div>
  </section>
);

export default GallerySection;
