import { useState } from "react";
import PropTypes from "prop-types";
import Image from "./Image"; // Assuming Image.jsx is in the same directory

const Slideshow = ({ width,height,images, slideshowClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div key={slideshowClass} className={"slideshow poppins-bold text-uppercase " + slideshowClass}>
      <div className="slideshow-prev tutorlink-green" onClick={prevSlide}>Prev</div>
      <Image width={width} height={height} imgClass={"slideshow-image"} image={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="slideshow-next tutorlink-green" onClick={nextSlide}>Next</div>
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  slideshowClass: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Slideshow;
