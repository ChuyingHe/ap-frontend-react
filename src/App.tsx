import "./App.css";
import React, { useState } from "react";
import ShoppingCartSideBar from "./order/ShoppingCartSideBar";
import LandingPage from "./onepage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./product/ProductDetail";
import ProductList from "./product/ProductList";
import About from "./onepage/About";
import Contact from "./onepage/Contact";
import Profile from "./account/Profile";
import Favorite from "./account/Favorite";
import ShoppingCart from "./order/ShoppingCart";
import APHeader from "./shared/Header";
import APNavigator from "./shared/Navigator";
import LoginControl from "./account/Login";

const App: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <div className="font-josefin-medium">
        {/* LANDING HOME PAGE */}
        <APHeader />
        <APNavigator login={loginStatus} setLogin={setLoginStatus} />
        {/* TODO: this should be the "Shopping cart buttons" */}
        {/* <ShoppingCartSideBar placement={'end'} name={'Shopping Cart'} /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="profile" element={<Profile />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>

      {/* OPTIONAL VIEWS */}
      <LoginControl login={loginStatus} setLogin={setLoginStatus} />
    </>
  );
};

export default App;
