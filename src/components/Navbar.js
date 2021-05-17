import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="w3-bar w3-deep-orange w3-mobile">
      <Link to="/" className="w3-bar-item w3-hover-orange">
        Shop
      </Link>
      <Link to="/cart" className="w3-bar-item w3-hover-orange">
        Cart
      </Link>
    </div>
  );
}
