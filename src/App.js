import React, { useState } from 'react'    // we use useState in this file because this is where er do render the Cart

import Header from "./components/Layout/Header";
import Meals from './components/Meal/Meals'
import Cart from './components/Cart/Cart';



function App() {

  const[cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart  onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
