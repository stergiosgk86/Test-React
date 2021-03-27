import React from "react";

const CarouselItem = ({ image, item, category, price, startPrice }) => {
  return (
    <div className="col-md-3 pr-5">
      <img className="w-100" src={image} alt="" />
      <div className="row no-gutters pt-3 w-100">
        <h5 className="col-md-6 text-uppercase font-weight-bold">{item}</h5>
        <div className="col-md-6 text-secondary d-flex justify-content-end">
          <div className="">
            <del>{startPrice}</del>
          </div>
          <div className="pl-2">{price}</div>
        </div>
      </div>
      <p className="row no-gutters text-secondary">{category}</p>
    </div>
  );
};

export default CarouselItem;
