import './App.css';
import React, { useState } from 'react';
import ShoppingCartSideBar from './order/ShoppingCartSideBar';
import LandingPage from './onepage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './product/ProductDetail';
import ProductList from './product/ProductList';
import About from './onepage/About';
import Contact from './onepage/Contact';
import Profile from './account/Profile';
import Favorite from './account/Favorite';
import APHeader from './shared/Header';
import APNavigator from './shared/Navigator';

const App: React.FC = () => {
  // TODO: context: https://reactjs.org/docs/context.html
  // const showCart = React.createContext(false);

  return (
    <div className="font-josefin-medium">
      <h1>Bookkeeper</h1>
      <APHeader />
      <APNavigator />
      <LandingPage></LandingPage>

      <ShoppingCartSideBar />

      {/* this is just a router */}
      <BrowserRouter>
        <Routes>
          <Route path="products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="profile" element={<Profile />} />
          <Route path="favorite" element={<Favorite />} />

          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
