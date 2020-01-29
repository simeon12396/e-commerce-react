import React from 'react';
import './App.css';

import MainLayout from './layouts/MainLayout';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Laptops from './components/Laptops';
import Smartphones from './components/Smartphones';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';

import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ProductContextProvider } from './contexts/ProductContext';

function App() {
  return (
    <ShoppingCartProvider>
      <ProductContextProvider>
        <div className="App">
          <Router>
            <Switch>
              <MainLayout>
                <Route exact path="/" component={Laptops} />

                <Route path="/laptops" component={Laptops} />
                
                <Route path="/smartphones" component={Smartphones} />

                <Route path="/shopping-cart" component={ShoppingCart} />

                <Route path="/product/:id" component={Product} />
              </MainLayout>
            </Switch>
          </Router>
        </div>
      </ProductContextProvider>
    </ShoppingCartProvider>
  );
}

export default App;
