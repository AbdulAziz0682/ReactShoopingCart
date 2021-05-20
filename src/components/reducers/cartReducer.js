import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Adidas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Vans",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: "Black",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5
    },
    {
      id: 6,
      title: "Blues",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6
    }
  ],
  addedItems: []
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = {
        items: [...state.items],
        addedItems: [...state.addedItems, ...state.items.filter((item) => item.id === action.payload.id)]
      };
      return newState;
    }
    case "REMOVE_FROM_CART": {
      let foundIndex = state.addedItems.findIndex((item) => item.id === action.payload.id);
      let remainingAddedItems = [...state.addedItems.slice(0, foundIndex), ...state.addedItems.slice(foundIndex + 1)];
      let newState = {
        items: [...state.items],
        addedItems: [...remainingAddedItems]
      };
      return newState;
    }
    case "CLEAR_CART": {
      let newState = {
        items: [...state.items],
        addedItems: []
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
