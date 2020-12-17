import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    openSearch: false,
    val: "",
  };
  handleInputChange = (event) => this.setState({ val: event.target.value });
  handleSearchOpen = () => {
    this.setState({ openSearch: !this.state.openSearch });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-purple shadow-sm px-lg-5 scrolling-navbar fixed-top">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../imgs/fedex.svg")}
            alt=""
            className="navbar-img"
          />
        </Link>
        {/* <!-- nav toggler --> */}
        <div className="d-md-none ml-auto mr-3">
          <i
            class="fa fa-user-circle-o fa-2x text-light"
            aria-hidden="true"
          ></i>{" "}
        </div>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarLinks"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <!-- nav links --> */}
        <div class="collapse navbar-collapse mx-lg-5" id="navbarLinks">
          <ul
            className={`${
              this.state.openSearch ? "" : "d-md-none"
            } navbar-nav ml-auto mino`}
          >
            <li className="nav-item d-flex">
              <form className="form-inline my-2 my-lg-0" id="searchForm">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control brad-left expandMe bg-transparent text-white"
                    placeholder="Search or Tracking Number"
                    aria-label="Search or Tracking Number"
                    aria-describedby="input-text"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text brad-right bg-transparent"
                      id="basic-addon2"
                    >
                      <i class="fa fa-search text-white" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </form>
              <button
                className="btn font-weight-bold d-none d-md-block mx-2"
                type="button"
                onClick={() =>
                  this.setState({ openSearch: !this.state.openSearch })
                }
              >
                <span aria-hidden="true">
                  {" "}
                  <p>&times;</p>
                </span>
              </button>
            </li>
          </ul>
          <ul
            className={`${
              this.state.openSearch ? "d-none" : ""
            } navbar-nav mx-lg-5`}
          >
            <li class="nav-item active mx-2">
              <Link href="./index.htm" class="nav-link">
                Shipping{" "}
                <i className="fa fa-angle-down mx-1" aria-hidden="true"></i>
              </Link>
            </li>
            <li class="nav-item dropdown mx-2">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tracking
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <Link class="dropdown-item" href="#"> */}
                <div class="form-inline mx-auto text-center">
                  <input
                    type="text"
                    class="form-control  mx-auto rounded-0 border-0 bg-lightG"
                    placeholder="Tracking ID"
                    value={this.state.val}
                    onChange={this.handleInputChange}
                    required
                  />
                  <Link to={`/apps/fedextrack/tn/${this.state.val}`}>
                    <div
                      class="btn btn-block mx-2 btn-orange my-2 py-2 text-uppercase"
                      type="submit"
                    >
                      Track
                    </div>
                  </Link>
                </div>
                {/* </Link> */}
              </div>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link">
                Design & Print{" "}
                <i className="fa fa-angle-down mx-1" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link">
                Location{" "}
                <i className="fa fa-angle-down mx-1" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="#" className="nav-link">
                Support{" "}
                <i className="fa fa-angle-down mx-1" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-none d-md-block">
          <ul
            className={
              // "d-none d-md-block"
              `${this.state.openSearch ? "d-none" : ""} navbar-nav ml-auto`
            }
          >
            <li className="nav-item mx-2 text-white ">
              <Link to="/" className="nav-link">
                <span className="d-none d-md-inline-block">
                  Signup or Login
                </span>{" "}
                <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>{" "}
              </Link>
            </li>
            <li className="nav-item mx-2" onClick={this.handleSearchOpen}>
              <Link className="nav-link">
                <i class="fa fa-search fa-2x" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
// const Navbar = (props) => (

// );

export default Navbar;
