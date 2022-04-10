import './App.css';
import React, { Component } from 'react';
import ShoppingCartSideBar from "./order/ShoppingCartSideBar"
import LandingPage from './onepage/LandingPage';

function App () {
  return ( <div className="font-josefin-medium">
        {/* LANDING HOME PAGE */}
        <h1>Bookkeeper</h1>

        {/* TODO: this should be the "Shopping cart buttons" */}
        <ShoppingCartSideBar placement={"end"} name={"Shopping Cart"} />

        <LandingPage></LandingPage>
      </div> );
}

export default App;