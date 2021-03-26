import React, { useState } from "react";
import categoriesDummy from "./DummyCategories";
import Category from "./Category";

const Categories = () => {
  const [categories] = useState(categoriesDummy);

  return (
    <div className="container-fluid px-0 pt-5">
      <div className="row no-gutters" style={{ height: "65vw" }}>
        {categories.map((category) => (
          <Category
            image={category.image}
            description={category.description}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
