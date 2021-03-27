import React, { useState } from "react";
import { categoriesData } from "./DummyData";
import Category from "./Category";

const Categories = () => {
  const [categories] = useState(categoriesData);

  return (
    <div className="container-fluid px-0 pt-5">
      <div className="row no-gutters" style={{ height: "65vw" }}>
        {categories.map((category) => (
          <Category
            key={category.id}
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
