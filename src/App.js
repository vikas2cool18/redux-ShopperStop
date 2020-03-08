import React from 'react';
import './App.css';
import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import ShoppingStats from './components/ShoppingStats';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <>
    <Jumbotron />
    <div className="container">
      <div className="row">
      <Grocery />
      <ShoppingBag />
      <ShoppingStats />
      </div>
    </div>
    </>
  );
}

export default App;
