import React from "react";

const CarouselItem = ({ image, item, category, price, startPrice }) => {
  return (
    <div className="row no-gutters justify-content-center py-5">
      <div className="">
        <img className="w-100" src={image} alt="" />
        <div className="row no-gutters pt-3 text-sm-center text-md-left">
          <h5
            className="col-md-6 text-uppercase font-weight-bold"
            style={{ color: "black" }}
          >
            {item}
          </h5>
          <div className="col-md-6 text-secondary d-flex justify-content-sm-center justify-content-md-end">
            <div className="">
              <del>{startPrice}</del>
            </div>
            <div className="pl-2">{price}</div>
          </div>
        </div>
        <p className="row no-gutters text-secondary justify-content-sm-center justify-content-md-start">
          {category}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
