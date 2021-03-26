import React from "react";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";

const Carousel = () => {
  return (
    <div>
      <div className="container text-center">
        <h1
          className="text-uppercase font-weight-bold col-md-6 offset-md-3"
          style={{ color: "black" }}
        >
          εβδομαδιαιες προτασεις
        </h1>
        <h6 className="col-md-6 offset-md-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem
          placeat quos quis di asperiores?
        </h6>
      </div>

      <div className="row no-gutters blog py-5">
        <div className="col-md-10 offset-md-1">
          <div
            id="blogCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#blogCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#blogCarousel"
                data-slide-to="1"
              ></li>
              <li
                data-target="#blogCarousel"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="row no-gutters">
                    <div className="col-md-3"><img className="" src={product1} alt="First slide" /></div>
                    <div className="col-md-3"><img className="" src={product2} alt="Second slide" /></div>
                    <div className="col-md-3"><img className="" src={product3} alt="Third slide" /></div>
                    <div className="col-md-3"><img className="" src={product4} alt="Fourth slide" /></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
