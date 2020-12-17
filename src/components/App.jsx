import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Details from "./Tracker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NoMatch from "./NoMatch";
import preload from "../data.json";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={(props) => <Home />} />
        <Route
          path="/apps/fedextrack/tn/:id"
          component={(props) => {
            const trackingDetails = preload.shipments.find(
              (shipment) => props.match.params.id === shipment.tn
            );
            return <Details tracking={trackingDetails} {...props} />;
          }}
        />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
