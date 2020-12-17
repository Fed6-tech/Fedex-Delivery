import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div id="footer">
    <div id="footer" class="py-5">
      <div class="container-fluid px-md-5">
        <div class="row mx-md-5 px-md-5">
          {/* <div class="col-md-10 d-md-flex mx-auto text-center text-md-left"> */}
          <div class="col-md-2">
            <p className="text-purple font-weight-bold">OUR COMPANY</p>
            <div class="links mt-4">
              <Link>
                <h6>About FedEx</h6>
              </Link>
              <Link href="">
                <h6>Our Portfolio</h6>
              </Link>
              <Link href="">
                <h6>Investor Relations </h6>
              </Link>
              <Link href="">
                <h6>Careers</h6>
              </Link>
            </div>
          </div>
          <div class="col-md-3">
            <div class="links mt-5">
              <Link href="">
                <h6>Corporate Responibility</h6>
              </Link>
              <Link href="">
                <h6>News Room</h6>
              </Link>
              <Link href="">
                <h6>Contact Us</h6>
              </Link>
            </div>
          </div>
          <div class="col-md-3 mt-3 mt-md-0">
            <p className="text-purple font-weight-bold">MORE FROM FEDEX</p>
            <div class="links">
              <Link href="">
                <h6>Fedex Compatible</h6>
              </Link>
              <Link href="">
                <h6>Developer Resource Center</h6>
              </Link>
              <Link href="">
                <h6>Fedex Logistics</h6>
              </Link>
              <Link href="">
                <h6>Fedex Cross Border</h6>
              </Link>
            </div>
          </div>
          <div class="col-md-3 ml-auto">
            <p>LANGUAGE</p>
            <div>
              <i class="fa fa-globe" aria-hidden="true"></i> United States
            </div>
            <select className="form-control" id="regionSelect">
              <option value="english">English</option>
              <option value="espanol">Espanol</option>
            </select>
          </div>
        </div>
        <div className="row px-5 py-5">
          <div className="underline"></div>
        </div>
      </div>
    </div>
    {/* </div> */}
  </div>
);

export default Footer;
