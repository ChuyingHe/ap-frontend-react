import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Favorite from "./account/Favorite";
import LoginControl from "./account/Login";
import Profile from "./account/Profile";
import "./App.css";
import { WithLoginContext } from "./context/LoginContext";
import { WithProductsContext } from "./context/ProductsContext";
import About from "./onepage/About";
import Contact from "./onepage/Contact";
import LandingPage from "./onepage/LandingPage";
import ShoppingCart from "./order/ShoppingCart";
import ProductList from "./product/ProductList";
import APHeader from "./shared/Header";
import Navigation from "./shared/Navigator";

const App: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      <div className="font-josefin-medium">
        <BrowserRouter>
          <APHeader />

          <WithLoginContext>
            <WithProductsContext>
              <Navigation login={loginStatus} setLogin={setLoginStatus} />
            </WithProductsContext>
          </WithLoginContext>
          {/* TODO: this should be the "Shopping cart buttons" */}
          {/* <ShoppingCartSideBar placement={'end'} name={'Shopping Cart'} /> */}

          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/" element={<Navigate replace to="/home" />} />

            <Route
              path="products"
              element={<Navigate replace to="products/:id" />}
            />
            <Route
              path="products/:id"
              element={
                <WithProductsContext>
                  <ProductList />
                </WithProductsContext>
              }
            />

            {/* <Route path="products/:id" element={<ProductDetail />} /> */}

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route
              path="profile"
              element={
                <WithLoginContext>
                  <Profile />
                </WithLoginContext>
              }
            />
            <Route
              path="favorite"
              element={
                <WithLoginContext>
                  <Favorite />
                </WithLoginContext>
              }
            />
            <Route
              path="shopping-cart"
              element={
                <WithLoginContext>
                  <ShoppingCart />
                </WithLoginContext>
              }
            />

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
