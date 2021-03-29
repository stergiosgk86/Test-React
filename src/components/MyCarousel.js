import React, { useState } from "react";
import { carouselData, responsive } from "./DummyData";
import CarouselItem from "./CarouselItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = () => {
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

      <div className="col-md-10 offset-md-1">
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={false}
        autoPlay={false}
        infinite={true}
        itemClass="carousel-item-padding"
      >
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
      </Carousel>
      </div>
    </div>
  );
};

export default MyCarousel;
