import React from "react";
import CreateGlass from "./CreateGlass";
import Offers from "./Offers";
import MyCarousel from "./Carousel/MyCarousel";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div>
      <CreateGlass />
      <Offers />
      <MyCarousel />
      <Categories />
    </div>
  );
};

export default Home;
