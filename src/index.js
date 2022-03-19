import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './custom.scss';
import About from './onepage/About';
import Contact from './onepage/Contact';
import APNavigator from './shared/Navigator';
import APHeader from './shared/Header';
import ProductList from './product/ProductList';
import ProductDetail from './product/ProductDetail';
import Profile from './account/Profile';
import Favorite from './account/Favorite';
import ShoppingCart from './order/ShoppingCart';

ReactDOM.render(
  <React.StrictMode>
    <APHeader />
    <APNavigator />

    {/* Router: https://reactrouter.com/docs/en/v6/getting-started/tutorial */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="products" element={<ProductList />} />
        <Route path="productdetail" element={<ProductDetail />} />
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
