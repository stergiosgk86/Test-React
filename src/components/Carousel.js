import React, { useState } from "react";
import { carouselData } from "./DummyData";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [carouselItems] = useState(carouselData);

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
                className="active mr-3"
              ></li>
              <li
                data-target="#blogCarousel"
                data-slide-to="1"
                className="mr-3"
              ></li>
              <li data-target="#blogCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row no-gutters">
                  {carouselItems.map((carouselItem) => (
                    <CarouselItem
                      key={carouselItem.id}
                      image={carouselItem.image}
                      item={carouselItem.item}
                      category={carouselItem.category}
                      price={carouselItem.price}
                      startPrice={carouselItem.startPrice}
                    />
                  ))}
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
