import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ title }) {
  const images = [
    { url: "/images/jumbotron.jpg" },
    { url: "/images/jumbotron2.jpg" },
    { url: "/images/jumbotron3.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Attiva l'effetto dissolvenza
  };

  return (
    <section className="position-relative" style={{ height: "50vh" }}> {/* Altezza adattiva */}
      <Slider {...settings}>
        {images.map((image, index) => (

          <div key={index} style={{ position: "relative", height: "100%" }}>
            <img
              src={image.url}
              alt="Slide"
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "cover", // Mantiene l'immagine senza distorsioni
              }}
            />
          </div>
        ))}
        
    
      </Slider>
     
      <div
        className="position-absolute top-50 start-50 translate-middle text-black text-center w-100"
        style={{ zIndex: 10 }}
      >
        <h2>{title}</h2>
      </div>
    </section>
  );
}
