import React from "react";
import { connect } from "react-redux";

class Shop extends React.Component {
  render() {
    return (
      <div className="w3-container">
        <h4 className="w3-header w3-center w3-light-gray w3-stretch">Our items</h4>
        <div className="w3-row-padding">
          {this.props.items.map((item) => {
            return (
              <div className="w3-card w3-col s4 m3 w3-mobile" key={item.id}>
                <img className="w3-row w3-col s12" src={item.img} alt={item.title} />
                <div className="w3-cell-row">
                  <h4 className="w3-header w3-row w3-center w3-col s10">{item.title}</h4>
                  <button
                    type="button"
                    className="w3-button w3-green w3-col s2"
                    onClick={() => {
                      this.props.addToCart(item.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <p className="w3-row">{item.desc}</p>
                <p className="w3-row w3-right">Price: {item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}
function dispatchActionsToProps(dispatch) {
  return {
    addToCart: (id) => dispatch({ type: "ADD_TO_CART", payload: { id: id } })
  };
}
export default connect(mapStateToProps, dispatchActionsToProps)(Shop);
