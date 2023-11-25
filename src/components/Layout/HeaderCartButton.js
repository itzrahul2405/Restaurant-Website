import React,{ useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';




const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext)


    const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
        // console.log(item.quantity, curNumber)
        return curNumber + Number(item.quantity);
    }, 0)
    
    return (  
    
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}> 
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span>{cartCtx.message}</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}

export default HeaderCartButton;