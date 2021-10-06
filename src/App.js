import { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState([""]);

  const addItem = e => {
    e.preventDefault();
    setCartItems([
      ...cartItems, {
        id: cartItems.length,
        name: itemName,
        qty: 1
      }
    ]);
    setItemName("");
  }

  return (
    <div className="App">
      <Header />
      <AddProduct addItem={addItem} setItemName={setItemName} itemName={itemName}/>
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;
