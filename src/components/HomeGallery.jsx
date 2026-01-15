import "./HomeGallery.css";
import logoImg from "../assets/epoxy1.jpg";
import epoxyImg from "../assets/epoxy2.jpg";

export default function HomeGallery() {
  return (
    <section className="home-gallery">
      <div className="gallery-inner">
         <div
          className="gallery-image left"
          style={{ backgroundImage: `url(${logoImg})` }}
        />
        <div
          className="gallery-image right"
          style={{ backgroundImage: `url(${epoxyImg})` }}
        />
      </div>
    </section>
  );
}
