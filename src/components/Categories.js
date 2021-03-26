import React, { useState } from "react";
import category1 from "../images/category-1.jpg";
import category2 from "../images/category-2.jpg";
import category3 from "../images/category-3.jpg";
import category4 from "../images/category-4.jpg";
import category5 from "../images/category-5.jpg";
import category6 from "../images/category-6.jpg";
import Category from "./Category";

const Categories = () => {
  const [categories, seCategories] = useState([
    {
      id: "1",
      image: `${category1}`,
      description: "Πίνακες σε Καμβά",
      title: "καμβαδες",
    },
    {
      id: "2",
      image: `${category2}`,
      description: "Αυτοκόλλητα, Αυτοκόλλητες Ταπετσαρίες",
      title: "ταπετσαριες",
    },
    {
      id: "3",
      image: `${category3}`,
      description: "Κούπες, Στυλό, Δώρα",
      title: "απευθειας εκτυπωσεις",
    },
    {
      id: "4",
      image: `${category4}`,
      description: "Μπλούζες, Καπέλα, Αξεσουάρ",
      title: "ρουχισμος",
    },
    {
      id: "5",
      image: `${category5}`,
      description: "Ποτήρια",
      title: "πολλαπλων χρησεων",
    },
    {
      id: "6",
      image: `${category6}`,
      description: "Φάκελοι, Φυλλάδια, Ημερολόγια",
      title: "εντυπα",
    },
  ]);

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
