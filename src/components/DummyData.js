import category1 from "../assets/category-1.jpg";
import category2 from "../assets/category-2.jpg";
import category3 from "../assets/category-3.jpg";
import category4 from "../assets/category-4.jpg";
import category5 from "../assets/category-5.jpg";
import category6 from "../assets/category-6.jpg";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";

const categoriesData = [
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
];

const carouselData = [
  {
    id: "1",
    image: `${product1}`,
    item: "bags",
    category: "Paper bag",
    price: "$6.00",
    startPrice: "",
  },
  {
    id: "2",
    image: `${product2}`,
    item: "cans",
    category: "Packaging",
    price: "$7.00",
    startPrice: "$9.00",
  },
  {
    id: "3",
    image: `${product3}`,
    item: "shutter",
    category: "Packaging",
    price: "$10.00",
    startPrice: "",
  },
  {
    id: "4",
    image: `${product4}`,
    item: "cork",
    category: "Magazine",
    price: "$10.00",
    startPrice: "",
  },
];

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

export { categoriesData, carouselData, responsive };
