import React from 'react';
import './App.css';

import MainLayout from './layouts/MainLayout';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Laptops from './components/Laptops';
import Smartphones from './components/Smartphones';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <MainLayout>
              <Route exact path="/" component={Laptops} />

              <Route path="/laptops" component={Laptops} />
              
              <Route path="/smartphones" component={Smartphones} />
            </MainLayout>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
