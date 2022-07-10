import './App.css';
import React from 'react';
import LandingPage from './onepage/LandingPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './product/ProductDetail';
import ProductList from './product/ProductList';
import About from './onepage/About';
import Contact from './onepage/Contact';
import Profile from './account/Profile';
import Favorite from './account/Favorite';
import ShoppingCart from './order/ShoppingCart';
import APHeader from './shared/Header';
import Navigation from './shared/Navigator';
import { WithProductsContext } from './context/ProductsContext';

const App: React.FC = () => {
  return (
    <div className="font-josefin-medium">
      <BrowserRouter>
        {/* LANDING HOME PAGE */}
        <APHeader />
        <WithProductsContext><Navigation /></WithProductsContext>
        {/* TODO: this should be the "Shopping cart buttons" */}
        {/* <ShoppingCartSideBar placement={'end'} name={'Shopping Cart'} /> */}

         <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />

            <Route path="products" element={<Navigate replace to="products/:id" />} />  
            <Route path="products/:id" element={ <WithProductsContext ><ProductList /></WithProductsContext>} />
          
            {/* <Route path="products/:id" element={<ProductDetail />} /> */}

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="profile" element={<Profile />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />

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
