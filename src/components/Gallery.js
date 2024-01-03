import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "pyro-poster.jpg",
    title: "Unveil the enigma Pyrokinesis",
    // category: "#EnchantoEnigma",
  },
  {
    id: 2,
    src: "p6.jpg",
    title: "Experience the enchantment of Music Nights",
    // category: "#PyrokinesisNights",
  },
  {
    id: 3,
    src: "/p7.jpg",
    title: "Creators step into the limelight",
    // category: "#EnigmaticNights",
  },
  {
    id: 4,
    src: "/p8.jpeg",
    title: "Get ready to be inspired ",
    // category: "#Enchanto Enigma",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle title="Gallery" needMargin={true} />
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
