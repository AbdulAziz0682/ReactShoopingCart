import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./Shop";
import Cart from "./Cart";

export default function App() {
  return (
    <div className="w3-container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
