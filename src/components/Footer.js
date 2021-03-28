import React from "react";
import logo from "../images/logo-white.png";

const Footer = () => {
  return (
    <div
      className="container-fluid row no-gutters p-0"
      style={{ backgroundColor: "black", minHeight: "500px" }}
    >
      <div className="col-xl-6 row no-gutters d-flex align-items-center text-sm-center text-xl-left">
        <div className="col-xl-6 pl-5">
          <div className="col-xl-8">
            <img src={logo} alt="" />
            <p
              className="pt-5 pb-5"
              style={{ color: "#c5c4c4", lineHeight: "30px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              distinctio laboriosam delectus blanditiis, tempore deleniti,
              accusamus, ut expedita reiciendis ipsam rerum iure ea. Sequi!
            </p>
          </div>
        </div>
        <div className="col-xl-6">
          <h5 className="font-weight-bold text-uppercase text-white pb-2">
            χρησιμα links
          </h5>
          <ul className="list-unstyled">
            <li className="pb-3">
              <a className="link-unstyled" href="">
                Όροι χρήσης
              </a>
            </li>
            <li className="pb-3">
              <a className="link-unstyled" href="">
                Τρόποι Αποστολής
              </a>
            </li>
            <li className="pb-3">
              <a className="link-unstyled" href="">
                Τρόποι πληρωμής
              </a>
            </li>
            <li className="pb-3">
              <a className="link-unstyled" href="">
                Επικοινωνία
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-6 row no-gutters text-sm-center text-xl-left">
        <div className="col-xl-6 row no-gutters">
          <div className="col-xl-8 d-flex flex-column justify-content-center">
            <h5 className="font-weight-bold text-uppercase text-white pb-2">
              επικοινωνια
            </h5>
            <ul className="list-unstyled">
              <li className="pb-3">
                <a className="link-unstyled" href="">
                  New York, NY 10013
                </a>
              </li>
              <li className="pb-3">
                <a className="link-unstyled" href="">
                  (315) 5512-2579
                </a>
              </li>
              <li className="pb-4">
                <a className="link-unstyled" href="">
                  etchy@qode.com
                </a>
              </li>
              <li className="pb-2 border-bottom row no-gutters d-flex justify-content-between">
                <a className="link-unstyled" href="">
                  Get weekly newsletters
                </a>
                <div className="text-white">
                  <i className="fas fa-location-arrow pl-5"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6 align-items-end justify-content-end d-flex pb-4 pr-4">
          <a className="btn btn-yellow" href="">
            <i className="fas fa-chevron-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
