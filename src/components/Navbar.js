import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="w3-bar w3-deep-orange w3-mobile">
      <Link to="/" className="w3-bar-item w3-hover-orange">
        Shop
      </Link>
      <Link to="/cart" className="w3-bar-item w3-hover-orange">
        Cart<span>{" " + props.totalAddedItems}</span>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    totalAddedItems: state.addedItems.length
  };
}
export default connect(mapStateToProps)(Navbar);
