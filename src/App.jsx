import './App.css';
import React, { Component } from 'react';
import ShoppingCartSideBar from "./order/ShoppingCartSideBar"

class App extends Component {
  state = {};
  render() {
    return (
      <div className="font-josefin-medium">
        {/* LANDING HOME PAGE */}
        <h1>Bookkeeper</h1>

        {/* TODO: this should be the "Shopping cart buttons" */}
        <ShoppingCartSideBar placement={"end"} name={"Shopping Cart"} />
      </div>
    );
  }
}

export default App;
