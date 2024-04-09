import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../data.js"; //이미지 변경은 data.js에서

const renderSlides = imageData.map(image => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
      <p className="legend" style={{fontSize: "20pt", backgroundColor: "white", color:"black"}}>{image.label}</p> 
  </div>
));

const Header = () => {

 const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="DisplayImage">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="w-[400px] lg:hidden">
          {renderSlides}
        </Carousel>
    </div>
  );
};

export default Header;