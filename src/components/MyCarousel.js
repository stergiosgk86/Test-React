import React, { useState } from "react";
import { carouselData } from "./DummyData";
import CarouselItem from "./CarouselItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = () => {
  const [carouselItems] = useState(carouselData);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

      {/* <div className="row no-gutters col-md-10 offset-md-1"> */}
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={false}
        autoPlay={true}
        infinite={true}
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
      {/* </div> */}
    </div>
  );
};

export default MyCarousel;
