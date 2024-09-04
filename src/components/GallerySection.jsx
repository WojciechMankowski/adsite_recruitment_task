import MenuGallery from "./MenuGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "./Slider";
const GallerySection = () => (
  <section className="pl-6 pt-[95px]">
    <MenuGallery />
    <div className="pt-8">
    <SliderComponent/>
    </div>
  </section>
);

export default GallerySection;
