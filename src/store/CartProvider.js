import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {

    const [items, updateItems] = useState([])
    const [totalAmount, updateTotalAmount] = useState(0)

    const addItemToCartHandler = (item) => {
        // cartContext.items.push(item)
        updateItems([...items, item])
        updateTotalAmount(totalAmount + item.price*item.quantity)
        console.log('inside addItemToCartHandler', cartContext)
    }




    

    const removeItemFromCartHandler = () => {}

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message: 'click here'
    }



    return(
        <CartContext.Provider value={cartContext} >
            {console.log('inside CartContext.Provider', cartContext)}
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
