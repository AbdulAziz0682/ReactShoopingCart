import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="w3-container">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
