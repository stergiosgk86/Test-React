import React from "react";

const Offers = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 offers-main-bg row d-flex align-items-center">
          <div className="col-md-6 row">
            <div className="col-md offset-md-2 d-flex flex-column">
              <h1
                className="text-uppercase font-weight-bold py-5"
                style={{ color: "black" }}
              >
                μοναδικα προϊοντα σε εκπληκτικες τιμες
              </h1>
              <div className="row no-gutters pt-5 mt-5">
                <button className="btn btn-outline-dark text-uppercase font-weight-bold px-5 py-2">
                  προσφορες
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 row offers-col-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
