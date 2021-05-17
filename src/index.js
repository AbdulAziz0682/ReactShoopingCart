import { StrictMode } from "react";
import ReactDOM from "react-dom";
import cartReducer from "./components/reducers/cartReducer";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(cartReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
