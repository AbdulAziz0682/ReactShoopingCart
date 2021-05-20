import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  getCount = (id) => {
    let count = 0;
    this.props.addedItems.forEach((element) => {
      if (element.id === id) {
        count++;
      }
    });
    return count;
  };
  getCards = (items) => {
    let uniqueItems = [];
    for (let i = 0; i < items.length; i++) {
      let isFound = false;
      for (let j = 0; j < uniqueItems.length; j++) {
        if (uniqueItems[j].id === items[i].id) {
          isFound = true;
          break;
        }
      }
      if (!isFound) {
        uniqueItems.push(items[i]);
      }
    }
    return uniqueItems.map((item) => {
      return (
        <div className="w3-card w3-col s4 w3-mobile" key={item.id}>
          <img src={item.img} alt={item.title} className="w3-col s12" />
          <div className="w3-cell-row">
            <p className="w3-col s9">{item.title}</p>
            <button className="w3-col s1 w3-button w3-red" onClick={() => this.props.removeFromCart(item.id)}>
              -
            </button>
            <span className="w3-col s1 w3-button">{this.getCount(item.id)}</span>
            <button className="w3-col s1 w3-button w3-green" onClick={() => this.props.addToCart(item.id)}>
              +
            </button>
          </div>
          <p className="w3-row">{item.desc}</p>
          <span className="w3-row w3-right">{item.price}</span>
        </div>
      );
    });
  };
  calculateTotalPrice = () => {
    let price = 0;
    this.props.addedItems.forEach((item) => {
      price += item.price;
    });
    return price;
  };
  render() {
    return (
      <div className="w3-container">
        <h4 className="w3-row w3-header w3-col s8 w3-center w3-light-gray w3-mobile">Your Cart</h4>
        <h4 className="w3-row w3-header w3-col s4 w3-light-gray w3-mobile">
          <span className="w3-center w3-half">Total Price: ${this.calculateTotalPrice()}</span>
          <span className="w3-red w3-half w3-center w3-hover-orange" onClick={() => this.props.clearCart()}>
            Clear Cart
          </span>
        </h4>
        <div className="w3-cell-row w3-container">{this.getCards(this.props.addedItems)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addedItems: state.addedItems
  };
}
function dispatchActionsToProps(dispatch) {
  return {
    addToCart: (id) => {
      dispatch({ type: "ADD_TO_CART", payload: { id: id } });
    },
    removeFromCart: (id) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id: id } });
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
    }
  };
}
export default connect(mapStateToProps, dispatchActionsToProps)(Cart);
