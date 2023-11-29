import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {


  const cartCntx = useContext(CartContext);

  const addItemQuantityHandler = (itemId) => {
    // Assuming you want to increase the quantity
    cartCntx.addItem({ ...cartCntx.items.find(item => item.id === itemId), quantity: 1 });
  };



  const removeItemQuantityHandler = (itemId) => {
    const targetItem = cartCntx.items.find((item) => item.id === itemId);
  
    if (targetItem) {
      if (targetItem.quantity > 1) {
        // Decrease the quantity by 1
        cartCntx.addItem({ ...targetItem, quantity: -1 });
      } else {
        // Remove the entire item from the cart
        cartCntx.removeItem(itemId);
      }
    } else {
      console.error("Item not found");
    }
  };
  
 

  const cartItems = (
    <ul>
      {cartCntx.items.map((item) => (
        // <li>Name: {item.name} Price: {item.price} Quantity: {item.quantity}</li>)}
        <li key={item.id}>
          <div className="cart-item">
            <h2>{item.name} </h2>
            ${item.price} 
            <div className={classes.itemCounts}>x {item.quantity}</div>
          </div>
          <div className="cart-item-btns">
            <button onClick={() => addItemQuantityHandler(item.id)}>+</button>
            <button onClick={() => removeItemQuantityHandler(item.id)}>-</button>
          </div>
        </li>
      ))}
    </ul>
  );



  const totalAmount = cartCntx.totalAmount;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount: </span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;








