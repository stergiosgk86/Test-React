import React from "react";

const Category = ({ image, description, title }) => {
  return (
    <div
      className="col-md-6 text-white align-items-end d-flex"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pl-5 pb-4">
        <p className="m-0">{description}</p>
        <h3 className="text-uppercase font-weight-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Category;
