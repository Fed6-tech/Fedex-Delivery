import React from "react";
import { Link } from "react-router-dom";

const Tracker = (props) => {
  let tnFound;
  if (props.tracking) {
    tnFound = (
      <div className="col text-center mx-auto text-black">
        <h1>
          {`${
            props.tracking.tracking !== 1
              ? "Scheduled delivery:"
              : "Estimated delivery date:"
          }`}
        </h1>
        <h1>
          {" "}
          {props.tracking.tracking !== 1
            ? `${props.tracking.dd} by end of the day`
            : `Pending`}
        </h1>
        <p>
          {`${
            props.tracking.tracking !== 1
              ? ""
              : "Shipping label has been created. The status will be uploaded when shipment begin to travel"
          }`}
        </p>
        <ul className="mx-auto">
          <li
            className={`${
              props.tracking.tracking === 1 ? "active" : ""
            } conLine`}
          >
            <i class="fa fa-cube" aria-hidden="true"></i>
          </li>
          <li
            className={`${
              props.tracking.tracking === 2 ? "active" : ""
            } conLine`}
          >
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </li>
          <li
            className={`${
              props.tracking.tracking === 3 ? "active" : ""
            } conLine`}
          >
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </li>
          <li className="conLine">4</li>
        </ul>
        <p className="font-weight-bold">{`${
          props.tracking.tracking === 1
            ? "LABEL CREATED"
            : props.tracking.tracking === 2
            ? "PICKED UP"
            : "IN TRANSIT"
        }`}</p>
        <p>
          {`${
            props.tracking.onTransit
              ? `On FedEx vehicle for delivery`
              : "Shipment information sent to FedEx"
          }`}
        </p>
        <p>
          {`${
            props.tracking.onTransit
              ? `${props.tracking.location.toUpperCase()}`
              : ""
          }`}
        </p>
        <p className="font-weight-bold text-primary">STATUS UPDATES</p>
        <div className="text-center">
          <p className="font-weight-bold">FROM</p>
          <h6>{props.tracking.from.toUpperCase()}</h6>
          <p className="font-weight-bold">TO</p>
          <h5 className="font-weight-bold">
            {props.tracking.name.toUpperCase()}
          </h5>
          <h6>{props.tracking.to.toUpperCase()}</h6>
        </div>
      </div>
    );
  } else {
    tnFound = (
      <div className="col">
        <p className="font-weight-bold">Not found</p>
        <p>
          This tracking number cannot be found, please check the number or
          contact the sender.
        </p>
      </div>
    );
  }
  return (
    <div id="tracker">
      <header className="py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h5>
                IMPORTANT! <br />
                <span className="text-danger">
                  FedEx is closely monitoring the Wildfires in the Northwest.
                </span>
              </h5>
              <div></div>
              <Link to="/">Back to My Shipments</Link>
            </div>
            <div className="underline"></div>
          </div>
          <div className="row py-2">{tnFound}</div>
        </div>
      </header>
    </div>
  );
};
export default Tracker;
