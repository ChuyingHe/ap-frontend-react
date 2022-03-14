import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import APNavigator from './common/navigator'
import APHeader from './common/header'

import React, { Component } from 'react';

class App extends Component {
  state = {};
  render() {
    return (
      // <div>
      //   {/* <APHeader></APHeader> */}
      //   {/* <APNavigator></APNavigator> */}
      //   test
      //   {console.log("APP")}

      //   <h1>Bookkeeper</h1>
      //   <nav
      //     style={{
      //       paddingBottom: "1rem",
      //     }}
      //   >
      //     <Link to="/about">About</Link> |{" "}
      //     <Link to="/contact">Contact</Link>
      //   </nav>
      // </div>
      <div>
        <h1>Bookkeeper</h1>
        <nav>
          <Link to="/about">about</Link> |{" "}
          <Link to="/contact">Expenses</Link>
        </nav>
      </div>
    );
  }
}

export default App;
