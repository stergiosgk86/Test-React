import React from "react";

const CreateGlass = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-md-12 create-glass-bg align-items-center d-flex">
          <div className="col-md-6 row ">
            <div className="col-md-11 offset-md-2 d-flex flex-column">
              <h1
                className="text-uppercase font-weight-bold pt-4 mt-1"
                style={{ color: "black" }}
              >
                εκτυπωμενα πολλαπλων χρησεων ποτηρια
              </h1>

              <p className="text-white py-4 paragraph-width">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia consequuntur aut beatae magni quo praesentium
                dignissimos pariatur cupiditate atque, tempora labore debitis
                voluptatem sit aliquid nesciunt hic!
              </p>

              <div className="row no-gutters">
                <div className="pr-4 pb-2">
                  <button className="btn text-uppercase btn-yellow font-weight-bold px-5 py-2">
                    φτιαξε το δικο σου
                  </button>
                </div>
                <div className="pb-2">
                  <button className="btn btn-outline-light text-uppercase font-weight-bold px-5 py-2">
                    για επαγγελματιες
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGlass;
