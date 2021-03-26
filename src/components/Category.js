import React, { useState } from "react";

const Category = ({ image, description, title }) => {
  return (
    <div
      className="col-md-6 text-white align-items-end d-flex"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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


// return (
//     <div className="container-fluid px-0 pt-5">
//       <div className="container-fluid px-0 pt-5">
//         <div className="row no-gutters">
//           {categories.map((category) => (
//             <Category
//               image={category.image}
//               description={category.description}
//               title={category.title}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );