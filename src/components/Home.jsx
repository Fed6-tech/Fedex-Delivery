import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    openSearch: false,
    val: "",
  };
  handleInputChange = (event) => this.setState({ val: event.target.value });
  render() {
    return (
      <div id="home">
        <header className="py-5 mb-5">
          <div className="container-fluid py-5" id="header">
            <div className="row py-5">
              <div className="col-md-8 mx-auto text-center">
                <div className="row">
                  <h1 className="display-4 mx-auto text-center text-light">
                    Shop early, ship early
                  </h1>
                </div>
                <div className="row">
                  <div className="col-md-8 d-flex mx-auto text-uppercase text-center mt-5">
                    <div className="col-4 bg-white pt-2 py-md-3 px-2 pointer">
                      <i class="fa fa-cubes fa-5x mb-2" aria-hidden="true"></i>
                      <p>Rate and ship</p>
                    </div>
                    <div className="col-4 bg-purple text-white pt-2 py-md-3 px-2 pointer track">
                      <i class="fa fa-cube fa-5x mb-2" aria-hidden="true"></i>
                      <p>Track</p>
                    </div>
                    <div className="col-4 bg-white pt-2 py-md-3 px-2 pointer">
                      <i class="fas fa-map-marker-alt fa-5x mb-2"></i>
                      <p>Locations</p>
                    </div>
                  </div>
                </div>
                <div class="row mx-auto text-center py-3">
                  <form class="form-inline my-2 my-lg-0 mx-auto">
                    <input
                      class="form-control-lg mr-sm-2 rounded-0 border-0"
                      type="search"
                      placeholder="Tracking ID"
                      aria-label="Search"
                      onChange={this.handleInputChange}
                    />
                    <Link to={`/apps/fedextrack/tn/${this.state.val}`}>
                      <button
                        class="btn mx-auto btn-orange rounded-0 my-2 my-sm-0 py-2"
                        type="submit"
                      >
                        TRACK
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="second-sect">
          <div className="container">
            <div className="row py-3">
              <div className="col-md-3 mx-auto">
                <img
                  src={require("../imgs/Shopper.jpg")}
                  alt="Shopper"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8 text-black my-3">
                <h2>Shoppers: Simplify the season with shipping convenience</h2>
                <h5>
                  This holiday season is set to break all the shipping records
                  in the books. Start your shopping earlier and drop off your
                  packages at more that 60,000 locations. Many are open extended
                  hours for your convenience.
                </h5>
                <button className="btn btn-outline-primary rounded-pill px-3 py-2 text-uppercase font-weight-bold">
                  drop off a package
                </button>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-3 mx-auto">
                <img
                  src={require("../imgs/Shipper.jpg")}
                  alt="Shipper"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8 text-black my-3">
                <h2>Shippers: Prep your business for peak</h2>
                <h5>
                  The 2020 holiday season is on track to be the busiest in
                  e-commerce history. Are you ready? Get tools, tips and
                  resources to make this the most wonderful time of the year for
                  your business.
                </h5>
                <button className="btn btn-outline-primary rounded-pill px-3 py-2 text-uppercase font-weight-bold">
                  see the holiday help hub
                </button>
              </div>
            </div>
            <div className="row p-5 text-primary">
              <div className="col-md-2 mx-auto text-center">
                <img
                  src={require("../imgs/delivery.png")}
                  alt="icon delivery purple lg"
                  className="img-fluid w-50 my-4"
                />
                <p className="text-uppercase font-weight-bold">
                  Redirect a package
                </p>
              </div>
              <div className="col-md-2 mx-auto text-center">
                <img
                  src={require("../imgs/retail.png")}
                  alt="icon delivery purple lg"
                  className="img-fluid w-50 my-4"
                />
                <p className="text-uppercase font-weight-bold">
                  store hours and services
                </p>
              </div>
              <div className="col-md-2 mx-auto text-center">
                <img
                  src={require("../imgs/courier.png")}
                  alt="icon delivery purple lg"
                  className="img-fluid w-50 my-4"
                />
                <p className="text-uppercase font-weight-bold">
                  schedule a pickup
                </p>
              </div>
              <div className="col-md-2 mx-auto text-center">
                <img
                  src={require("../imgs/alert.png")}
                  alt="icon delivery purple lg"
                  className="img-fluid w-50 my-4"
                />
                <p className="text-uppercase font-weight-bold">
                  covid-19 updates
                </p>
              </div>
              <div className="col-md-2 mx-auto text-center">
                <img
                  src={require("../imgs/holiday.png")}
                  alt="icon delivery purple lg"
                  className="img-fluid w-50 my-4"
                />
                <p className="text-uppercase font-weight-bold">
                  holiday help hub
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="deliver" className="py-3">
          <div className="container-fluid px-lg-5">
            <div className="row py-3 text-black">
              <div className="col mx-auto text-center">
                <h2>
                  Here to help <em>you</em> deliver
                </h2>
                <p>
                  Global efforts to stop the spread of COVID-19 have changed the
                  world—and the way you do business—overnight. We’re here to
                  help your business deliver for you and your customers.
                </p>
              </div>
            </div>
            <div className="row py-3">
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 bg-light">
                  <img
                    src={require("../imgs/learnNew.jpeg")}
                    alt="Learn New"
                    class="card-img-top rounded-0"
                    // height="170px"
                  />
                  <div class="card-body px-0 text-center">
                    <h5 class="card-title">Learn what's new</h5>
                    <p class="text-muted">
                      The FedEx Service Guide gives you all the information you
                      need to ship. See the latest updates, effective Sept. 28,
                      2020.
                    </p>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 text-uppercase font-weight-bold">
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 bg-light">
                  <img
                    src={require("../imgs/PackageHeading.jpg")}
                    alt="Learn New"
                    class="card-img-top rounded-0"
                    // height="170px"
                  />
                  <div class="card-body px-0 text-center">
                    <h5 class="card-title">Package heading to your home?</h5>
                    <p class="text-muted">
                      You can request to redirect it to a FedEx location for
                      pickup. Track your package to begin.
                    </p>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 text-uppercase font-weight-bold">
                      Track Now
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 bg-light">
                  <img
                    src={require("../imgs/Support.jpg")}
                    alt="Learn New"
                    class="card-img-top rounded-0"
                    // height="170px"
                  />
                  <div class="card-body px-0 text-center">
                    <h5 class="card-title">Support for small businesses</h5>
                    <p class="text-muted">
                      Have questions about scaling, funding or technology? Get
                      advice from experts and small business owners like
                      yourself at our Small Business Center (SBC).
                    </p>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 text-uppercase font-weight-bold">
                      Visit the sbc
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5 pb-2 align-items-center mx-auto">
              <div className="col-md-5 d-md-none">
                <img
                  src={require("../imgs/manageHome.jpg")}
                  alt="Manage"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-5 mx-auto text-black mt-3">
                <h5 className="font-weight-bold">
                  Helping you manage your home deliveries
                </h5>
                <p class="text-muted">
                  Sign up for FedEx Delivery Manager to receive notifications
                  when a package is on its way, tell your FedEx driver where to
                  leave packages at your home, or even submit a request to
                  pickup at a convenient location.
                </p>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2 text-uppercase font-weight-bold">
                  singup for free
                </button>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img
                  src={require("../imgs/manageHome.jpg")}
                  alt="Manage"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row pb-5 pt-2 align-items-center mx-auto">
              <div className="col-md-5">
                <img
                  src={require("../imgs/standFor.jpg")}
                  alt="Stand"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-5 mx-auto mt-3 text-center text-md-left">
                <h5 className="font-weight-bold">What we stand for</h5>
                <p class="text-muted">
                  We believe a diverse society is a stronger one. We strive to
                  ensure our company reflects the many cultures of our
                  workforce, customers and communities around the world.
                </p>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2 text-uppercase font-weight-bold">
                  see our values in action
                </button>
              </div>
              {/* <div className="col-md-5 d-md-none">
            <img
              src={require("../imgs/standFor.jpg")}
              alt="Stand"
              className="img-fluid"
            />
          </div> */}
            </div>
            <div className="row quickNotice py-3 mx-auto text-center">
              <h6>
                FedEx Express, FedEx Ground and FedEx Freight will{" "}
                <strong> increase shipping rates</strong> beginning January 4,
                2021.
              </h6>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
