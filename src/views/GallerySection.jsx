import MenuGallery from "../components/MenuGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../components/Slider";
const GallerySection = () => (
  <section className="pb-14 pt-[95px]">
    <MenuGallery />
    <div className="pt-8">
    <SliderComponent/>
    </div>
  </section>
);

export default GallerySection;
