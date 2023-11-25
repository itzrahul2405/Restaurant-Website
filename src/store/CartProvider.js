import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {

    const [items, updateItems] = useState([])
    const [totalAmount, updateTotalAmount] = useState(0)
  

    // const addItemToCartHandler = (item) => {
    //     // cartContext.items.push(item)
    //     updateItems([...items, item])
    //     updateTotalAmount(totalAmount + item.price*item.quantity)
    //     console.log('inside addItemToCartHandler', cartContext)
    // }


    const addItemToCartHandler = (item) => {
        // Check if the item is already in the cart
        const existingCartItem = items.find((cartItem) => cartItem.id === item.id);
    
        // If the item is in the cart, update its quantity; otherwise, add it to the cart
        if (existingCartItem) {
            updateItems((prevItems) => {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: Number(cartItem.quantity) + Number(item.quantity) } : cartItem
                );
            });
        } else {
            updateItems((prevItems) => [...prevItems, { ...item }]);
        }
    
        // Update the total amount
        updateTotalAmount(totalAmount + item.price*item.quantity)

    };
    




    

    const removeItemFromCartHandler = () => {}

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }



    return(
        <CartContext.Provider value={cartContext} >
            {console.log('inside CartContext.Provider', cartContext)}
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
