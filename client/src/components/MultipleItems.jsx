import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider className="slider" {...settings}>
        <div className="slider-box">
          <h3>1</h3>
        </div>
        <div className="slider-box">
          <h3>2</h3>
        </div>
        <div className="slider-box">
          <h3>3</h3>
        </div>
        <div className="slider-box">
          <h3>4</h3>
        </div>
        <div className="slider-box">
          <h3>5</h3>
        </div>
        <div className="slider-box">
          <h3>6</h3>
        </div>
        <div className="slider-box">
          <h3>7</h3>
        </div>
        <div className="slider-box">
          <h3>8</h3>
        </div>
        <div className="slider-box">
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
