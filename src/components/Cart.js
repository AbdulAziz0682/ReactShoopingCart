import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    return <h1>{this.props.addedItems.length}</h1>;
  }
}

function mapStateToProps(state) {
  return {
    addedItems: state.addedItems
  };
}

export default connect(mapStateToProps)(Cart);
